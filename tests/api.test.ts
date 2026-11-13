import 'dotenv/config';
import { after, before, describe, test } from 'node:test';
import assert from 'node:assert/strict';
import type { Server } from 'node:http';
import type { AddressInfo } from 'node:net';

const hasDatabase = Boolean(process.env.DATABASE_URL);

async function call(
  baseUrl: string,
  path: string,
  options: { method?: string; body?: unknown; token?: string; headers?: Record<string, string> } = {}
): Promise<{ status: number; body: any; headers: Headers }> {
  const headers: Record<string, string> = { ...options.headers };
  let body: string | undefined;

  if (options.body !== undefined) {
    headers['content-type'] = 'application/json';
    body = typeof options.body === 'string' ? options.body : JSON.stringify(options.body);
  }
  if (options.token) headers.authorization = `Bearer ${options.token}`;

  const response = await fetch(`${baseUrl}${path}`, {
    method: options.method ?? (body ? 'POST' : 'GET'),
    headers,
    body,
  });

  const text = await response.text();
  let parsed: any = null;
  try {
    parsed = text ? JSON.parse(text) : null;
  } catch {
    parsed = text;
  }

  return { status: response.status, body: parsed, headers: response.headers };
}

describe('API de EN-Class', { skip: !hasDatabase }, () => {
  let server: Server;
  let baseUrl = '';
  let pool: any;
  const createdEmails = new Set<string>();

  const uniqueEmail = (label: string) =>
    `${label}.${Date.now()}.${Math.random().toString(36).slice(2, 8)}@example.com`;

  before(async () => {
    process.env.RATE_LIMIT_DISABLED = '1';

    // Import dinámico: el módulo valida JWT_SECRET y carga .env al importarse.
    const { default: app } = await import('../server/app');
    const db = await import('../server/db');
    pool = db.pool;

    server = app.listen(0);
    await new Promise<void>((resolve) => server.once('listening', () => resolve()));
    const address = server.address() as AddressInfo;
    baseUrl = `http://127.0.0.1:${address.port}`;
  });

  after(async () => {
    if (createdEmails.size > 0) {
      await pool.query('DELETE FROM users WHERE email = ANY($1)', [[...createdEmails]]);
    }
    await new Promise<void>((resolve) => server.close(() => resolve()));
    await pool.end();
  });

  test('registro, login y persistencia del perfil', async () => {
    const email = uniqueEmail('flujo');
    createdEmails.add(email);
    const password = 'ClaveSegura123';

    const register = await call(baseUrl, '/api/auth/register', {
      body: { email, password, name: 'Alumno Flujo', current_level: 'A2' },
    });
    assert.equal(register.status, 201);
    assert.ok(register.body.token);
    assert.equal(register.body.user.email, email);
    assert.equal(register.body.user.role, 'student');
    assert.equal(register.body.user.current_level, 'A2');

    const login = await call(baseUrl, '/api/auth/login', { body: { email, password } });
    assert.equal(login.status, 200);
    assert.ok(login.body.token);
    const token = login.body.token;

    const profile = await call(baseUrl, '/api/student/profile', { token });
    assert.equal(profile.status, 200);
    assert.equal(profile.body.user.email, email);
    assert.deepEqual(profile.body.workbook_answers, []);

    const badPosition = await call(baseUrl, '/api/student/position', {
      method: 'PUT',
      token,
      body: { last_active_lesson_id: '' },
    });
    assert.equal(badPosition.status, 400);

    const position = await call(baseUrl, '/api/student/position', {
      method: 'PUT',
      token,
      body: { last_active_lesson_id: 'lesson-01', last_active_step: 'grammar' },
    });
    assert.equal(position.status, 200);

    const firstAnswer = await call(baseUrl, '/api/student/workbook', {
      token,
      body: { lesson_id: 'lesson-01', question_id: 'q-01', user_text: 'My first answer' },
    });
    assert.equal(firstAnswer.status, 200);
    assert.equal(firstAnswer.body.counted, true);

    const repeatedAnswer = await call(baseUrl, '/api/student/workbook', {
      token,
      body: { lesson_id: 'lesson-01', question_id: 'q-01', user_text: 'Updated answer' },
    });
    assert.equal(repeatedAnswer.status, 200);
    assert.equal(repeatedAnswer.body.counted, false);
    assert.equal(repeatedAnswer.body.drills_completed, firstAnswer.body.drills_completed);

    const drill = await call(baseUrl, '/api/student/drill', {
      token,
      body: { chunk: 'What do you mean by...', drill_type: 'reflex', is_correct: true },
    });
    assert.equal(drill.status, 200);
    assert.equal(drill.body.success, true);

    const updatedProfile = await call(baseUrl, '/api/student/profile', { token });
    assert.equal(updatedProfile.status, 200);
    assert.equal(updatedProfile.body.profile.last_active_lesson_id, 'lesson-01');
    assert.equal(updatedProfile.body.profile.last_active_step, 'grammar');
    assert.ok(updatedProfile.body.profile.mastered_chunks.includes('What do you mean by...'));
    assert.equal(updatedProfile.body.workbook_answers.length, 1);
    assert.equal(updatedProfile.body.workbook_answers[0].user_text, 'Updated answer');
  });

  test('aísla los datos entre estudiantes', async () => {
    const password = 'ClaveSegura123';
    const emailA = uniqueEmail('aislamiento-a');
    const emailB = uniqueEmail('aislamiento-b');
    createdEmails.add(emailA);
    createdEmails.add(emailB);

    const registerA = await call(baseUrl, '/api/auth/register', {
      body: { email: emailA, password, name: 'Alumno A' },
    });
    const registerB = await call(baseUrl, '/api/auth/register', {
      body: { email: emailB, password, name: 'Alumno B' },
    });
    assert.equal(registerA.status, 201);
    assert.equal(registerB.status, 201);

    await call(baseUrl, '/api/student/workbook', {
      token: registerA.body.token,
      body: { lesson_id: 'lesson-02', question_id: 'q-a', user_text: 'Privado de A' },
    });

    const profileB = await call(baseUrl, '/api/student/profile', { token: registerB.body.token });
    assert.equal(profileB.status, 200);
    assert.deepEqual(profileB.body.workbook_answers, []);

    const profileA = await call(baseUrl, '/api/student/profile', { token: registerA.body.token });
    assert.equal(profileA.body.workbook_answers[0].user_text, 'Privado de A');
  });

  test('rechaza credenciales, tokens y datos inválidos', async () => {
    const email = uniqueEmail('seguridad');
    const password = 'ClaveSegura123';
    createdEmails.add(email);

    const register = await call(baseUrl, '/api/auth/register', {
      body: { email, password, name: 'Alumno Seguridad' },
    });
    assert.equal(register.status, 201);
    const token = register.body.token;

    const noToken = await call(baseUrl, '/api/student/profile');
    assert.equal(noToken.status, 401);

    const brokenToken = await call(baseUrl, '/api/student/profile', { token: 'no.es.jwt' });
    assert.equal(brokenToken.status, 401);

    const wrongPassword = await call(baseUrl, '/api/auth/login', {
      body: { email, password: 'ClaveEquivocada123' },
    });
    assert.equal(wrongPassword.status, 401);
    assert.equal(wrongPassword.body.token, undefined);

    const unknownEmail = await call(baseUrl, '/api/auth/login', {
      body: { email: uniqueEmail('fantasma'), password },
    });
    assert.equal(unknownEmail.status, 401);

    const weakPassword = await call(baseUrl, '/api/auth/register', {
      body: { email: uniqueEmail('debil'), password: 'corta', name: 'Débil' },
    });
    assert.equal(weakPassword.status, 400);

    const duplicate = await call(baseUrl, '/api/auth/register', {
      body: { email, password, name: 'Duplicado' },
    });
    assert.equal(duplicate.status, 400);

    const invalidLevel = await call(baseUrl, '/api/student/profile', {
      method: 'PUT',
      token,
      body: { current_level: 'C2' },
    });
    assert.equal(invalidLevel.status, 400);

    const injection = await call(baseUrl, '/api/auth/login', {
      body: { email: `' OR 1=1 --`, password: 'cualquiera' },
    });
    // La validación de email lo rechaza con 400; lo importante es que nunca
    // devuelva 200 ni un token.
    assert.equal(injection.status, 400);
    assert.equal(injection.body.token, undefined);

    const studentAdmin = await call(baseUrl, '/api/admin/overview', { token });
    assert.equal(studentAdmin.status, 403);
  });

  test('valida JSON malformado, cuerpo excesivo y CORS', async () => {
    const malformed = await call(baseUrl, '/api/auth/login', { body: '{ esto no es json' });
    assert.equal(malformed.status, 400);

    const oversized = await call(baseUrl, '/api/auth/login', {
      body: { email: 'a@example.com', password: 'x'.repeat(200_000) },
    });
    assert.equal(oversized.status, 413);

    const blockedOrigin = await call(baseUrl, '/api/health', {
      headers: { origin: 'https://evil.example.com' },
    });
    assert.equal(blockedOrigin.status, 403);

    const allowedOrigin = await call(baseUrl, '/api/health', {
      headers: { origin: 'http://localhost:5173' },
    });
    assert.equal(allowedOrigin.status, 200);
    assert.equal(allowedOrigin.headers.get('access-control-allow-origin'), 'http://localhost:5173');
  });

  test('revoca el acceso admin al quitar el rol en la base de datos', async () => {
    const email = uniqueEmail('admin');
    const password = 'ClaveSegura123';
    createdEmails.add(email);

    const register = await call(baseUrl, '/api/auth/register', {
      body: { email, password, name: 'Admin Temporal' },
    });
    assert.equal(register.status, 201);
    const token = register.body.token;

    await pool.query("UPDATE users SET role = 'admin' WHERE email = $1", [email]);

    const allowed = await call(baseUrl, '/api/admin/overview', { token });
    assert.equal(allowed.status, 200);
    assert.ok(Array.isArray(allowed.body.students));

    await pool.query("UPDATE users SET role = 'student' WHERE email = $1", [email]);

    const revoked = await call(baseUrl, '/api/admin/overview', { token });
    assert.equal(revoked.status, 403);
  });
});
