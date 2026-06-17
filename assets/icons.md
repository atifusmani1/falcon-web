# Iconography — Falcon PM

## Family
**Phosphor Icons — Thin weight** (https://phosphoricons.com). Hairline outlined, sharp square line caps, geometric construction. Chosen for a more sophisticated, less rounded feel than the standard "friendly" outlined icon families. Phosphor offers six weights — we use **thin** (0.5px stroke at 1em) as the default; light (1.0) is permitted for very small uses where thin disappears.

> **Previously:** the system shipped with Lucide. Switched to Phosphor Thin at user direction for a sharper, more architectural look. Both are CDN-available so the swap is one line.

## Loading

Via webfont (recommended):
```html
<script src="https://unpkg.com/@phosphor-icons/web@2.1.1"></script>
<i class="ph-thin ph-file-text" style="font-size: 24px"></i>
```

Or via the React package if working in a build:
```jsx
import { FileText } from '@phosphor-icons/react';
<FileText weight="thin" size={24} />
```

## Rules

- **Default weight:** thin. Never use regular/bold/fill in body UI.
- **Color:** `currentColor`. Inherit from text. Never multi-color.
- **Sizes:** 16 (inline body), 20 (nav/buttons), 24–32 (service cards / hero affordances).
- **Sized via font-size**, not width/height attributes. Icons inherit the CSS color.
- **No emoji.** No unicode symbols as icons. The em dash `—` and the right arrow `→` are typographic characters that may appear in copy.
- **No icons in headlines.** Headlines stand on their own.

## Canonical mappings

These are the Phosphor names we use for common concepts. Stick to this set so the system reads as one voice.

| Concept | Phosphor name |
|---|---|
| Grant Consulting | `ph-file-text` |
| General PM | `ph-clipboard-text` |
| Tech Projects | `ph-cpu` |
| Construction PM | `ph-hard-hat` |
| Schedule | `ph-calendar` |
| Budget | `ph-bank` |
| Scope | `ph-target` |
| Compliance / certifications | `ph-shield-check` |
| Outcomes / wins | `ph-trophy` |
| Sectors served | `ph-buildings` |
| Email | `ph-envelope` |
| Phone | `ph-phone` |
| Outbound link / CTA | `ph-arrow-right` |
| Open menu | `ph-list` |
| Close | `ph-x` |

## The falcon sigil is not an icon
The heraldic falcon is the **mark**, not an icon. It only appears at hero scale (≥320px wide). Do not shrink it to use as a list bullet, a favicon glyph at large sizes, or a section divider. For favicons (16×16, 32×32) we use a simplified mono-silhouette version generated from the sigil.
