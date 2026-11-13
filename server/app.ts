import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { pool, initDb } from './db';
import {
  assertJwtSecret,
  cleanString,
  createRateLimit,
  isAllowedOrigin,
  isEmail,
  stringArray,
} from './security';

dotenv.config();

const app = express();
let JWT_SECRET = process.env.JWT_SECRET ?? '';
let jwtConfigError: string | null = null;

try {
  JWT_SECRET = assertJwtSecret(JWT_SECRET);
} catch (err) {
  jwtConfigError = err instanceof Error ? err.message : 'JWT_SECRET no válido';
}

const LEVELS = new Set(['A1', 'A2', 'B1', 'B2']);

// Hash de relleno para que un email inexistente tarde lo mismo que uno válido.
// Evita enumerar cuentas midiendo el tiempo de respuesta del login.
const DUMMY_PASSWORD_HASH = '$2b$10$NzA7mY.hUbz434.HGsQ8B.nHIN07zbYNlkobCAP4i6jrtQNYBDLJm';

app.disable('x-powered-by');
// En Vercel (y cualquier proxy) la IP real llega en X-Forwarded-For. Sin esto,
// el rate limit agruparía a todos los clientes bajo la IP del proxy.
app.set('trust proxy', 1);
app.use(express.json({ limit: '100kb' }));

// CORS: allowlist + localhost + Vercel deployments. Same-origin calls on Vercel
// do not need VITE_API_URL.
const allowedOrigins = (process.env.CORS_ORIGIN ?? '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (isAllowedOrigin(origin, allowedOrigins)) return callback(null, true);
      return callback(new Error('Origin not allowed by CORS'));
    },
  })
);

// Fail closed but with a clear JSON error if a required secret is missing.
// Vercel shows these messages in the response and in the function logs.
app.use((_req: Request, res: Response, next: NextFunction) => {
  if (jwtConfigError) {
    return res.status(503).json({
      error: `Configuración del servidor incompleta: ${jwtConfigError}`,
    });
  }
  return next();
});

// In-memory rate limiting is best-effort on serverless, but blocks basic abuse.
const rateLimitsDisabled = process.env.RATE_LIMIT_DISABLED === '1';
const passthrough = (_req: Request, _res: Response, next: NextFunction) => next();
const authLimiter = rateLimitsDisabled ? passthrough : createRateLimit(15 * 60 * 1000, 30);
const apiLimiter = rateLimitsDisabled ? passthrough : createRateLimit(15 * 60 * 1000, 600);

app.use('/api', apiLimiter);

// Vercel serverless functions are cold-started per instance; initialize the
// schema once per instance and reuse the promise for every request.
let dbReady: Promise<void> | null = null;

export function ensureDb(): Promise<void> {
  if (!dbReady) {
    dbReady = initDb().catch((err) => {
      dbReady = null;
      throw err;
    });
  }
  return dbReady;
}

app.use(async (_req: Request, _res: Response, next: NextFunction) => {
  try {
    await ensureDb();
    next();
  } catch (err) {
    next(err);
  }
});

export const authenticate = (req: any, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const token = authHeader.slice('Bearer '.length).trim();
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    return next();
  } catch {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};

async function touchActivity(userId: number): Promise<number> {
  const result = await pool.query(
    `UPDATE users
     SET streak_days = CASE
           WHEN last_active_date IS NULL THEN 1
           WHEN last_active_date = CURRENT_DATE THEN GREATEST(streak_days, 1)
           WHEN last_active_date = CURRENT_DATE - 1 THEN streak_days + 1
           ELSE 1
         END,
         last_active_date = CURRENT_DATE
     WHERE id = $1
     RETURNING streak_days`,
    [userId]
  );
  return result.rows[0]?.streak_days ?? 1;
}

async function ensureProfile(userId: number) {
  await pool.query(
    `INSERT INTO student_profiles (user_id) VALUES ($1)
     ON CONFLICT (user_id) DO NOTHING`,
    [userId]
  );
}

// 1. REGISTER
app.post('/api/auth/register', authLimiter, async (req: Request, res: Response) => {
  const email = isEmail(req.body?.email) ? req.body.email.trim().toLowerCase() : null;
  const password = cleanString(req.body?.password, 200);
  const name = cleanString(req.body?.name, 150);
  const currentLevel = LEVELS.has(req.body?.current_level) ? req.body.current_level : 'A1';

  if (!email || !name || !password) {
    return res.status(400).json({ error: 'Nombre, correo y contraseña son obligatorios.' });
  }
  if (password.length < 8) {
    return res.status(400).json({ error: 'La contraseña debe tener al menos 8 caracteres.' });
  }

  try {
    const existing = await pool.query('SELECT id FROM users WHERE email = $1', [email]);
    if (existing.rows.length > 0) {
      return res.status(400).json({ error: 'Este correo electrónico ya está registrado.' });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const result = await pool.query(
      `INSERT INTO users (email, password_hash, name, role, current_level, last_active_date)
       VALUES ($1, $2, $3, 'student', $4, CURRENT_DATE)
       RETURNING id, email, name, role, current_level, streak_days, drills_completed`,
      [email, passwordHash, name, currentLevel]
    );

    const user = result.rows[0];

    await ensureProfile(user.id);
    await pool.query(
      `UPDATE student_profiles
       SET obstacles = $2,
           mastered_chunks = $3,
           error_bank = $4,
           session_summary = $5,
           completed_lessons = $6
       WHERE user_id = $1`,
      [
        user.id,
        JSON.stringify(['Hesitación al hablar', 'Traducción mental español-inglés']),
        JSON.stringify(['What do you mean by...', 'Let me think for a second...']),
        JSON.stringify([]),
        `Cuenta iniciada en nivel ${currentLevel}`,
        JSON.stringify([]),
      ]
    );

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role, name: user.name },
      JWT_SECRET,
      { expiresIn: '30d' }
    );

    return res.status(201).json({ token, user });
  } catch (err) {
    console.error('Register error:', err);
    return res.status(500).json({ error: 'Server error during registration' });
  }
});

// 2. LOGIN
app.post('/api/auth/login', authLimiter, async (req: Request, res: Response) => {
  const email = isEmail(req.body?.email) ? req.body.email.trim().toLowerCase() : null;
  const password = cleanString(req.body?.password, 200);

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' });
  }

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (result.rows.length === 0) {
      await bcrypt.compare(password, DUMMY_PASSWORD_HASH);
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const streakDays = await touchActivity(user.id);

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role, name: user.name },
      JWT_SECRET,
      { expiresIn: '30d' }
    );

    return res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        current_level: user.current_level,
        streak_days: streakDays,
        drills_completed: user.drills_completed,
      },
    });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ error: 'Server error during login' });
  }
});

// 3. GET CURRENT PROFILE, POSITION, METRICS AND WORKBOOK ANSWERS
app.get('/api/student/profile', authenticate, async (req: any, res: Response) => {
  try {
    const streakDays = await touchActivity(req.user.id);

    const userRes = await pool.query(
      `SELECT id, email, name, role, current_level, streak_days, drills_completed
       FROM users WHERE id = $1`,
      [req.user.id]
    );
    if (userRes.rows.length === 0) return res.status(404).json({ error: 'User not found' });

    const profRes = await pool.query('SELECT * FROM student_profiles WHERE user_id = $1', [
      req.user.id,
    ]);
    const profile = profRes.rows[0] || {};

    const answersRes = await pool.query(
      `SELECT lesson_id, question_id, user_text
       FROM workbook_answers WHERE user_id = $1 ORDER BY updated_at ASC`,
      [req.user.id]
    );

    return res.json({
      user: { ...userRes.rows[0], streak_days: streakDays },
      profile: {
        student_name: userRes.rows[0].name,
        current_level: userRes.rows[0].current_level,
        obstacles: profile.obstacles ?? [],
        mastered_chunks: profile.mastered_chunks ?? [],
        error_bank: profile.error_bank ?? [],
        session_summary: profile.session_summary ?? '',
        completed_lessons: profile.completed_lessons ?? [],
        last_active_lesson_id: profile.last_active_lesson_id ?? null,
        last_active_step: profile.last_active_step ?? null,
      },
      workbook_answers: answersRes.rows,
    });
  } catch (err) {
    console.error('Fetch profile error:', err);
    return res.status(500).json({ error: 'Error fetching profile' });
  }
});

// 4. UPDATE STUDENT PROFILE & PROGRESSION
app.put('/api/student/profile', authenticate, async (req: any, res: Response) => {
  const { current_level, obstacles, mastered_chunks, error_bank, session_summary, completed_lessons } =
    req.body ?? {};

  if (current_level !== undefined && !LEVELS.has(current_level)) {
    return res.status(400).json({ error: 'Nivel no válido.' });
  }

  const obstaclesValue = obstacles === undefined ? undefined : stringArray(obstacles);
  const masteredValue =
    mastered_chunks === undefined ? undefined : stringArray(mastered_chunks);
  const errorBankValue =
    error_bank === undefined || !Array.isArray(error_bank)
      ? undefined
      : JSON.stringify(error_bank.slice(0, 50));
  const completedValue =
    completed_lessons === undefined ? undefined : stringArray(completed_lessons);
  const summaryValue =
    session_summary === undefined ? undefined : cleanString(session_summary, 2000);

  if (
    (obstacles !== undefined && obstaclesValue === null) ||
    (mastered_chunks !== undefined && masteredValue === null) ||
    (error_bank !== undefined && errorBankValue === undefined) ||
    (completed_lessons !== undefined && completedValue === null) ||
    (session_summary !== undefined && summaryValue === null)
  ) {
    return res.status(400).json({ error: 'Datos de perfil no válidos.' });
  }

  try {
    if (current_level !== undefined) {
      await pool.query('UPDATE users SET current_level = $1 WHERE id = $2', [
        current_level,
        req.user.id,
      ]);
    }

    await ensureProfile(req.user.id);
    await pool.query(
      `UPDATE student_profiles
       SET obstacles = COALESCE($1, obstacles),
           mastered_chunks = COALESCE($2, mastered_chunks),
           error_bank = COALESCE($3, error_bank),
           session_summary = COALESCE($4, session_summary),
           completed_lessons = COALESCE($5, completed_lessons),
           updated_at = NOW()
       WHERE user_id = $6`,
      [
        obstaclesValue ? JSON.stringify(obstaclesValue) : null,
        masteredValue ? JSON.stringify(masteredValue) : null,
        errorBankValue ?? null,
        summaryValue ?? null,
        completedValue ? JSON.stringify(completedValue) : null,
        req.user.id,
      ]
    );

    return res.json({ success: true, message: 'Profile progress updated' });
  } catch (err) {
    console.error('Update profile error:', err);
    return res.status(500).json({ error: 'Error updating profile' });
  }
});

// 5. SAVE EXACT POSITION (LAST ACTIVE LESSON & STEP)
app.put('/api/student/position', authenticate, async (req: any, res: Response) => {
  const lessonId = cleanString(req.body?.last_active_lesson_id, 80);
  const step = cleanString(req.body?.last_active_step, 40);

  if (!lessonId || !step) {
    return res.status(400).json({ error: 'Lección y paso son obligatorios.' });
  }

  try {
    await ensureProfile(req.user.id);
    await pool.query(
      `UPDATE student_profiles
       SET last_active_lesson_id = $1, last_active_step = $2, updated_at = NOW()
       WHERE user_id = $3`,
      [lessonId, step, req.user.id]
    );
    return res.json({ success: true });
  } catch (err) {
    console.error('Save position error:', err);
    return res.status(500).json({ error: 'Error saving position' });
  }
});

// 6. SAVE A WORKBOOK ANSWER (UPSERT) AND COUNT THE RESPONSE
app.post('/api/student/workbook', authenticate, async (req: any, res: Response) => {
  const lessonId = cleanString(req.body?.lesson_id, 80);
  const questionId = cleanString(req.body?.question_id, 80);
  const userText = cleanString(req.body?.user_text, 4000);

  if (!lessonId || !questionId || !userText) {
    return res.status(400).json({ error: 'Datos de respuesta no válidos.' });
  }

  try {
    const upsert = await pool.query(
      `INSERT INTO workbook_answers (user_id, lesson_id, question_id, user_text, updated_at)
       VALUES ($1, $2, $3, $4, NOW())
       ON CONFLICT (user_id, question_id)
       DO UPDATE SET user_text = EXCLUDED.user_text,
                     lesson_id = EXCLUDED.lesson_id,
                     updated_at = NOW()
       RETURNING (xmax = 0) AS is_new`,
      [req.user.id, lessonId, questionId, userText]
    );

    const counted = Boolean(upsert.rows[0]?.is_new);

    if (counted) {
      const result = await pool.query(
        'UPDATE users SET drills_completed = drills_completed + 1 WHERE id = $1 RETURNING drills_completed',
        [req.user.id]
      );
      return res.json({
        success: true,
        counted: true,
        drills_completed: result.rows[0]?.drills_completed ?? 0,
      });
    }

    const current = await pool.query('SELECT drills_completed FROM users WHERE id = $1', [
      req.user.id,
    ]);

    return res.json({
      success: true,
      counted: false,
      drills_completed: current.rows[0]?.drills_completed ?? 0,
    });
  } catch (err) {
    console.error('Save workbook answer error:', err);
    return res.status(500).json({ error: 'Error saving workbook answer' });
  }
});

// 7. LOG A LISTENING/REFLEX DRILL AND UPDATE MASTERED CHUNKS / ERROR BANK
app.post('/api/student/drill', authenticate, async (req: any, res: Response) => {
  const chunk = cleanString(req.body?.chunk, 255);
  const drillType = cleanString(req.body?.drill_type, 50) ?? 'reflex';
  const isCorrect = req.body?.is_correct !== false;
  const errorText = cleanString(req.body?.error, 500);
  const correction = cleanString(req.body?.correction, 500);
  const userAnswer = cleanString(req.body?.user_answer, 1000);

  if (!chunk) {
    return res.status(400).json({ error: 'El chunk es obligatorio.' });
  }

  try {
    await pool.query(
      `INSERT INTO drill_logs (user_id, drill_type, chunk, is_correct, user_answer, error_text, correction)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [req.user.id, drillType, chunk, isCorrect, userAnswer ?? null, errorText ?? null, correction ?? null]
    );

    await ensureProfile(req.user.id);

    if (isCorrect) {
      await pool.query(
        `UPDATE student_profiles
         SET mastered_chunks = CASE
               WHEN mastered_chunks ? $1 THEN mastered_chunks
               ELSE mastered_chunks || to_jsonb($1::text)
             END,
             updated_at = NOW()
         WHERE user_id = $2`,
        [chunk, req.user.id]
      );
    }

    if (errorText && correction) {
      const bankRes = await pool.query(
        'SELECT error_bank FROM student_profiles WHERE user_id = $1',
        [req.user.id]
      );
      const current = Array.isArray(bankRes.rows[0]?.error_bank) ? bankRes.rows[0].error_bank : [];
      const updated = [
        { error: errorText, correction, timestamp: new Date().toISOString() },
        ...current,
      ].slice(0, 20);

      await pool.query(
        'UPDATE student_profiles SET error_bank = $1, updated_at = NOW() WHERE user_id = $2',
        [JSON.stringify(updated), req.user.id]
      );
    }

    const result = await pool.query(
      'UPDATE users SET drills_completed = drills_completed + 1 WHERE id = $1 RETURNING drills_completed',
      [req.user.id]
    );

    return res.json({ success: true, drills_completed: result.rows[0]?.drills_completed ?? 0 });
  } catch (err) {
    console.error('Log drill error:', err);
    return res.status(500).json({ error: 'Error logging drill' });
  }
});

// 8. ADMIN ENDPOINT: List all students and logs
app.get('/api/admin/overview', authenticate, async (req: any, res: Response) => {
  try {
    // El rol se comprueba en la base de datos, no solo en el JWT: si a un
    // usuario se le retira el rol admin, pierde el acceso de inmediato aunque
    // conserve un token antiguo.
    const roleRes = await pool.query('SELECT role FROM users WHERE id = $1', [req.user.id]);
    if (roleRes.rows[0]?.role !== 'admin') {
      return res.status(403).json({ error: 'Acceso denegado: solo para administradores.' });
    }

    const studentsRes = await pool.query(`
      SELECT u.id, u.name, u.email, u.role, u.current_level, u.streak_days, u.drills_completed, u.created_at,
             sp.obstacles, sp.mastered_chunks, sp.error_bank, sp.completed_lessons, sp.session_summary
      FROM users u
      LEFT JOIN student_profiles sp ON u.id = sp.user_id
      ORDER BY u.created_at DESC
    `);

    return res.json({ students: studentsRes.rows });
  } catch (err) {
    console.error('Admin overview error:', err);
    return res.status(500).json({ error: 'Error fetching admin overview' });
  }
});

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ ok: true });
});

// Central error handler (includes CORS rejections and malformed JSON)
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  if (err?.message === 'Origin not allowed by CORS') {
    return res.status(403).json({ error: 'Origen no permitido.' });
  }
  if (err?.type === 'entity.parse.failed') {
    return res.status(400).json({ error: 'JSON no válido.' });
  }
  if (err?.type === 'entity.too.large' || err?.status === 413) {
    return res.status(413).json({ error: 'El cuerpo de la solicitud es demasiado grande.' });
  }
  if (err?.message === 'DATABASE_URL_MISSING') {
    return res.status(503).json({
      error: 'Base de datos no configurada: define DATABASE_URL en Vercel.',
    });
  }
  console.error('Unhandled error:', err);
  return res.status(500).json({ error: 'Error interno del servidor.' });
});

export default app;
