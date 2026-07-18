# Portfolio — Sakinah Farah Agnia

Responsive portfolio with a terminal/HUD-inspired dark theme and neon-green accent.
No build step, no dependencies — just open `index.html` in a browser.

## Structure

```
index.html           — home: hero, ticker, interests, skills, projects, experience, contact
project.html         — project detail template (renders from ?id=<slug>)
css/style.css        — theme, layout, responsive breakpoints (980px / 600px / 420px)
js/projects-data.js  — ALL project content lives here (single source of truth)
js/script.js         — renders project grid + detail page, typing effect, scroll reveal
assets/              — put your files here (see below)
```

## Editing projects

Everything about a project (title, dates, story, highlights, tech stack, artwork)
is one object in `js/projects-data.js`. Edit it there and both the home-page card
and the detail page update automatically. Add a new object to add a new project.

## Personalize

1. **Photo** — save your photo as `assets/profile.jpg` (portrait, ±4:5 ratio).
   Until then, an "SFA" placeholder is shown automatically.
2. **CV** — save your CV as `assets/CV_Sakinah_Farah_Agnia.pdf` so the
   "Download CV" link in the footer works.
3. **Contact form** — submits via `mailto:` to `sakinah.frha@gmail.com`
   (change it in `js/script.js`). To collect messages without a mail client,
   swap in a service like Formspree.

## Deploy

Any static host works: GitHub Pages, Netlify, Vercel — just upload the folder.
