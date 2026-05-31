# Deep AI Tech LLC — Website

The official website for **Deep AI Tech LLC**, a UAE-based AI and software
consultancy. Built as a full-stack Next.js application with a "Quantum Black"
visual identity: a pure-black canvas, high-contrast typography, restrained
electric-cyan→violet accents, and refined motion.

## ✨ What's inside

A complete, multi-page marketing site — front end **and** back end:

| Route | Description |
| --- | --- |
| `/` | Landing page: hero, services, stats, solutions, process, featured work, insights, CTA |
| `/services` | Six detailed service practices + engagement model |
| `/solutions` | Solution patterns and the industries we serve |
| `/work` | Case-study listing |
| `/work/[slug]` | Individual case study (dynamically generated) |
| `/about` | Mission, values, stats, UAE positioning |
| `/insights` | Article/blog listing |
| `/insights/[slug]` | Individual article (dynamically generated) |
| `/contact` | Contact page with a working, validated form |
| `/api/contact` | **Backend** API route: validation, rate limiting, honeypot |
| `/sitemap.xml`, `/robots.txt` | SEO essentials, generated at build |
| `not-found` | Custom 404 |

## 🧱 Tech stack

- **[Next.js 14](https://nextjs.org/)** (App Router) — pages + server-side API routes
- **TypeScript** — end-to-end type safety
- **Tailwind CSS** — design system & styling
- **Framer Motion** — scroll reveals and micro-interactions
- **lucide-react** — icon set
- Google Fonts via `next/font`: **Space Grotesk** (display), **Inter** (body),
  **JetBrains Mono** (accents)

## 🚀 Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server → http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # lint
```

## 🗂 Project structure

```
app/
  layout.tsx          # root layout, fonts, metadata, nav + footer
  page.tsx            # home
  globals.css         # design system (Quantum Black tokens & utilities)
  services/ solutions/ work/ about/ insights/ contact/
  work/[slug]/        # dynamic case studies
  insights/[slug]/    # dynamic articles
  api/contact/        # backend contact endpoint
  sitemap.ts robots.ts not-found.tsx
components/            # navbar, footer, cards, sections, effects, form
lib/
  site.ts             # company info & navigation
  content.ts          # services, solutions, case studies, insights, etc.
  utils.ts            # helpers
```

## ✏️ Editing content

Nearly all copy lives in **`lib/content.ts`** and **`lib/site.ts`** — update
services, case studies, insights, stats, contact details, and navigation there
without touching the components.

## 🔌 Wiring up the contact form

`app/api/contact/route.ts` validates input, rate-limits, and currently logs
submissions server-side. To deliver messages, plug in your provider where the
`TODO` marker is — e.g. [Resend](https://resend.com), Amazon SES, or a Slack
webhook. For multi-instance deployments, swap the in-memory rate limiter for a
durable store (Redis/Upstash).

## 🌐 Deployment

Optimized for [Vercel](https://vercel.com) (zero-config). Any Node host that
runs `next start` works too. Set the canonical URL in `app/layout.tsx`,
`app/sitemap.ts`, and `app/robots.ts` when the domain is live.

---

© Deep AI Tech LLC · Made in the UAE
