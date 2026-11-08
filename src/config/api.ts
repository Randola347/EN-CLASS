/**
 * URL base de la API.
 *
 * - En local puede quedar vacía: Vite hace proxy de /api a http://127.0.0.1:3001.
 * - En producción configura VITE_API_URL con la URL pública del backend,
 *   por ejemplo: https://en-class-api.onrender.com
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
