# `src/services/`

Each module in this directory is the **frontend seam** for one backend
capability. Pages call these modules — never `fetch` directly — so the
backend implementation can change without touching page code.

## Files

| File | Responsibility |
|---|---|
| `api.js` | Base HTTP client. Reads `VITE_API_BASE_URL`, handles JSON, raises `ApiError` on non-2xx. When the env var is unset it simulates success — keeps the UI demoable before the backend exists. |
| `contact.js` | `submitContactInquiry({...})` — posts the inquiry form payload to `POST /api/contact`. |

## Adding a new service

1. Create `src/services/<name>.js`.
2. Import `api` from `./api.js` and call `api.get / post / put / del`.
3. Export typed functions (`function submitX(...)`) — never raw URLs.
4. Document the endpoint contract in `docs/BACKEND_INTEGRATION.md`.

Future services (auth, payments) plug in here. Auth and payment work
is intentionally out of scope for the marketing site scaffold and will
be added once the backend team finalizes their endpoints.
