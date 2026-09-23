# Art By Maryam

Portfolio website for **Art By Maryam** — contemporary mixed-media paintings that weave
Persian calligraphy, gold leaf and the human figure. Based in San Jose, California.

## Features

- **Home** — hero with featured work, the full collection, and a commission call to action
- **Gallery lightbox** — full-size viewing with keyboard navigation (← → Esc) and focus management
- **About** — artist biography and practice overview
- Responsive layout, accessible markup (skip link, labelled regions, descriptive alt text),
  reduced-motion support, and SEO / social-share meta tags

## Tech stack

React 19 · React Router 6 · Vite · Tailwind CSS (base layer) · plain CSS with design tokens

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build to dist/
npm run preview   # serve the production build locally
npm run lint      # ESLint
```

## Editing content

| What | Where |
| --- | --- |
| Artwork titles, media, alt text, images | `src/data/artworks.js` (images live in `public/`) |
| Email, location, social links | `src/data/site.js` (a social link appears once its `href` is set) |
| Colours, fonts, spacing | CSS variables at the top of `src/index.css` |
| Page copy | `src/Pages/Home/Home.jsx`, `src/Pages/AboutMe/AboutMe.jsx` |

## Deployment

The site is a single-page app. When hosting on Netlify, Vercel or similar, add a rewrite so
all routes serve `index.html` (for example, `/about` must not return a 404).

## License

Code is released under the terms in [LICENSE](LICENSE). All artwork and images are the
property of the artist and may not be reproduced without permission.
