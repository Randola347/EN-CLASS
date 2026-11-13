# EN-Class

Plataforma de fluidez en inglés A1-B2 con teoría gramatical, vocabulario, chunks,
micro-listening, drills de reflejos, workbook interactivo y panel de administración.

Stack: React 19 + TypeScript + Vite 8 + Tailwind CSS 4 + Express 5 + PostgreSQL/Neon + JWT.

> Estado actual: las 20 lecciones (A1–B2) tienen vocabulario, chunks, listenings y
> workbook únicos, validados automáticamente antes de cada build. Consulta
> `PROMPT_TRASPASO.txt` para el traspaso completo de trabajo.

---

## 1. Requisitos

- Node.js 22 (Vercel usa Node 22; `package.json` lo fija con `engines`)
- npm 10 o superior
- Una base de datos PostgreSQL. Se recomienda [Neon](https://neon.tech) por su plan gratuito.
- Git

Comprueba las versiones:

```bash
node -v
npm -v
git --version
```

---

## 2. Instalación

```bash
git clone <URL_DEL_REPO>
cd EN-Class
npm install
```

---

## 3. Variables de entorno

Crea un archivo `.env` en la raíz del proyecto. **No lo subas a Git** (ya está en `.gitignore`).
Tienes una plantilla en `.env.example`.

```env
# Backend / API
PORT=3001
DATABASE_URL=postgresql://usuario:password@host/neondb?sslmode=require
JWT_SECRET=cambia-esto-por-un-secreto-aleatorio-de-al-menos-24-caracteres
CORS_ORIGIN=http://localhost:5173,http://127.0.0.1:5173,http://localhost:4173,http://127.0.0.1:4173

# Frontend (Vite)
# En local puede quedarse vacío: Vite hace proxy de /api al backend.
# En Vercel también debe quedarse vacío: frontend y API comparten origen.
VITE_API_URL=
```

`JWT_SECRET` es obligatorio: si falta, mide menos de 24 caracteres o sigue siendo
`secret123`, el backend se niega a arrancar. `CORS_ORIGIN` es una lista separada por
comas de dominios autorizados. Además de esa lista, la API acepta `localhost` y
cualquier despliegue `*.vercel.app`; en Vercel las llamadas son del mismo origen, así
que no necesitas configurar `CORS_ORIGIN` salvo que uses un dominio propio.

En Vercel, define al menos `DATABASE_URL` y `JWT_SECRET` en
**Project Settings → Environment Variables**. No configures `PORT`: lo gestiona Vercel.

Para generar un `JWT_SECRET` seguro:

```bash
node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"
```

### Dónde obtener `DATABASE_URL`

1. Crea un proyecto en Neon.
2. Copia la cadena de conexión.
3. Asegúrate de que termina en `?sslmode=require`.
4. Pégala en `.env`.

---

## 4. Cómo arrancar la web en local

### Opción recomendada: frontend + backend a la vez

```bash
npm run dev:all
```

Esto levanta:

- Frontend: http://localhost:5173
- Backend: http://127.0.0.1:3001

### Opción con dos terminales

Terminal 1 (backend):

```bash
npm run dev:api
```

Terminal 2 (frontend):

```bash
npm run dev:web
```

### Solo frontend

```bash
npm run dev
```

El frontend arranca, pero las llamadas a `/api` fallarán si el backend no está corriendo.

### Producción local

```bash
npm run build
npm run preview
```

`preview` también hace proxy de `/api` a `http://127.0.0.1:3001`, así que arranca el
backend en otra terminal (`npm run dev:api`) si quieres probar login y persistencia.

---

## 5. Scripts disponibles

| Script | Qué hace |
|---|---|
| `npm run dev` | Solo frontend con Vite |
| `npm run dev:web` | Solo frontend con Vite |
| `npm run dev:api` | Solo backend Express con recarga |
| `npm run dev:all` | Frontend + backend a la vez |
| `npm run build` | Valida el contenido, compila TypeScript y genera `dist/` |
| `npm run preview` | Sirve la build de producción |
| `npm run lint` | Ejecuta oxlint |
| `npm test` | Tests unitarios de seguridad + integración real contra Neon |
| `npm run smoke:prod -- URL` | Smoke test contra un despliegue real de Vercel |
| `npm run validate:content` | Valida que el contenido no tenga duplicados |
| `npm run typecheck:server` | Comprueba los tipos del backend y de `api/` |

### Tests

```bash
npm test
```

- `tests/security.test.ts` valida JWT, CORS, saneamiento de datos y rate limiting.
- `tests/api.test.ts` arranca la app real contra Neon y comprueba registro, login,
  JWT, persistencia, aislamiento entre usuarios, CORS, JSON inválido, cuerpos
  excesivos, inyección SQL y revocación del rol admin. Crea usuarios temporales con
  emails únicos y los borra al terminar.

Los tests de integración usan `DATABASE_URL` del `.env`; si no está definida, se
omiten automáticamente. Para que no interfieran con el rate limiting se ejecutan con
`RATE_LIMIT_DISABLED=1`.

---

## 6. Estructura del proyecto

```text
EN-Class/
├── src/
│   ├── components/          Componentes React
│   ├── data/
│   │   ├── levels/          Teoría y metadatos de las 20 lecciones (A1, A2, B1, B2)
│   │   ├── curriculum/      Contenido único por lección (vocab, chunks, listenings, workbook)
│   │   ├── curriculumData.ts
│   │   ├── drillsData.ts
│   │   └── rescueData.ts
│   ├── config/api.ts        URL de API configurable por entorno
│   ├── hooks/useSpeech.ts   Web Speech API
│   ├── types/               Tipos TypeScript
│   ├── App.tsx
│   └── main.tsx
├── server/
│   ├── app.ts               App Express (rutas, CORS, autenticación)
│   ├── index.ts             Entrada local: inicializa la BD y escucha en PORT
│   ├── db.ts                Pool de PostgreSQL e inicialización del esquema
│   └── security.ts          Validación, CORS y rate limiting compartidos
├── api/
│   └── [...path].ts         Función serverless catch-all de Vercel
├── tests/
│   ├── security.test.ts     Tests unitarios de validación y seguridad
│   └── api.test.ts          Integración y pentesting contra la API real
├── public/
│   └── robots.txt           Bloqueo de indexación
├── scripts/                 Generadores y validador de contenido
├── PROMPT_TRASPASO.txt      Contexto completo para continuar el trabajo
├── vercel.json              Configuración de build y funciones de Vercel
├── .env.example             Plantilla de variables de entorno
├── .env                     Variables de entorno (no se sube)
└── package.json
```

### Validación de contenido

`npm run validate:content` comprueba que no haya duplicados entre las 20 lecciones:
vocabulario, chunks, listenings, prompts de workbook y conjuntos de respuestas.
También se ejecuta automáticamente en `prebuild`, así que `npm run build` falla si
se introduce contenido repetido. Métricas esperadas: 400 vocab, 200 chunks,
60 listenings, 200 prompts de workbook y 200 conjuntos de respuestas únicos.

---

## 7. Base de datos

El backend crea y actualiza las tablas automáticamente al arrancar (`server/db.ts`):

- `users` (incluye racha y contador de drills)
- `student_profiles` (progreso, chunks dominados, banco de errores y última posición)
- `workbook_answers` (respuestas guardadas del workbook)
- `drill_logs` (registro de drills de listening/reflex)

Las columnas nuevas se añaden con `ALTER TABLE ... ADD COLUMN IF NOT EXISTS`, por lo
que una base de datos existente se actualiza sin borrar datos.

### Crear un administrador

El registro siempre crea usuarios con rol `student`. Para dar acceso al panel de
administración, promociona manualmente una cuenta desde Neon:

```sql
UPDATE users SET role = 'admin' WHERE email = 'tu-correo@ejemplo.com';
```

Vuelve a iniciar sesión después del cambio para que el nuevo JWT incluya el rol.
El endpoint de administración comprueba además el rol en la base de datos en cada
petición, de modo que si retiras el rol a alguien, pierde el acceso al instante
aunque conserve un token antiguo.

### Gestionar usuarios desde Neon (SQL Editor)

1. Entra en <https://console.neon.tech> y abre tu proyecto.
2. En el menú lateral elige **SQL Editor**.
3. Pega la consulta, revísala y ejecútala con **Run**.

```sql
-- Ver todos los usuarios
SELECT id, email, role, created_at FROM users ORDER BY id;

-- Borrar una cuenta (perfil, drills y respuestas se borran en cascada)
DELETE FROM users WHERE email = 'correo@ejemplo.com';

-- Dar o quitar el rol de administrador
UPDATE users SET role = 'admin'   WHERE email = 'correo@ejemplo.com';
UPDATE users SET role = 'student' WHERE email = 'correo@ejemplo.com';
```

### Sobre los IDs y la secuencia

El `id` es la clave interna de cada usuario. No es necesario que sea consecutivo y
**no conviene renumerarlo**: `student_profiles`, `drill_logs` y `workbook_answers`
apuntan a él con claves foráneas.

Cuando borras cuentas, la secuencia sigue avanzando y el siguiente usuario recibe
un número más alto. Si quieres que continúe justo después del ID más alto actual:

```sql
SELECT setval('users_id_seq', (SELECT COALESCE(MAX(id), 0) + 1 FROM users), false);
```

Si de verdad quieres empezar otra vez desde el ID 1, la forma limpia es vaciar la
tabla y reiniciar la identidad:

```sql
TRUNCATE TABLE users RESTART IDENTITY CASCADE;
```

Esto elimina **todas** las cuentas, perfiles, drills y respuestas. Después tendrías
que volver a registrar las cuentas y promocionar al admin otra vez.

### Endpoints principales

| Método | Ruta | Descripción |
|---|---|---|
| `POST` | `/api/auth/register` | Registro (siempre crea rol `student`) |
| `POST` | `/api/auth/login` | Login y actualización de racha |
| `GET` | `/api/student/profile` | Perfil, posición y respuestas guardadas |
| `PUT` | `/api/student/profile` | Actualizar nivel, chunks, errores y lecciones |
| `PUT` | `/api/student/position` | Guardar última lección y paso |
| `POST` | `/api/student/workbook` | Guardar respuesta del workbook |
| `POST` | `/api/student/drill` | Registrar drill y actualizar progreso |
| `GET` | `/api/admin/overview` | Panel de administración (solo rol `admin`) |
| `GET` | `/api/health` | Comprobación de salud del servicio |

Si el backend no conecta:

1. Verifica `DATABASE_URL`.
2. Comprueba que Neon esté activo.
3. Revisa que la cadena incluya `sslmode=require`.
4. Mira la consola del backend; `initDb()` imprime el error.

---

## 8. Despliegue: todo en Vercel

La app está preparada para desplegarse como **un único proyecto de Vercel**:

- El frontend React/Vite se sirve como sitio estático desde `dist/`.
- La API Express se ejecuta en una función serverless catch-all en `api/[...path].ts`.
- La persistencia sigue en **Neon** mediante `pg`.
- Frontend y API comparten el mismo dominio, así que no hay que configurar CORS ni
  `VITE_API_URL` entre ellos.

### 8.1 Configuración del proyecto en Vercel

1. Sube el proyecto a GitHub.
2. En https://vercel.com elige **Add New Project** e importa el repositorio.
3. Vercel detecta `vercel.json`:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Functions: `api/**/*.ts` (máximo 30 s)
4. En **Settings → Environment Variables** añade:
   - `DATABASE_URL` = cadena de conexión de Neon con `?sslmode=require`
   - `JWT_SECRET` = secreto aleatorio de al menos 24 caracteres
   - Opcional: `CORS_ORIGIN` = tu dominio propio, separado por comas
   - Opcional: `PG_POOL_MAX` = máximo de conexiones por instancia (por defecto `3`)
   - **No** definas `PORT` ni `VITE_API_URL`.
5. Deploy.

Cada push a `main` vuelve a desplegar automáticamente.

### 8.2 Cómo funciona la API en Vercel

`api/[...path].ts` recibe todas las rutas `/api/*` y las delega en la misma app de
Express que usas en local. En funciones Node de Vercel ese catch-all por sí solo
solo captura un segmento, por eso `vercel.json` incluye un rewrite explícito de
`/api/:path*` hacia el handler; sin él, rutas como `/api/auth/login` darían 404.
La primera petición de cada instancia inicializa el esquema de Neon de forma
perezosa (`ensureDb()`) y reutiliza un pool pequeño de conexiones. Vercel puede
apagar y recrear instancias, por lo que no hay estado en memoria importante: el
rate limiting es *best-effort* por instancia.

### 8.3 Verificar el despliegue

```bash
npm run smoke:prod -- https://tu-proyecto.vercel.app
```

Comprueba que `/api/health`, `/api/student/profile`, `/api/auth/login` y una ruta
anidada inexistente llegan a Express. Así se detecta el 404 de Vercel que aparece
cuando el rewrite de `/api/:path*` no está activo.

También puedes comprobar la salud directamente:

```bash
curl -s https://tu-proyecto.vercel.app/api/health
# {"ok":true}
```

Después comprueba desde el navegador:

1. Registro de una cuenta nueva.
2. Logout y login con esa cuenta.
3. Guardar posición, respuesta de workbook y drill; recargar y ver que persisten.
4. Panel admin con una cuenta promocionada.

Si `/api/*` devuelve HTML en vez de JSON, la función serverless no se desplegó:
revisa que `api/[...path].ts` esté en el repositorio y que los logs de Vercel no
muestren errores de `DATABASE_URL` o `JWT_SECRET`.

### 8.4 CORS y seguridad

En Vercel el navegador llama al mismo origen, así que CORS no interviene. Aun así la
API mantiene una allowlist para desarrollo y para dominios externos:

```env
CORS_ORIGIN=http://localhost:5173,https://tu-dominio-propio.com
```

Se aceptan además `localhost` y `*.vercel.app`. Cualquier otro origen recibe un 403.

Medidas activas:

- `JWT_SECRET` obligatorio y robusto; el backend no arranca si es débil.
- Contraseñas con bcrypt y comparación de relleno para emails inexistentes (evita
  enumerar cuentas por tiempo de respuesta).
- Rate limiting por IP (30 intentos de registro/login y 600 peticiones API cada
  15 minutos por instancia).
- Validación estricta de tipos, longitudes y niveles; consultas siempre parametrizadas.
- Límite de cuerpo JSON de 100 KB (responde 413 si se supera).
- Rol admin comprobado contra la base de datos en cada petición.
- `x-powered-by` desactivado y CORS cerrado por allowlist.

---

## 9. No indexar en Google

Ya se incluye `public/robots.txt` con:

```txt
User-agent: *
Disallow: /
```

Y en `index.html`:

```html
<meta name="robots" content="noindex, nofollow" />
```

Con esto la web no aparecerá en resultados de búsqueda. No es una protección de acceso:
cualquiera con el enlace puede entrar. Si necesitas proteger el contenido, añade login
y, si hace falta, restricciones por usuario.

---

## 10. Responsive

La interfaz debe funcionar de 320px a 1920px.

Puntos a revisar:

- Header sin desbordamiento en móvil.
- Navegación con scroll horizontal suave.
- Botones largos a ancho completo en móvil.
- Inputs con font-size mínimo de 16px en móvil.
- Modales con `max-h-[90vh]` y `overflow-y-auto`.
- Tablas con scroll horizontal interno, nunca en toda la página.
- Textos largos con `break-words`.

Prueba en DevTools con estos anchos:

- 320px
- 375px
- 390px
- 768px
- 1024px
- 1440px
- 1920px

---

## 11. Solución de problemas

### La API no responde en producción

- Comprueba `https://tu-proyecto.vercel.app/api/health`.
- Si devuelve **503** con `Configuración del servidor incompleta: JWT_SECRET...`,
  falta `JWT_SECRET` en Vercel o mide menos de 24 caracteres (o es `secret123`).
  Añádelo en **Settings → Environment Variables → Production** y vuelve a desplegar.
- Si devuelve **503** con `Base de datos no configurada`, falta `DATABASE_URL` en
  el entorno **Production** de Vercel.
- Revisa los logs de la función en Vercel.
- Verifica que `api/[...path].ts` está desplegado.
- Si `/api/*` devuelve HTML, la función serverless no se desplegó.

### La URL de "Visit" de Vercel da 404 en `/api`

Cada despliegue tiene una URL inmutable propia
(`https://tu-proyecto-<hash>-<equipo>.vercel.app`). Si entras por la URL de un
despliegue antiguo, ese build conserva el `vercel.json` de su momento y puede no
incluir el rewrite de `/api/:path*`; entonces el registro y el login reciben el
404 de plataforma. Usa siempre el dominio de producción
(`https://en-class.vercel.app`) o la URL del despliegue más reciente.

### Error de CORS

- En Vercel frontend y API comparten origen, así que no debería aparecer.
- Si usas un dominio propio o llamas desde otro origen, añádelo a `CORS_ORIGIN`.
- En local, `http://localhost:5173` está permitido por defecto.

### Error de conexión a Neon

- Verifica `DATABASE_URL`.
- Añade `?sslmode=require`.
- Comprueba que el proyecto de Neon no esté suspendido.

### El login no funciona

- Revisa que la API esté desplegada y que `/api/health` devuelva `{"ok":true}`.
- Comprueba `JWT_SECRET` y `DATABASE_URL` en Vercel.
- Revisa la consola del navegador (pestaña Network) y los logs de Vercel.
- Recuerda que el registro fuerza el rol `student`; el admin se promociona en Neon.

### El backend no arranca por `JWT_SECRET`

El backend exige un secreto de al menos 24 caracteres distinto de `secret123`.
Genera uno nuevo y actualízalo en `.env` y en el panel del hosting:

```bash
node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"
```

### La build falla por contenido duplicado

```bash
npm run validate:content
```

El comando muestra qué vocabulario, chunk, listening o prompt se repite y en qué
lecciones. Corrige el contenido en `src/data/curriculum/`.

### La build falla por TypeScript

```bash
npx tsc -b
npm run typecheck:server
```

Corrige los errores antes de desplegar.

---

## 12. Antes de publicar

- [ ] `.env` no está en Git (`.env.example` sí puede estar).
- [ ] `JWT_SECRET` es largo, privado y distinto de `secret123`.
- [ ] `CORS_ORIGIN` incluye el dominio de producción.
- [ ] El registro no permite crear administradores desde el cliente.
- [ ] `robots.txt` y `meta noindex` están presentes.
- [ ] `npm test` pasa.
- [ ] `npm run validate:content` pasa.
- [ ] `npm run typecheck:server` pasa.
- [ ] `npm run build` funciona.
- [ ] Probado en móvil real.
- [ ] `DATABASE_URL` y `JWT_SECRET` están definidos en Vercel.
- [ ] `/api/health` devuelve `{ "ok": true }` en el dominio de Vercel.
- [ ] Registro, login y persistencia funcionan en producción.
