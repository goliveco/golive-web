# golive-web

Next.js (App Router, TypeScript) rebuild of the Golive marketing site, with Sanity as the CMS. Tracks `STEP-BY-STEP.md`.

## Status: Phase 1 (project skeleton)

What's in place:

- Next.js App Router + TypeScript, deployable as-is.
- Fonts via `next/font`: Inter, Instrument Serif, JetBrains Mono (`src/app/fonts.ts`). General Sans (Fontshare) isn't wired up yet — see below.
- Brand color tokens in `src/app/globals.css` (ink, indigo, violet, bright, lilac, page).
- Sanity client/schema scaffolding (`sanity.config.ts`, `src/sanity/`) — not yet embedded as a `/studio` route; see note below.

What's still missing, carried over from the plan (not available in this environment):

- The actual `design/` folder (prototype HTML, `content.js`, `articles.js`, `casestudies.js`, `availability.js`, `leads.js`, `tracking.js`, `motion.js`), and the project's own `SETUP.md`. Phases 2 onward need these for real content, layout and copy.
- **General Sans** font files: download the woff2s from fontshare.com (license acceptance required) into `src/app/fonts/general-sans/`, then uncomment the `localFont` block in `src/app/fonts.ts`. Until then, body text falls back to Inter.
- A Sanity project: create one at sanity.io (project `golive`, dataset `production`), then set `NEXT_PUBLIC_SANITY_PROJECT_ID` in `.env.local` (copy `.env.example`).

### Known issue: Sanity Studio embed vs. Next.js 16

Embedding the Studio UI directly in this app (`next-sanity/studio`'s `NextStudio` under `/studio`) currently fails to build on Next.js 16.3.8: Sanity's bundled chunks pull in `swr` under the React Server Components `react-server` export condition, which doesn't expose the `useSWR` default export, breaking both Turbopack and webpack builds. The client/query code (`src/sanity/`) is unaffected — only the embedded Studio route hits this. Revisit when doing Phase 5 (embed Studio), either with a newer `sanity`/`next-sanity` release or by running Studio as a separate deployment instead of embedding it.

## Development

```bash
npm install
cp .env.example .env.local   # fill in your Sanity project ID
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
