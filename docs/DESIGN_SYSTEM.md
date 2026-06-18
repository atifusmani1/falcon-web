# Falcon Project Management — Design System

> *"They forged the project; we kept the watch."*

A design system for **Falcon Project Management**, a professional services firm that delivers project management, grant consulting, and technical/construction PM for clients in nonprofit, government, and private sectors.

The brand draws inspiration from **House sigils and heraldic banners** — specifically the visual world of *Game of Thrones* — translated into a contemporary, accessible, professional aesthetic. The result is **silver, black, and a single forged-iron red** as the only accent color, set in **Aoboshi One** display + **DM Sans** body. The falcon sigil is the keystone visual.

## Brand essence

- **Professional, solid, tough.** Falcon is not playful. Copy reads with the calm authority of a senior PM who has run the project before and will run yours next.
- **Welcoming clarity.** Heraldic ≠ cold. The system uses generous whitespace, accessible type, and warm metallic neutrals so the GoT motif never overwhelms readability.
- **The sigil is the hero.** The metallic falcon mark animates with subtle parallax / shine on scroll. Used sparingly and large — never decoratively repeated.

## Sources & inputs

This system was built from the following inputs the user provided directly to the project:

- `uploads/Falcon PM - Sitemap.png` — site map covering Home, Services (Grant Consulting, General PM, Tech Projects, Construction PM), About Us, Client Resources, Contact, Privacy Policy. Also notes: "Logo comes out at first → dissipates into homepage", "Professional, solid, tough", "Metallic logo, iron splits", "MTC notice (eg developed by Ignite Consulting)".
- `uploads/falcon-logo-source.png` — black falcon mark with FALCON / PROJECT MANAGEMENT wordmark on near-white background. Background was removed and a metallic silver version composited; see `assets/`.
- No codebase, Figma, or existing site was provided — this is a greenfield system.

## Index

Files in this design system:

| File | What it is |
|---|---|
| `README.md` | This file. Brand context, content + visual foundations, iconography. |
| `SKILL.md` | Agent skill manifest. Tells future runs how to use this system. |
| `colors_and_type.css` | Tokens: color, spacing, radii, shadow, type. Both raw + semantic. |
| `assets/` | Logos (full + sigil), outline + metallic variants, background textures, photo placeholders. |
| `assets/icons.md` | Iconography spec — Phosphor Thin, canonical mappings, usage rules. |
| `fonts/fonts.css` | Webfont imports (Aoboshi One + DM Sans from Google Fonts). |
| `preview/` | Cards rendered into the Design System tab — type, color, spacing, components, brand. |
| `ui_kits/website/` | Falcon PM marketing site UI kit: Home, Services, Grant Consulting, About, Client Resources, Contact, Privacy. JSX components + `index.html` click-thru. |

## Content fundamentals

Voice is **deliberate, clean, slightly heraldic** — without slipping into cosplay. The cadence borrows from a senior consultant; the imagery (occasionally) borrows from a maester. Use this register, never more, never less.

### Voice & tone

- **Tone: confident, grounded, plainspoken.** Falcon has done the work. Sentences are short. Verbs do the lifting. Marketing language is replaced with specifics ("a $4.2M federal grant" not "industry-leading outcomes").
- **Person: "we" for the firm, "you" for the client.** No first-person singular. No "us at Falcon" or "our team here at Falcon" — just "we".
- **Casing: Title Case for nav/buttons/H1s. Sentence case for body and H3+.** Buttons read like commands: "Start the engagement", "Read the brief", "Send the signal".
- **Numbers as numerals from 2 up.** "47 funded grants", "12 active engagements". Spell out one.
- **Heraldic touches, sparingly.** A single line at the top of a page can read "Watchers of the schedule. Keepers of the budget." Body copy that follows must immediately deliver substance. Never two heraldic flourishes in a row.

### Specific examples

✅ Use:
- *"We manage the projects others cannot afford to lose."*
- *"A $4.2M federal infrastructure grant — drafted, won, delivered on schedule."*
- *"Schedule, budget, scope. Three things. We hold all three."*
- *"Start the engagement →"* (CTA)
- *"The watch is yours. The project is ours."* (CTA banner)

❌ Avoid:
- *"Our innovative project management solutions empower clients to unlock value..."* — marketing slop.
- *"Hey there! 👋 Let's chat about your project!"* — wrong register, wrong emoji policy.
- *"M'lord, the project doth approach completion..."* — over-cosplay.

### Emoji & punctuation

- **No emoji. Ever.** The brand uses iconography (Lucide, stroke 1.5) where a glyph is needed.
- Em dashes — used liberally — for parenthetical asides. No spaced en dashes.
- Single sentences can be a fragment if it lands. Two fragments in a row, never.
- Oxford comma: yes.

### Page-level patterns

- **Headlines (H1):** One line, ≤8 words. Aoboshi One. The headline is a statement of capability, not a question.
- **Subheads:** One sentence. Atkinson Hyperlegible. Names the audience or the outcome.
- **Service cards:** Service name (Title Case) + one-line description + 3 bullets (what's included) + outbound link.
- **Testimonials:** Quote first, attribution second (name, role, organization). No headshots required.
- **Stats:** Number is huge (Aoboshi One, 96-128px). Label is small caps Atkinson 12-14px. Numerals are **solid ink** by default; one stat per row may be set in **blood red** for emphasis. **Never apply the metallic gradient to text** — it kills legibility. Reserve the metallic gradient for shape surfaces, dividers, and the sigil only.

## Visual foundations

The system is built around four motifs:

1. **Metallic silver gradients** — primary expressive surface (logo, large CTAs, dividers).
2. **Forged black** — primary text + dark hero surfaces. Not pure `#000`; warm-tinted near-black (`#0E0F12`).
3. **Iron-split red** — the single accent. Reserved for primary CTAs and key emphasis spans. Never for decorative use.
4. **Negative space + heraldic centering** — the falcon sigil sits dead-centered in hero blocks. Service icons + numerals are large and few. Layouts are calmer than typical SaaS sites.

### Color

| Token | Hex | Use |
|---|---|---|
| `--ink` | `#0E0F12` | Forged near-black. Body text on light, bg for dark sections. |
| `--ink-2` | `#1A1C20` | Secondary surface on dark mode. |
| `--bone` | `#F4F2EE` | Page background warm-light. Like parchment, but cooled. |
| `--bone-2` | `#E9E6E0` | Card bg / dividers on light. |
| `--silver-100` | `#FAFAFA` | Brightest metallic highlight. |
| `--silver-300` | `#D9D9D9` | Mid-light silver. |
| `--silver-500` | `#9C9C9C` | True silver — main metallic mid. |
| `--silver-700` | `#5E5E5E` | Deep silver / steel shadow. |
| `--silver-900` | `#2C2D31` | Iron — almost black. |
| `--blood` | `#691624` | Iron-split red. Primary CTAs only. |
| `--blood-dark` | `#4A0F19` | Hover/pressed state. |
| `--blood-tint` | `#ECD4D6` | Bg tint for blood-accent callouts. |
| Semantic | | |
| `--bg` / `--fg` / `--fg-muted` | maps to bone/ink | |
| `--border` | `#D9D6CF` | Hairline on light surfaces. |
| `--border-dark` | `#2F3137` | Hairline on dark surfaces. |
| `--focus` | `#691624` | Focus ring = blood. |

**Metallic gradients** are constructed as multi-stop vertical gradients on silver: 4-stop minimum, alternating highlight → mid → shadow → highlight, mimicking polished steel. The exact recipe lives in `colors_and_type.css` under `--gradient-metal-*`.

### Type

- **Display:** [Aoboshi One](https://fonts.google.com/specimen/Aoboshi+One) — a single-weight, brush-flavored Japanese-Latin serif. Used for H1, H2, large numerals, and the wordmark. Letterspacing tightened slightly (`-0.01em`). All-caps for hero headlines feels right; sentence-case for section heads.
- **Body:** [DM Sans](https://fonts.google.com/specimen/DM+Sans) — a low-contrast geometric sans with high x-height. Used for everything that isn't a display headline. Weights in use: 400 (body), 500 (nav, secondary), 700 (emphasis, buttons, labels).
- **Scale (1.25 ratio):** 13 / 14 / 16 / 18 / 22 / 28 / 36 / 48 / 64 / 84 / 112 px. The `--text-*` tokens map this onto h1–h6 and body sizes.
- **Line-height:** 1.5 for body, 1.1 for display. Body uses `text-wrap: pretty` everywhere.

> Both fonts ship via Google Fonts. We don't bundle TTFs — see `fonts/fonts.css` for the import. If the user later wants offline-served fonts, replace this file with self-hosted woff2.

### Spacing & layout

- **8-px base grid.** Tokens: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192.
- **Page max-width:** 1200px. Heroes can go to 1440px when the falcon sigil is full-bleed.
- **Section padding:** 96/128px vertical on desktop, 64px on mobile.
- **Hero is calm.** Single headline, single subhead, single CTA, large sigil. No service tiles in the hero.

### Backgrounds, textures, imagery

- **Default page bg:** `--bone` (warm parchment). Not white.
- **Hero / banner sections:** `--ink` (dark) with a faint metallic noise overlay (5% opacity, tileable, in `assets/textures/`).
- **Imagery vibe:** monochrome or near-monochrome. If color photography is used, desaturate to ~25% and warm-tint slightly (toward steel). No vibrant stock photos. Subject matter: cranes, scaffolding, contracts, hands at work, blueprints — never people smiling at laptops.
- **No gradients in body content** beyond the metallic logo/divider. No purple/blue UI gradients.

### Animation

- **Easing:** `cubic-bezier(0.2, 0.7, 0.2, 1)` — confident, slightly deliberate. Tokens: `--ease-standard`, `--ease-in`, `--ease-out`.
- **Durations:** 180ms (micro), 320ms (standard), 600ms (hero reveals).
- **Hero animation:** the falcon sigil enters at full scale + low opacity, settles into place at lower opacity (~25%), then becomes a parallax shine layer that responds to scroll.
- **Shine effect on scroll:** a moving linear gradient mask runs across the silver sigil as the user scrolls. Implemented with `background-position` driven by `--scroll` CSS variable.
- **No bouncy / springy easing.** No fades in from below by 200px. Subtle is the rule.

### Hover / press states

- **Buttons (primary, red):** hover → `--blood-dark`. Press → scale(0.98), no color change.
- **Buttons (secondary, ink outline):** hover → ink fill, bone text. Press → no scale.
- **Links:** hover → underline thickens from 1px to 2px, color stays the same.
- **Cards:** hover → border darkens one step, very faint inner shadow gain. No scale, no lift.

### Borders, radii, shadows

- **Radii:** `4 / 8 / 12 / 999`. The system is mostly **8px**. Cards are 8, buttons are 8, pills are 999. No 24px super-rounded shapes — too friendly for this brand.
- **Borders:** 1px hairline in `--border`. Decorative dividers are 1px metallic gradients.
- **Shadows:** restrained. `--shadow-sm` is a single 1px hairline + 2px blur. `--shadow-md` adds 6px blur. There is no `--shadow-lg`; we use bg color contrast instead of elevation for hierarchy.
- **No glass / blur surfaces.** No transparency-stacked UI.

### Cards

- 1px `--border`, 8px radius, `--bg` (bone), 24-32px internal padding.
- Optional metallic top-edge accent (1px gradient line) for elevated cards.
- Hover: border shifts to `--silver-700`. No transform.

### Layout rules

- Nav: fixed top, 72px tall, `--bone` w/ 1px bottom hairline; turns ink-on-light → bone-on-ink only when scrolled over a dark hero.
- Footer: ink bg, bone text, 1 metallic divider line above.
- The falcon sigil never repeats. There is one per page (hero) — that is it.

## Iconography

See `assets/icons.md` for the icon usage spec.

- **Icon family:** [Lucide](https://lucide.dev) — outlined, stroke 1.5, currentColor.
- **Why Lucide:** open-source, comprehensive, neutral stroke style that doesn't compete with the heraldic logo.
- **Loaded via CDN** (`https://unpkg.com/lucide@latest`) — no local copy is needed in the system.
- **Sizes:** 16, 20, 24. 16 in body inline contexts, 20 in nav/buttons, 24 in service cards.
- **Color:** always `currentColor`. Never multi-color, never filled.
- **No emoji. No unicode glyphs as icons.** The em dash and arrow `→` are allowed in copy as typographic characters.
- **Numbered service callouts** ("01 Grant Consulting") use Aoboshi One numerals rather than icons — the numerals are the visual signal.

The **falcon sigil** is not an icon. It is the heraldic mark and only appears at hero scale (≥320px). For favicons and small uses, a simplified mono-silhouette version lives at `assets/falcon-sigil-mono.png`.
