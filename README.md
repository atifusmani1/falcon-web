# Falcon Project Management — Website

The public marketing site for **Falcon Project Management**, a private
consulting firm specializing in project management and grant consulting
for nonprofits, public agencies, and mission-driven private clients.

## Mission

Communicate Falcon's dual-service value proposition — grant application
consulting and full lifecycle project management — and give prospective
clients a clear, professional path to start an engagement.

## Overview

The site is a single-page React application built with Vite. It is
deployed as a fully static bundle (HTML/CSS/JS) — no server-side
rendering required. A Python backend will be added later for dynamic
capabilities; see `docs/BACKEND_INTEGRATION.md` for the integration
seam.

## Pages

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | Hero, credibility stats, four service tiles, testimonials, CTA. |
| `/services` | Services | Overview of the four disciplines + ideal-client profile. |
| `/services/grant-consulting` | Grant Consulting | Deep page: scope, grant types, process, stats. |
| `/services/general-pm` | General PM | (Currently routes to Services overview.) |
| `/services/tech-projects` | Tech Projects | (Currently routes to Services overview.) |
| `/services/construction-pm` | Construction PM | (Currently routes to Services overview.) |
| `/about` | About | Firm story, credentials, sectors served, testimonials. |
| `/resources` | Client Resources | Stats, testimonials, FAQ. |
| `/contact` | Contact | Inquiry form + direct contact details. |
| `/privacy` | Privacy Policy | Plain-language data policy. |

## Tech stack

- **React 18** — UI framework.
- **Vite 5** — build tool and dev server.
- **React Router v6** — client-side routing.
- **Phosphor Icons (web font)** — iconography, loaded via CDN.
- **Vanilla CSS + design tokens** — no CSS framework. All visual
  primitives live in `colors_and_type.css` (8px grid, type scale,
  metallic gradients, easings).
- **Google Fonts** — Aoboshi One (display) + DM Sans (body), loaded
  via `fonts/fonts.css`.

## Requirements

- **Node.js** ≥ 18
- **npm** ≥ 9 (or pnpm / yarn)
- A modern browser for previewing

## Run locally

From the project root:

```bash
npm install
npm run dev
```

The dev server starts at <http://localhost:5173> and opens
automatically. Hot reload is enabled.

## Build for production

```bash
npm run build
```

Output lands in `dist/`. To preview the production build locally:

```bash
npm run preview
```

## Environment variables

Copy `.env.example` to `.env.local` and set values as needed:

| Variable | Purpose |
|---|---|
| `VITE_API_BASE_URL` | Base URL for the Python backend. Leave blank during dev — the frontend will simulate successful submissions and log payloads to the console. |

## Project layout

```
falcon-web/
├── public/              Static assets served at /
├── src/
│   ├── components/      Reusable UI primitives (Nav, Footer, Stat, …)
│   ├── pages/           One module per route
│   ├── services/        Backend integration seam (HTTP wrappers)
│   ├── data/            Static content arrays shared across pages
│   ├── lib/             Small framework-agnostic helpers
│   ├── styles/          Site-specific stylesheet
│   ├── App.jsx          Router + nav shell
│   └── main.jsx         React entry
├── docs/                Implementation-level documentation
├── colors_and_type.css  Design tokens (source of truth)
├── fonts/, assets/      Design system assets
├── preview/, ui_kits/   Design system reference artifacts
├── index.html           Vite entry
├── vite.config.js
└── package.json
```

## Documentation

| Doc | Contents |
|---|---|
| `docs/DESIGN_SYSTEM.md` | Brand bible — voice, colors, type, components, hard rules. |
| `docs/BACKEND_INTEGRATION.md` | How the frontend talks to the future Python backend. |
| `docs/CONTENT.md` | Placeholder copy that must be replaced before launch. |
| `src/services/README.md` | How the services module is organized. |

## Status

The marketing site scaffold is complete. Auth and payment screens are
intentionally out of scope for this milestone and will be added once
the backend team's contracts are finalized.
