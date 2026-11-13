#!/usr/bin/env node
/**
 * Smoke test contra un despliegue real de Vercel.
 *
 * Uso:
 *   npm run smoke:prod -- https://tu-proyecto.vercel.app
 *   PROD_URL=https://tu-proyecto.vercel.app npm run smoke:prod
 *
 * No crea usuarios ni modifica datos. Sirve para detectar el fallo típico de
 * Vercel en el que /api/health responde pero las rutas anidadas (/api/auth/login)
 * devuelven el 404 HTML de la plataforma en vez de llegar a Express.
 */
const base = (process.argv[2] || process.env.PROD_URL || '').replace(/\/$/, '');

if (!base) {
  console.error('Uso: npm run smoke:prod -- https://tu-proyecto.vercel.app');
  process.exit(1);
}

const checks = [];

async function request(path, options = {}) {
  const response = await fetch(`${base}${path}`, options);
  const text = await response.text();
  let json = null;
  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    json = null;
  }
  return { status: response.status, contentType: response.headers.get('content-type') ?? '', text, json };
}

function check(name, condition, extra) {
  checks.push({ name, ok: Boolean(condition) });
  if (!condition) {
    console.error(`  FALLO  ${name}${extra ? ` -> ${extra}` : ''}`);
  } else {
    console.log(`  OK     ${name}`);
  }
}

console.log(`Smoke test: ${base}`);

const health = await request('/api/health');
check('GET /api/health responde 200 JSON', health.status === 200 && health.json?.ok === true, `${health.status} ${health.text.slice(0, 120)}`);

const profile = await request('/api/student/profile');
check('GET /api/student/profile llega a Express (401 JSON)', profile.status === 401 && profile.contentType.includes('application/json'), `${profile.status} ${profile.contentType}`);

const login = await request('/api/auth/login', {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify({ email: 'no-es-un-email', password: '' }),
});
check('POST /api/auth/login llega a Express (400 JSON)', login.status === 400 && login.contentType.includes('application/json'), `${login.status} ${login.contentType}`);

const admin = await request('/api/admin/overview');
check('GET /api/admin/overview llega a Express (401 JSON)', admin.status === 401 && admin.contentType.includes('application/json'), `${admin.status} ${admin.contentType}`);

const missing = await request('/api/ruta-inexistente');
check(
  'Las rutas anidadas no devuelven el 404 de la plataforma',
  missing.status === 404 && missing.text.includes('Cannot GET'),
  `${missing.status} ${missing.text.slice(0, 120)}`
);

const failures = checks.filter((entry) => !entry.ok).length;
console.log(`\n${checks.length - failures}/${checks.length} comprobaciones superadas.`);
process.exit(failures === 0 ? 0 : 1);
