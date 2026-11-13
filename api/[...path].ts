/**
 * Función serverless de Vercel. El catch-all `[...path].ts` recibe todas las
 * rutas /api/* y las entrega a Express.
 *
 * El import es dinámico para poder devolver un JSON con el motivo real si el
 * arranque falla (por ejemplo, una variable de entorno ausente). Así los logs
 * de Vercel y la respuesta HTTP son útiles en lugar de un 500 opaco.
 */
export default async function handler(req: any, res: any) {
  try {
    const { default: app } = await import('../server/app.js');

    const rawPath = req.query?.path;
    const path = Array.isArray(rawPath) ? rawPath.join('/') : rawPath;
    const currentUrl = String(req.url ?? '');

    // Normalmente Vercel entrega `/api/auth/login`. Si recorta el prefijo,
    // reconstruimos la ruta con el parámetro `path`.
    if (path && !currentUrl.startsWith('/api/')) {
      const queryIndex = currentUrl.indexOf('?');
      const search = queryIndex >= 0 ? currentUrl.slice(queryIndex) : '';
      req.url = `/api/${path}${search}`;
    }

    return app(req, res);
  } catch (err: any) {
    console.error('API bootstrap failed:', err);

    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader('content-type', 'application/json; charset=utf-8');
    }

    const detail = String(err?.stack ?? err?.message ?? err).slice(0, 1200);
    return res.end(
      JSON.stringify({
        error: 'No se pudo iniciar la API.',
        detail,
        hint: 'Revisa los logs de Vercel y las variables DATABASE_URL y JWT_SECRET.',
      })
    );
  }
}
