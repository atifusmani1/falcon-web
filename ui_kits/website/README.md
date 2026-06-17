# Falcon PM — Website UI Kit

A high-fidelity, interactive recreation of the Falcon Project Management marketing site.

This kit follows the sitemap provided in `uploads/Falcon PM - Sitemap.png` and demonstrates the brand at full scale:

- **Home** — sigil intro animation, hero, credibility metrics, 4 service cards, testimonials, CTA banner, footer.
- **Services** — section intro + 4 service cards. Each service has a deep page (Grant Consulting demonstrated; pattern repeats for General PM / Tech / Construction).
- **About Us** — personal intro, background story, credentials, experience metrics, sectors, testimonials, CTA.
- **Client Resources** — testimonials, results, FAQ, CTA.
- **Contact** — inquiry form, direct contact, response time note.

## Files

| File | What it is |
|---|---|
| `index.html` | Entry point. Click‑thru navigation between all screens. |
| `app.css` | Page‑specific layout/styles on top of `colors_and_type.css`. |
| `components.jsx` | Shared primitives: `Nav`, `Footer`, `Hero`, `Sigil`, `Section`, `ServiceCard`, `Stat`, `Testimonial`, `MetalDivider`, `CtaBanner`. |
| `pages.jsx` | One page component each: `HomePage`, `ServicesPage`, `GrantConsultingPage`, `AboutPage`, `ClientResourcesPage`, `ContactPage`, `PrivacyPage`. |
| `app.jsx` | Router state, mount, page transitions. |

## Component coverage

- Sticky nav (transitions ink↔bone over hero)
- Hero with full-scale falcon sigil + shine on scroll
- Numbered service cards
- Metric stat blocks (Aoboshi numerals)
- Blood-accent testimonial blocks
- CTA banner (full-bleed dark, metal divider)
- Footer (sitemap, contact, MTC notice)
- Form inputs with focus state
- Button variants
- Page transitions (180ms fade)

The kit prioritizes visual fidelity to the brand over engineering — clicks navigate, but submission is mocked, etc.
