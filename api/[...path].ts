import app from '../server/app';

/**
 * Función serverless de Vercel. El catch-all `[...path].ts` recibe todas las
 * rutas /api/* y las entrega a Express.
 *
 * Normalmente `req.url` ya llega como `/api/auth/login`. Si Vercel la recorta,
 * reconstruimos la ruta con el parámetro `path` para que Express encuentre el
 * endpoint correcto.
 */
export default function handler(req: any, res: any) {
  const rawPath = req.query?.path;
  const path = Array.isArray(rawPath) ? rawPath.join('/') : rawPath;
  const currentUrl = String(req.url ?? '');

  if (path && !currentUrl.startsWith('/api/')) {
    const queryIndex = currentUrl.indexOf('?');
    const search = queryIndex >= 0 ? currentUrl.slice(queryIndex) : '';
    req.url = `/api/${path}${search}`;
  }

  return app(req, res);
}
