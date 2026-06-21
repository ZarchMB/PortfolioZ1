# Adriane Lorenz Racaza — Portfolio

A personal portfolio site built with Next.js (App Router) and Tailwind CSS.

## Stack

- **Next.js 16** (App Router, static generation)
- **Tailwind CSS v4**
- **Self-hosted fonts** via `@fontsource` (Fraunces, Inter, IBM Plex Mono) —
  no runtime dependency on Google Fonts, so the build doesn't require
  network access to `fonts.googleapis.com`.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

This is a fully static site (`next build` produces static pages — see the
`Route (app)` output marked `○ (Static)`), so it deploys cleanly to Vercel,
Netlify, or any static host.

## Deploying to Vercel

1. Push this folder to a GitHub/GitLab/Bitbucket repo.
2. Go to vercel.com/new and import the repo.
3. Framework preset: Vercel auto-detects **Next.js** — no config needed.
4. Click **Deploy**.

Or via the CLI:

```bash
npm install -g vercel
vercel
```

## Updating content

All page content lives in `app/components/`:

- `Hero.tsx` — name, tagline, stat strip
- `Work.tsx` — project case studies
- `Experience.tsx` — work/training experience
- `Capabilities.tsx` — skills, grouped
- `Credentials.tsx` — education and certifications
- `Contact.tsx` — contact details and footer

Design tokens (colors, fonts) are defined in `app/globals.css`.

To swap the downloadable résumé, replace `public/Racaza_Resume.pdf` with an
updated file of the same name.
