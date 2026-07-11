# FikraBits — Landing Page

A responsive "under construction" landing page for **FikraBits**.

## Features

- **Responsive** single-page layout (mobile → desktop)
- **Bilingual** English / العربية with a toggle button and full **RTL** support
- **Contact form** whose CTA opens the visitor's email client, pre-addressed to `info@fikrabits.net`
- Brand palette extracted from the FikraBits mark (dark plum background, dusty-mauve accent, cream text)
- Decorative animated "bits" background (respects `prefers-reduced-motion`)
- No build step, no backend — pure static HTML/CSS/JS

## Files

| File | Purpose |
|------|---------|
| `index.html` | Markup |
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

## Customize

- **Contact email** — change `CONTACT_EMAIL` in `script.js`.
- **Colors** — edit the CSS custom properties at the top of `styles.css`.
- **Copy / translations** — edit the `I18N` object in `script.js`.
