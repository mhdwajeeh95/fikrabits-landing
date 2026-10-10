# FikraBits — Landing Page

A responsive "under construction" landing page for **FikraBits**.

## Features

- **Light and dark themes** follow the device preference until the visitor chooses a mode; the choice is remembered. Soft violet logo in dark mode, Deep indigo in light mode.
- **Responsive** single-page layout (mobile → desktop)
- **Bilingual** English / العربية with a toggle button and full **RTL** support
- **Contact form** whose CTA opens the visitor's email client, pre-addressed to `info@fikrabits.net`
- Supplied FikraBits icon with a dark navy/violet background, soft violet accents, and off-white text
- Decorative animated rounded-octagon "bits" background (respects `prefers-reduced-motion`)
- No build step, no backend — pure static HTML/CSS/JS

## Files

| File | Purpose |
|------|---------|
| `index.html` | Markup |
| `assets/fikrabits-icon.png` | Original supplied logo |
| `assets/fikrabits-icon-soft-violet.svg` | Soft violet logo and favicon; preserves the original raster shape |
| `assets/rounded-octagon.svg` | Rounded octagon mask for animated particles |
| `styles.css` | Styling + responsive rules |
| `script.js` | i18n, language toggle, mailto contact form, background animation |

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

Drop the folder onto any static host (Netlify, Vercel, GitHub Pages, S3, etc.). No configuration required.

Typography uses Inter as a visual match for the supplied identity board, with Tajawal for Arabic. The exact brand font has not been identified from a source font file.

## Customize

- **Contact email** — change `CONTACT_EMAIL` in `script.js`.
- **Colors** — edit the CSS custom properties at the top of `styles.css`.
- **Copy / translations** — edit the `I18N` object in `script.js`.
