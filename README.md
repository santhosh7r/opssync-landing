# OpsSync

The modern operating system for agencies — a production-ready waitlist landing page.

Built with **Next.js 15 (App Router)**, **TypeScript**, **TailwindCSS**, Shadcn-style components, **Framer Motion**, **Lucide**, **Supabase**, and **Resend**.

---

## Highlights

- Premium dark-first UI inspired by Linear, Stripe, Vercel, Raycast, and Arc
- Realistic agency dashboard mockup (sidebar, analytics, kanban, revenue, pipeline, invoices, workload, activity)
- Full landing structure: hero · problem · features · product preview · ROI · pricing · roadmap · testimonials · waitlist · FAQ · footer
- Sticky navbar with scroll-blur and mobile menu
- Waitlist form with client + server validation (Zod), success animation, sonner toasts, and duplicate-safe writes
- Supabase Postgres schema with RLS, unique-email index, citext, and an admin-only insert path
- Resend confirmation email (HTML + text) sent on signup
- In-memory IP rate limiting on the API route
- SEO ready: dynamic metadata, OpenGraph, Twitter cards, `robots.txt`, `sitemap.xml`
- Fully responsive, accessible (skip-link, ARIA on form fields), and a clean type-checked build

---

## Quick start

```bash
# 1. Install
npm install

# 2. Configure env (see below)
cp .env.example .env.local
# fill in Supabase + Resend keys

# 3. Apply database schema
# (Supabase dashboard → SQL editor → paste /supabase/schema.sql)

# 4. Run
npm run dev   # http://localhost:3000
```

Scripts:

| Script              | Purpose                       |
| ------------------- | ----------------------------- |
| `npm run dev`       | Local dev server              |
| `npm run build`     | Production build              |
| `npm run start`     | Run the production build      |
| `npm run lint`      | ESLint                        |
| `npm run type-check`| TypeScript no-emit check      |

---

## Environment variables

Create `.env.local` from `.env.example`:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...        # server-only

# Resend
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL="OpsSync <hello@opssync.app>"

# Site
NEXT_PUBLIC_SITE_URL=https://opssync.app
```

> The waitlist API route uses the **service-role key**, never the anon key. It is only read on the server and never sent to the client.

---

## Supabase setup

1. Create a new Supabase project.
2. Open **SQL Editor** and run [`supabase/schema.sql`](./supabase/schema.sql). It creates:
   - `public.waitlist` table (id, name, email, agency_type, team_size, challenge, source, user_agent, ip, created_at)
   - `citext` extension + lowercased unique index to **prevent duplicate emails**
   - Row Level Security (write-only via server route using service role)
3. Copy the `URL`, `anon key`, and `service_role key` from **Project Settings → API** into `.env.local`.

The API route at [`src/app/api/waitlist/route.ts`](./src/app/api/waitlist/route.ts):

- Validates with Zod ([`src/lib/validation.ts`](./src/lib/validation.ts))
- IP-rate-limits (5 / hour / IP) — swap to Upstash for multi-region
- Inserts into `public.waitlist`
- On unique-violation, returns a friendly "already on the list" message
- Fires a non-blocking confirmation email via Resend

---

## Resend setup

1. Create an account at [resend.com](https://resend.com) and verify your sending domain.
2. Create an API key and put it in `RESEND_API_KEY`.
3. Set `RESEND_FROM_EMAIL` to a verified sender (e.g. `"OpsSync <hello@opssync.app>"`).

If `RESEND_API_KEY` is missing, the API still saves to Supabase and just logs a warning — useful for local dev.

---

## Deployment (Vercel)

```bash
# 1. Push to GitHub
git init && git add . && git commit -m "init"
git remote add origin <your-repo>
git push -u origin main

# 2. Import the repo in Vercel
# 3. Add the same env vars from .env.local in Vercel → Settings → Environment Variables
# 4. Deploy
```

That's it. Build command and output dir are auto-detected.

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx              # root layout (dark default, fonts, toaster, metadata)
│   ├── page.tsx                # landing page composition
│   ├── globals.css             # design tokens + utilities
│   ├── robots.ts, sitemap.ts   # SEO
│   ├── api/waitlist/route.ts   # server route → Supabase + Resend
│   └── (legal)/{privacy,terms}/page.tsx
├── components/
│   ├── ui/                     # shadcn-style primitives (button, input, select, accordion, label, textarea)
│   ├── shared/                 # logo, container, section heading
│   ├── mockup/dashboard.tsx    # the premium agency dashboard mockup
│   └── sections/
│       ├── navbar.tsx
│       ├── hero.tsx
│       ├── problem.tsx
│       ├── features.tsx
│       ├── product-preview.tsx
│       ├── roi.tsx
│       ├── pricing.tsx
│       ├── roadmap.tsx
│       ├── testimonials.tsx
│       ├── waitlist.tsx
│       ├── faq.tsx
│       └── footer.tsx
├── lib/
│   ├── utils.ts                # cn() helper
│   ├── site.ts                 # site constants / metadata
│   ├── supabase.ts             # server admin client
│   ├── email.ts                # Resend confirmation email
│   ├── rate-limit.ts           # IP bucket limiter
│   └── validation.ts           # zod schema + enums shared by client + server
└── supabase/
    └── schema.sql              # waitlist table + indexes + RLS
```

---

## Customising

- **Brand colours** — adjust the HSL tokens in `src/app/globals.css` (the dark palette uses zinc + subtle blue accent).
- **Logo wordmark** — `src/components/shared/logo.tsx`.
- **Pricing / plans** — `src/components/sections/pricing.tsx`.
- **Roadmap items** — `src/components/sections/roadmap.tsx`.
- **Testimonials** — `src/components/sections/testimonials.tsx`.
- **FAQs** — `src/components/sections/faq.tsx`.
- **Dashboard mockup data** — `src/components/mockup/dashboard.tsx` (all data is local constants; replace with anything).

---

## License

Proprietary — © OpsSync. Replace this section before going live if you intend to open-source.
# opssync-landing
