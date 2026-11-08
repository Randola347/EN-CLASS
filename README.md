# EN-Class

Plataforma de fluidez en inglés A1-B2 con teoría gramatical, vocabulario, chunks,
micro-listening, drills de reflejos, workbook interactivo y panel de administración.

Stack: React 19 + TypeScript + Vite 8 + Tailwind CSS 4 + Express 5 + PostgreSQL/Neon + JWT.

> Estado actual: las 20 lecciones (A1–B2) tienen vocabulario, chunks, listenings y
> workbook únicos, validados automáticamente antes de cada build. Consulta
> `PROMPT_TRASPASO.txt` para el traspaso completo de trabajo.

---

## 1. Requisitos

- Node.js 20 o superior
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
# Backend
PORT=3001
DATABASE_URL=postgresql://usuario:password@host/neondb?sslmode=require
JWT_SECRET=cambia-esto-por-un-secreto-aleatorio-de-al-menos-24-caracteres
CORS_ORIGIN=http://localhost:5173,http://127.0.0.1:5173,http://localhost:4173,http://127.0.0.1:4173

# Frontend (Vite)
# Déjalo vacío en local si usas el proxy de Vite.
# En producción pon la URL pública del backend, sin barra final.
VITE_API_URL=
```

`JWT_SECRET` es obligatorio: si falta, mide menos de 24 caracteres o sigue siendo
`secret123`, el backend se niega a arrancar. `CORS_ORIGIN` es una lista separada por
comas de los dominios autorizados; en producción añade el dominio de Vercel.

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
| `npm run validate:content` | Valida que el contenido no tenga duplicados |
| `npm run typecheck:server` | Comprueba los tipos del backend |

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
│   ├── index.ts             API Express
│   └── db.ts                Pool de PostgreSQL e inicialización
├── public/
│   └── robots.txt           Bloqueo de indexación
├── scripts/                 Generadores y validador de contenido
├── PROMPT_TRASPASO.txt      Contexto completo para continuar el trabajo
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

## 8. Despliegue: cómo acceder sin tener el PC encendido

### Recomendación

Para este proyecto lo más fiable es separar frontend y backend:

| Parte | Plataforma | Motivo |
|---|---|---|
| Frontend React/Vite | **Vercel** | Despliegue estático rápido y gratuito |
| Backend Express | **Render / Railway / Fly.io** | El backend necesita un proceso persistente |
| Base de datos | **Neon** | PostgreSQL gestionado y gratuito |

Vercel es serverless: no está pensado para un `app.listen()` con un pool de conexiones
persistente como el backend actual. Se puede adaptar, pero requiere refactorizar la API
a funciones serverless. Para ir rápido y sin dolores de cabeza, usa Vercel para el frontend
y Render/Railway para el backend.

### 8.1 Desplegar el frontend en Vercel

1. Sube el proyecto a GitHub.
2. Entra en https://vercel.com y elige **Add New Project**.
3. Importa el repositorio.
4. Configura:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. Añade la variable de entorno:
   - `VITE_API_URL` = URL pública del backend, por ejemplo `https://en-class-api.onrender.com`
6. Deploy.

Cada push a `main` volverá a desplegar automáticamente.

### 8.2 Desplegar el backend en Render

1. Crea un **Web Service** en https://render.com.
2. Conecta el mismo repositorio.
3. Configura:
   - Root Directory: la raíz del repo
   - Build Command: `npm install`
   - Start Command: `npx tsx server/index.ts`
   - Health Check Path: `/api/health`
4. Variables de entorno:
   - `DATABASE_URL`
   - `JWT_SECRET` (mínimo 24 caracteres)
   - `CORS_ORIGIN` = `https://tu-proyecto.vercel.app`
   - `PORT` (Render lo asigna automáticamente; no lo fuerces)
5. Copia la URL pública del servicio y pégala en `VITE_API_URL` en Vercel.

### 8.3 Desplegar el backend en Railway

1. Crea un proyecto en https://railway.app.
2. Añade el repositorio.
3. Añade un servicio PostgreSQL o usa Neon.
4. Configura las variables `DATABASE_URL`, `JWT_SECRET` (mínimo 24 caracteres),
   `CORS_ORIGIN` y `PORT`.
5. Start Command: `npx tsx server/index.ts`.

### 8.4 Alternativa: todo en Vercel

Solo si quieres un único despliegue:

1. Mueve la API a `api/` como funciones serverless.
2. Exporta la app Express como handler por defecto.
3. Usa el driver serverless de Neon o limita las conexiones del pool.
4. Añade un `vercel.json` con rewrites para la SPA y `/api`.
5. Configura `DATABASE_URL` y `JWT_SECRET` en Vercel.

Esta opción requiere cambiar el backend. Si no hay prisa, la separación frontend/backend
es más simple y estable.

### 8.5 CORS

En producción, el backend solo acepta los orígenes indicados en `CORS_ORIGIN`.
No dejes el CORS abierto. Ejemplo:

```env
CORS_ORIGIN=http://localhost:5173,https://tu-proyecto.vercel.app
```

El backend rechaza cualquier otro origen con un error 403. Si cambias el dominio de
Vercel, actualiza esta variable y reinicia el servicio.

El backend también aplica un límite de peticiones en memoria (30 intentos de
registro/login y 600 peticiones API cada 15 minutos por IP) y valida los datos de
entrada. Para varias instancias haría falta un limitador compartido (por ejemplo Redis).

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

### El frontend no conecta con el backend

- Comprueba que el backend esté corriendo en el puerto 3001.
- Revisa `VITE_API_URL`.
- Si estás en local y `VITE_API_URL` está vacío, Vite debe tener proxy para `/api`.

### Error de CORS

- Añade el dominio exacto del frontend a la allowlist del backend.
- Incluye `http://localhost:5173` para desarrollo.

### Error de conexión a Neon

- Verifica `DATABASE_URL`.
- Añade `?sslmode=require`.
- Comprueba que el proyecto de Neon no esté suspendido.

### El login no funciona

- Revisa que el backend esté desplegado y accesible.
- Comprueba `JWT_SECRET`.
- Revisa la consola del navegador y la del backend.

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
- [ ] `npm run validate:content` pasa.
- [ ] `npm run typecheck:server` pasa.
- [ ] `npm run build` funciona.
- [ ] Probado en móvil real.
- [ ] `VITE_API_URL` apunta al backend público.
- [ ] El backend responde desde el dominio de Vercel y `/api/health` devuelve `{ "ok": true }`.
