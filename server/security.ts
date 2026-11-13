import type { Request, Response, NextFunction } from 'express';

/**
 * Valida el secreto JWT antes de arrancar la app. Un secreto débil permitiría
 * falsificar tokens y entrar como cualquier usuario, incluido un admin.
 */
export function assertJwtSecret(secret: string | undefined): string {
  if (!secret || secret === 'secret123' || secret.length < 24) {
    throw new Error(
      'JWT_SECRET no es seguro. Define una cadena aleatoria de al menos 24 caracteres en .env (local) o en las variables de entorno de Vercel.'
    );
  }
  return secret;
}

/**
 * Allowlist de CORS. Además de los orígenes configurados, acepta localhost y
 * despliegues de Vercel (incluidas preview URLs), que es donde vive el frontend.
 */
export function isAllowedOrigin(origin: string | undefined, allowlist: string[]): boolean {
  if (!origin) return true;
  if (allowlist.includes(origin)) return true;

  try {
    const url = new URL(origin);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return false;

    const host = url.hostname.toLowerCase();
    if (host === 'localhost' || host === '127.0.0.1' || host === '[::1]') return true;
    if (url.protocol === 'https:' && (host === 'vercel.app' || host.endsWith('.vercel.app'))) {
      return true;
    }
  } catch {
    return false;
  }

  return false;
}

export function cleanString(value: unknown, maxLength: number): string | null {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > maxLength) return null;
  return trimmed;
}

export function isEmail(value: unknown): value is string {
  return (
    typeof value === 'string' &&
    value.length <= 255 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
  );
}

export function stringArray(value: unknown, maxItems = 200, maxLength = 300): string[] | null {
  if (!Array.isArray(value)) return null;
  if (value.length > maxItems) return null;

  const items = value.map((entry) =>
    typeof entry === 'string' ? entry.trim().slice(0, maxLength) : null
  );

  if (items.some((entry) => entry === null)) return null;
  return items as string[];
}

/**
 * Limitador en memoria suficiente para una única instancia local o una función
 * serverless con pocas instancias. En Vercel es best-effort: cada instancia
 * tiene su propio contador.
 */
export function createRateLimit(windowMs: number, max: number) {
  const buckets = new Map<string, { count: number; resetAt: number }>();

  return (req: Request, res: Response, next: NextFunction) => {
    const key = req.ip || req.socket.remoteAddress || 'unknown';
    const now = Date.now();

    if (buckets.size > 5000) {
      for (const [bucketKey, bucketValue] of buckets) {
        if (bucketValue.resetAt <= now) buckets.delete(bucketKey);
      }
    }

    const bucket = buckets.get(key);

    if (!bucket || bucket.resetAt <= now) {
      buckets.set(key, { count: 1, resetAt: now + windowMs });
      return next();
    }

    bucket.count += 1;
    if (bucket.count > max) {
      return res
        .status(429)
        .json({ error: 'Demasiadas solicitudes. Inténtalo de nuevo más tarde.' });
    }

    return next();
  };
}
