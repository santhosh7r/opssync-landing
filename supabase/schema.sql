-- OpsSync · waitlist schema
-- Run this in the Supabase SQL editor (or via supabase db push).

create extension if not exists "pgcrypto";

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 120),
  email citext not null,
  agency_type text not null check (
    agency_type in (
      'creative',
      'digital_marketing',
      'branding',
      'web_development',
      'production',
      'pr_communications',
      'consulting',
      'other'
    )
  ),
  team_size text not null check (
    team_size in ('1-5', '6-15', '16-30', '31-60', '60+')
  ),
  challenge text not null check (char_length(challenge) between 4 and 1000),
  source text,
  user_agent text,
  ip inet,
  created_at timestamptz not null default now()
);

-- Enable citext (case-insensitive emails) — Supabase ships with it but the
-- extension still needs to be created in the public schema once.
create extension if not exists citext;

-- Prevent duplicate signups
create unique index if not exists waitlist_email_unique
  on public.waitlist (lower(email));

create index if not exists waitlist_created_at_idx
  on public.waitlist (created_at desc);

-- Row Level Security
alter table public.waitlist enable row level security;

-- The API route uses the service role key (server-only), which bypasses RLS.
-- We deliberately do NOT expose any anon insert/select policies; the table is
-- write-only via the server route, which gives us validation, rate-limiting,
-- and email confirmation as a single trusted code path.

-- Optional: allow service_role full access (this is the default, but we
-- spell it out for clarity).
drop policy if exists "waitlist service role" on public.waitlist;
create policy "waitlist service role"
  on public.waitlist
  for all
  to service_role
  using (true)
  with check (true);

comment on table public.waitlist is 'OpsSync product waitlist submissions';
