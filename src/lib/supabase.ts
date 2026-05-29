import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client using the service role key.
 * Never import this from a client component.
 */
let _admin: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient {
  if (_admin) return _admin;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    throw new Error(
      "Supabase env not configured: set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY."
    );
  }

  _admin = createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
    db: { schema: "public" },
    global: {
      headers: { "x-application-name": "opssync-waitlist" },
    },
  });

  return _admin;
}

export type WaitlistRow = {
  id: string;
  name: string;
  email: string;
  agency_type: string;
  team_size: string;
  challenge: string;
  source: string | null;
  user_agent: string | null;
  ip: string | null;
  created_at: string;
};
