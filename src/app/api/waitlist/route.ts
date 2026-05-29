import { NextResponse } from "next/server";

import { getSupabaseAdmin } from "@/lib/supabase";
import { sendWaitlistConfirmation } from "@/lib/email";
import { rateLimit } from "@/lib/rate-limit";
import { waitlistSchema } from "@/lib/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function getIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]!.trim();
  const real = req.headers.get("x-real-ip");
  if (real) return real.trim();
  return "0.0.0.0";
}

export async function POST(req: Request) {
  const ip = getIp(req);
  const limited = rateLimit(`waitlist:${ip}`, {
    limit: 5,
    windowMs: 60 * 60 * 1000, // 1 hour
  });
  if (!limited.ok) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429, headers: { "Retry-After": String(limited.retryAfter) } }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = waitlistSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Validation failed",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 422 }
    );
  }

  let supabase;
  try {
    supabase = getSupabaseAdmin();
  } catch (err) {
    console.error("[waitlist] supabase not configured:", err);
    return NextResponse.json(
      { error: "Service temporarily unavailable. Please try again soon." },
      { status: 503 }
    );
  }

  const { data, error } = await supabase
    .from("waitlist")
    .insert({
      name: parsed.data.name,
      email: parsed.data.email.toLowerCase(),
      agency_type: parsed.data.agency_type,
      team_size: parsed.data.team_size,
      challenge: parsed.data.challenge,
      source: req.headers.get("referer") ?? null,
      user_agent: req.headers.get("user-agent") ?? null,
      ip: ip === "0.0.0.0" ? null : ip,
    })
    .select("id, created_at")
    .single();

  if (error) {
    // Postgres unique_violation
    if ((error as { code?: string }).code === "23505") {
      return NextResponse.json(
        {
          ok: true,
          duplicate: true,
          message: "You're already on the waitlist — we'll be in touch soon.",
        },
        { status: 200 }
      );
    }
    console.error("[waitlist] insert error:", error);
    return NextResponse.json(
      { error: "Could not save your signup. Please try again." },
      { status: 500 }
    );
  }

  // Fire-and-forget confirmation email. We don't block the response on it.
  void sendWaitlistConfirmation({
    to: parsed.data.email,
    name: parsed.data.name,
  }).catch((err) => {
    console.error("[waitlist] email error:", err);
  });

  return NextResponse.json(
    {
      ok: true,
      id: data.id,
      message: "You're in — check your inbox.",
    },
    { status: 201 }
  );
}
