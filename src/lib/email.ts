import { Resend } from "resend";
import { siteConfig } from "@/lib/site";

let _resend: Resend | null = null;

function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  if (!_resend) _resend = new Resend(key);
  return _resend;
}

export async function sendWaitlistConfirmation({
  to,
  name,
}: {
  to: string;
  name: string;
}) {
  const resend = getResend();
  if (!resend) {
    // Email is best-effort. If Resend isn't configured we still want the
    // waitlist signup to succeed, so we log and return.
    console.warn("[email] RESEND_API_KEY not set — skipping confirmation email.");
    return { skipped: true as const };
  }

  const from = process.env.RESEND_FROM_EMAIL ?? `OpsSync <hello@opssync.app>`;
  const firstName = name.split(" ")[0] ?? name;

  const { error } = await resend.emails.send({
    from,
    to,
    subject: "You're on the OpsSync waitlist 👋",
    replyTo: siteConfig.links.email,
    text: confirmationText(firstName),
    html: confirmationHtml(firstName),
  });

  if (error) {
    console.error("[email] Resend error:", error);
    return { skipped: false as const, error };
  }

  return { skipped: false as const };
}

function confirmationText(name: string) {
  return [
    `Hi ${name},`,
    "",
    "Thanks for joining the OpsSync waitlist.",
    "",
    "OpsSync is the modern operating system for agencies — one workspace for projects, clients, finance, ops, and workflows.",
    "",
    "We're rolling out access in waves, prioritising agencies that shared a real operational challenge. You'll hear from us as soon as your spot opens up.",
    "",
    "In the meantime, if you'd like a guided walkthrough, just reply to this email and we'll set something up.",
    "",
    "— The OpsSync team",
    siteConfig.url,
  ].join("\n");
}

function confirmationHtml(name: string) {
  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#0a0a0c;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Inter,Roboto,sans-serif;color:#e4e4e7;">
    <div style="max-width:560px;margin:0 auto;padding:40px 24px;">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:32px;">
        <div style="width:28px;height:28px;border-radius:6px;background:#18181b;display:inline-flex;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,0.08);">
          <span style="color:#5b8def;font-weight:700;font-size:14px;">O</span>
        </div>
        <span style="font-size:15px;font-weight:600;color:#fafafa;letter-spacing:-0.01em;">OpsSync</span>
      </div>

      <h1 style="font-size:24px;line-height:1.25;margin:0 0 16px;color:#fafafa;font-weight:600;letter-spacing:-0.02em;">
        You're on the list, ${escapeHtml(name)}.
      </h1>
      <p style="font-size:15px;line-height:1.6;margin:0 0 16px;color:#a1a1aa;">
        Thanks for joining the OpsSync waitlist. We're building the modern operating
        system for agencies — one workspace for projects, clients, finance,
        operations, and workflows.
      </p>
      <p style="font-size:15px;line-height:1.6;margin:0 0 24px;color:#a1a1aa;">
        We're rolling out access in waves, prioritising agencies that shared a
        real operational challenge. You'll hear from us as soon as your spot
        opens up.
      </p>

      <a href="${siteConfig.url}" style="display:inline-block;background:#fafafa;color:#0a0a0c;text-decoration:none;font-size:14px;font-weight:600;padding:10px 18px;border-radius:8px;">
        Visit OpsSync →
      </a>

      <hr style="border:0;border-top:1px solid #27272a;margin:36px 0;">

      <p style="font-size:13px;line-height:1.6;margin:0;color:#71717a;">
        Want a guided walkthrough? Just reply to this email — a real human reads
        every message.
      </p>
      <p style="font-size:13px;line-height:1.6;margin:8px 0 0;color:#71717a;">
        — The OpsSync team
      </p>
    </div>
  </body>
</html>`;
}

function escapeHtml(input: string) {
  return input.replace(/[&<>"']/g, (ch) => {
    switch (ch) {
      case "&": return "&amp;";
      case "<": return "&lt;";
      case ">": return "&gt;";
      case '"': return "&quot;";
      case "'": return "&#39;";
      default: return ch;
    }
  });
}
