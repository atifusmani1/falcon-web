# Backend Integration

The frontend is built as a static site. A Python backend will be added
later to handle dynamic capabilities (contact form, future auth and
payments). This document describes the seam.

## How the seam works

All backend calls go through one client: `src/services/api.js`. It reads
`VITE_API_BASE_URL` at build time and:

- **If set** — sends real HTTP requests to that base URL.
- **If unset** — simulates a successful response after a short delay and
  logs the payload to the browser console. This keeps the UI demoable
  before the backend exists.

Pages never call `fetch` directly. They import named functions from
`src/services/<name>.js`, which wrap `api.get/post/put/del`. This means
the backend implementation can change (different framework, different
URLs, different auth) without touching any page or component.

## Environment configuration

Create a `.env.local` at the project root for development:

```
VITE_API_BASE_URL=http://localhost:8000
```

For production, set the same variable in the deployment environment.
Vite inlines it at build time.

## Endpoint contract — currently wired

### `POST /api/contact`

Submits the contact form. Called by `submitContactInquiry()` in
`src/services/contact.js`.

**Request body** (JSON):
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "projectType": "Grant Consulting | General PM | Tech Projects | Construction PM | Other / not sure",
  "message": "string"
}
```

**Success response:** any 2xx status. Body is ignored by the UI.

**Error response:** any non-2xx status. The UI shows a generic
"Submission failed" message.

## CORS

The Python backend must allow the frontend origin during development
(`http://localhost:5173`) and the production origin once deployed.

## Adding a new endpoint

1. Add a new wrapper function in an existing or new file under
   `src/services/`.
2. Document the endpoint contract here.
3. Call the wrapper from the page that needs it — never use `fetch`
   directly.

## Out of scope (for now)

Auth and payment flows are being designed separately and are
intentionally not scaffolded yet. When their endpoint contracts are
settled, add them as new modules under `src/services/` and document
them here.
