---
name: falcon-pm-design
description: Use this skill to generate well-branded interfaces and assets for Falcon Project Management, either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, the heraldic falcon sigil + variants, and a full website UI kit. The brand is silver/black/blood-red with a Game of Thrones heraldic feel, professional and welcoming, set in Aoboshi One + DM Sans.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

Key things to know up front:
- The brand is **silver, black, and a single forged-iron red** (`#691624`). Red is for CTAs only — never decorative.
- Display type is **Aoboshi One**; body is **DM Sans**. Both Google Fonts — see `fonts/fonts.css`.
- Tokens live in `colors_and_type.css`. Import this file in any new HTML artifact; it provides every semantic variable + base type rules.
- The heraldic falcon mark is the **keystone visual**. Four variants exist in `assets/`:
  - `falcon-logo-full.png` — full lockup (sigil + wordmark, black on transparent)
  - `falcon-sigil.png` — sigil only, filled black silhouette
  - `falcon-sigil-white.png` — sigil only, filled white silhouette (for dark surfaces)
  - `falcon-sigil-silver.png` — sigil with metallic silver gradient (for hero use)
  - `falcon-sigil-outline.png` — thick-stroke outline only (the preferred treatment — engraved feel)
- Icons are **Phosphor Thin** via CDN. See `assets/icons.md` for canonical mappings.
- Tone is **professional, plainspoken, slightly heraldic**. Never markety, never cosplay. No emoji.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out of this folder and create static HTML files. The `ui_kits/website/` folder has a full marketing-site recreation you can lift components from.

If working on production code, copy assets, read `README.md` and `assets/icons.md`, and use the tokens in `colors_and_type.css` directly.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions about audience/page/screen, and act as an expert designer who outputs HTML artifacts or production code.

Hard rules — do not break:
- **Never apply the metallic gradient to text.** It is unreadable. Use solid ink, or blood for the single emphasized item.
- **The sigil is not an icon.** It only appears at hero scale (≥320px wide), once per page.
- **No emoji. No unicode glyphs as icons.** Use Phosphor Thin.
- **Red is for CTAs only.** Not borders, not accents, not decorative dividers.
