/**
 * Base HTTP client for the Falcon backend API.
 *
 * Reads VITE_API_BASE_URL from the environment. When the base URL is not
 * configured (typical for local dev before the Python backend exists), every
 * call short-circuits to a simulated success and logs the payload, so the
 * UI flow remains demoable end-to-end.
 *
 * See docs/BACKEND_INTEGRATION.md for the contract this client expects.
 */

const API_BASE = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');

export class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

async function request(method, endpoint, body) {
  if (!API_BASE) {
    console.warn(`[api] No VITE_API_BASE_URL configured — simulating ${method} ${endpoint}`, body);
    await new Promise(r => setTimeout(r, 600));
    return { ok: true, simulated: true };
  }

  const res = await fetch(`${API_BASE}${endpoint}`, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    throw new ApiError(`${method} ${endpoint} failed (${res.status})`, res.status);
  }

  return res.status === 204 ? null : res.json();
}

export const api = {
  get: (endpoint) => request('GET', endpoint),
  post: (endpoint, body) => request('POST', endpoint, body),
  put: (endpoint, body) => request('PUT', endpoint, body),
  del: (endpoint) => request('DELETE', endpoint),
};
