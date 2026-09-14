# Peek Website

Marketing homepage for [Peek](https://github.com/Peek-Access/Peek), built with Next.js
(static export) and deployed to Cloudflare Workers.

## Develop

```bash
npm install
npm run dev
```

## Build & preview locally on Workers runtime

```bash
npm run preview
```

## Deploy to Cloudflare Workers

Requires a Cloudflare account logged in via `npx wrangler login` (one-time).

```bash
npm run deploy
```

This runs `next build` (static export to `out/`) then `wrangler deploy`, which
publishes `out/` as static assets on Workers — no server-side Worker code needed.

Update the site name / routes in `wrangler.toml`.
