# CLAUDE.md

Guidance for Claude Code (and humans) working in this repository.

## Project

The marketing website for **Deep AI Tech LLC** — a Dubai/UAE-based AI and
software consultancy. It is a full-stack Next.js application with a
"Quantum Black" visual identity (pure-black canvas, high-contrast white type,
restrained cyan→violet accents, refined motion).

This is **content-driven**: almost all copy lives in `lib/`, not in components.
When asked to change wording, services, case studies, stats, or contact info,
edit `lib/content.ts` / `lib/site.ts` first — don't hard-code copy into JSX.

## Tech stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript** (strict)
- **Tailwind CSS** — design system lives in `tailwind.config.ts` + `app/globals.css`
- **Framer Motion** — scroll reveals & micro-interactions
- **lucide-react** — icons
- Fonts via `next/font/google`: Space Grotesk (display), Inter (body),
  JetBrains Mono (mono accents)

## Commands

```bash
npm install        # install dependencies
npm run dev        # dev server → http://localhost:3000
npm run build      # production build (also type-checks — run before pushing)
npm run start      # serve the production build
npm run lint       # eslint (next/core-web-vitals)
```

Always run `npm run build` before committing — it is the source of truth for
type errors and will catch most regressions.

## Architecture & conventions

```
app/                 # App Router: each folder is a route
  layout.tsx         # root: fonts, metadata, <Navbar/> + <Footer/>
  globals.css        # design tokens & component utility classes
  page.tsx           # home (composes section components)
  <route>/page.tsx   # static pages: services, solutions, work, about, insights, contact
  work/[slug]/       # dynamic case studies (generateStaticParams from lib/content)
  insights/[slug]/   # dynamic articles (generateStaticParams from lib/content)
  api/contact/route.ts  # backend: POST handler (validation, rate-limit, honeypot)
  sitemap.ts, robots.ts, not-found.tsx
components/           # reusable UI (cards, sections, navbar, footer, effects, form)
  sections/          # large composed sections (e.g. hero)
lib/
  site.ts            # company facts + top-level nav
  content.ts         # services, solutions, industries, process, stats, case studies, insights, values
  utils.ts           # cn() classnames helper, formatDate()
```

### Conventions to follow

- **Server Components by default.** Only add `"use client"` when a file needs
  hooks, browser APIs, or Framer Motion (`navbar`, `hero`, `reveal`,
  `contact-form` are the client components). Keep pages as Server Components.
- **Styling** is Tailwind utility classes. Reusable patterns are defined as
  component classes in `app/globals.css` under `@layer components`
  (`.glass`, `.btn-primary`, `.btn-ghost`, `.form-input`, `.container-max`,
  `.eyebrow`, `.text-gradient`, etc.). Prefer these over re-deriving styles.
- **Animations** go through the wrappers in `components/reveal.tsx`
  (`Reveal`, `RevealGroup`, `RevealItem`) so reduced-motion is respected.
- **Only use Tailwind spacing/size steps that exist** (e.g. `h-5`, not `h-4.5`,
  `h-5.5`) — invalid arbitrary fractions silently do nothing.
- **Icons**: import from `lucide-react`, render at `h-5 w-5` with
  `strokeWidth={1.6}` to match the existing weight.
- **Links** use `next/link`. When a wrapper can be either a link or a div,
  branch explicitly (`if (href) return <Link/>`) rather than using a dynamic
  component variable — the union type breaks the build.
- Keep new copy on-brand: confident, concise, outcome-focused; British/UAE
  spelling is fine but stay consistent with existing text.

## Design system quick reference

- Background `#050506` (`bg-ink`); surfaces use `bg-white/[0.02]–[0.05]`,
  borders `border-white/10`.
- Accents: cyan `#22d3ee` (`accent-cyan`), violet `#8b5cf6` (`accent-violet`),
  glow `#67e8f9` (`accent-glow`). Use sparingly — the palette is mostly
  monochrome with selective accent.
- Headings use `font-display` + `tracking-tightest`; body uses default sans.

## The contact backend

`app/api/contact/route.ts` validates input, applies a naive per-instance rate
limit, and honors a honeypot field, then **logs** the submission. Delivery is
not wired up — there is a `TODO` marking where to add email (Resend/SES) or a
Slack webhook. For multi-instance hosting, replace the in-memory rate limiter
with a durable store (Redis/Upstash).

## Deployment

Optimized for **Vercel** (zero-config; `vercel.json` is present). Any host that
runs `next build` + `next start` works. When the production domain is set,
update the canonical URL in `app/layout.tsx` (`metadataBase`),
`app/sitemap.ts`, and `app/robots.ts`.

## Gotchas

- `npm run build` is the gate — type errors only surface there, not in `dev`.
- Don't commit `.next/`, `node_modules/`, or `.env*` (see `.gitignore`).
- The git remote is a proxy; the canonical GitHub repo is `demonmonk/deepaitech`.
