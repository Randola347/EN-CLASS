/**
 * URL base de la API.
 *
 * - En local puede quedar vacía: Vite hace proxy de /api a http://127.0.0.1:3001.
 * - En Vercel también queda vacía: el frontend y `/api/*` comparten dominio.
 * - Si algún día separas el backend, configura VITE_API_URL en el build.
 */
const rawBaseUrl = import.meta.env.VITE_API_URL ?? '';

export const API_URL = rawBaseUrl.replace(/\/+$/, '');

export function apiUrl(path: string): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${API_URL}${normalizedPath}`;
}

export function apiFetch(path: string, init?: RequestInit): Promise<Response> {
  return fetch(apiUrl(path), init);
}

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

/**
 * Lee el cuerpo como JSON sin romperse cuando el servidor devuelve texto plano.
 * Sin esto, un 404 de la plataforma ("The page could not be found") produce el
 * críptico `Unexpected token 'T', "The page c"... is not valid JSON` en la UI.
 */
async function parseBody(response: Response): Promise<any> {
  const text = await response.text();
  if (!text) return null;

  try {
    return JSON.parse(text);
  } catch {
    const isPlatformPage = /NOT_FOUND|DEPLOYMENT_NOT_FOUND|The page could not be found/i.test(text);
    if (isPlatformPage) {
      throw new ApiError(
        'La API no está disponible en este despliegue. Recarga la página; si el problema continúa, avisa al administrador.',
        response.status
      );
    }
    throw new ApiError(
      `El servidor respondió algo que no es JSON (HTTP ${response.status}). Inténtalo de nuevo.`,
      response.status
    );
  }
}

/** `fetch` + parseo seguro + error legible. Úsalo para todas las llamadas JSON. */
export async function apiJson<T = any>(path: string, init?: RequestInit): Promise<T> {
  const response = await apiFetch(path, init);
  const data = await parseBody(response);

  if (!response.ok) {
    const message =
      typeof data?.error === 'string' && data.error.trim()
        ? data.error
        : `Error HTTP ${response.status}`;
    throw new ApiError(message, response.status);
  }

  return data as T;
}
