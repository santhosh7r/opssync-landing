# OpsSync · Backend Setup

This walks you through connecting the **waitlist form** to a real backend:

1. **Supabase** stores every signup in a `waitlist` table (name, email, agency type, team size, challenge).
2. **Resend** sends a branded confirmation email to whoever signs up.

Total time: ~10 minutes.

---

## 1 · Supabase (where signups are saved)

### Step 1 — Create a project

1. Go to <https://supabase.com> and sign in.
2. Click **New project**.
3. Pick a name (e.g. `opssync`), a strong database password, and a region near your users (e.g. **Mumbai** for India).
4. Wait ~2 minutes for the project to provision.

### Step 2 — Run the SQL schema

1. In the left sidebar, open **SQL Editor → New query**.
2. Open the file [`supabase/schema.sql`](./supabase/schema.sql) in this repo.
3. Copy the **entire contents** and paste it into the SQL editor.
4. Click **Run** (or `Ctrl/Cmd + Enter`).

You should see `Success. No rows returned.` — that means the `waitlist` table, the unique-email index, and the row-level security policy were all created.

### Step 3 — Copy your keys into `.env.local`

1. In the left sidebar, open **Project Settings → API**.
2. You need three values:

| Where to copy from | Goes into env var |
|---|---|
| **Project URL** (the `https://xxxx.supabase.co` one) | `NEXT_PUBLIC_SUPABASE_URL` |
| **Project API keys → `anon` `public`** | `NEXT_PUBLIC_SUPABASE_ANON_KEY` |
| **Project API keys → `service_role` `secret`** | `SUPABASE_SERVICE_ROLE_KEY` |

3. Open `.env.example` in the project, copy it to `.env.local`, and paste the values:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOi...
```

> ⚠️ The `service_role` key bypasses Row Level Security. **Never commit it** to git and never expose it to the browser. Our API route reads it server-side only.

### Step 4 — Test it

Run `npm run dev`, fill out the waitlist form, and submit.

Now in Supabase:

1. Sidebar → **Table Editor → waitlist**.
2. You should see the row you just submitted, with name, email, agency type, team size, challenge, and timestamp.

### Step 5 — Where to see all the emails you collected

Two easy ways:

**A. From the Supabase dashboard (no code)**

- **Table Editor → waitlist** — sortable, filterable, with CSV export from the `...` menu.
- **SQL Editor → New query** — paste this for a simple list:
  ```sql
  select email, name, agency_type, team_size, created_at
  from public.waitlist
  order by created_at desc;
  ```

**B. Export as CSV**

- Table Editor → **waitlist** → top-right `...` → **Export data as CSV**.
- Import directly into Google Sheets, Notion, HubSpot, etc.

**Optional — get a Slack ping for each new signup**

In Supabase: **Database → Webhooks → Create webhook** → on `INSERT` of `public.waitlist` → POST to your Slack incoming-webhook URL with a JSON body. Zero code, real-time notifications.

---

## 2 · Resend (confirmation emails)

This sends the "You're on the waitlist 👋" email to each signup.

### Step 1 — Create an account

1. Sign up at <https://resend.com>. The free tier gives **3,000 emails / month** and **100 / day** — more than enough for a waitlist.
2. Verify your email.

### Step 2 — Pick a sending domain

You have two options:

**Option A — Test with Resend's domain (fastest, no DNS)**

Skip to Step 3. By default Resend lets you send from `onboarding@resend.dev` to your own verified email address. Good for local testing, not for real users.

**Option B — Use your own domain (recommended for real launches)**

1. Resend dashboard → **Domains → Add Domain**.
2. Enter your domain (e.g. `opssync.app`).
3. Resend shows you **DNS records** to add — typically 3 records:
   - `MX` record (for delivery)
   - `TXT` record for **SPF**
   - `TXT` record for **DKIM**
4. Add those records in your DNS provider (Cloudflare, Vercel, Namecheap, Route 53, etc.).
5. Back in Resend, click **Verify DNS Records**. It usually takes a few minutes to a few hours.

Once verified, you can send from any address `@yourdomain.com`.

### Step 3 — Create an API key

1. Resend → **API Keys → Create API Key**.
2. Name it `opssync-prod` (or whatever), permission `Sending access`, domain `Full access`.
3. Click **Add** and **copy the key immediately** (it starts with `re_…`). You won't see it again.

### Step 4 — Add to `.env.local`

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL="OpsSync <hello@opssync.app>"
```

For Option A (Resend test domain), use:

```env
RESEND_FROM_EMAIL="OpsSync <onboarding@resend.dev>"
```

> The `From` field must match a verified domain (or be `onboarding@resend.dev` in test mode). Otherwise Resend rejects the message.

### Step 5 — Test it

1. `npm run dev`
2. Submit a waitlist signup using **your own email** (or the email you signed up to Resend with, if you're on the test domain).
3. Check your inbox — the confirmation email should arrive within a few seconds.

You can also verify the request landed on Resend's side at: **Resend → Emails → Recent**.

### Step 6 — Customise the email

The email template lives in [`src/lib/email.ts`](./src/lib/email.ts):

- `confirmationText()` — the plain-text version (for old clients & spam scores).
- `confirmationHtml()` — the styled HTML version (the one most users will see).

Edit those two functions to tweak copy, colours, links, footer, etc. No re-deploy of Supabase needed; just push your code.

---

## 3 · Deploying to production

### Vercel

1. Push the repo to GitHub.
2. Go to <https://vercel.com/new> and import the repo.
3. In **Project Settings → Environment Variables**, add the same 5 values you put in `.env.local`:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL`
4. Deploy. Vercel auto-detects Next.js and builds it.

### Any other host (Cloudflare Pages, Render, Fly, AWS Amplify, etc.)

Same idea — push code, add the 5 env vars to the host's secrets/config, deploy. The waitlist API route runs on Node, so make sure the host supports Node serverless functions (almost all of them do).

---

## 4 · Troubleshooting

| Symptom | Most likely cause | Fix |
|---|---|---|
| Form shows "Service temporarily unavailable" | Supabase env vars missing or wrong | Re-paste from Supabase **Settings → API**, restart `npm run dev` |
| Row inserts but no email arrives | `RESEND_API_KEY` missing or `From` domain not verified | Verify domain in Resend, check `RESEND_FROM_EMAIL` matches |
| Email lands in spam | DNS records (SPF/DKIM) not propagated yet | Wait 1–24 h, then re-test |
| "You're already on the waitlist" on first try | Same email submitted previously | Expected behaviour — duplicate-safe by design (unique index on `lower(email)`) |
| Form 429s | Rate limit (5/hour/IP) | Wait 60 minutes or temporarily increase `limit` in [`src/lib/rate-limit.ts`](./src/lib/rate-limit.ts) |

---

## 5 · Going further

- **Real-time dashboard** — Supabase has a built-in **Realtime** product. Subscribe to `INSERT` events on `waitlist` in any internal admin tool to see signups stream in live.
- **Tag signups in CRM** — Resend has a webhook for `email.delivered` / `email.opened`. Pipe that into HubSpot, Customer.io, or Loops.
- **Drip campaign** — once volume picks up, move the confirmation to a Resend **Audience + Broadcast** so you can drip-feed onboarding emails to the cohort.

Questions? Open an issue or email `hello@opssync.app`.
