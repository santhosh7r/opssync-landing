import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How OpsSync collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <article>
      <h1 className="text-[40px] font-medium leading-tight tracking-[-0.02em] text-foreground">
        Privacy Policy
      </h1>
      <p className="mt-3 text-[13px] text-zinc-500">Last updated: today</p>

      <div className="mt-12 space-y-8 text-[15.5px] leading-relaxed text-zinc-600">
        <p>
          This is a placeholder privacy policy for OpsSync&apos;s waitlist
          landing page. Replace with your final policy before production
          launch.
        </p>
        <div>
          <h2 className="mb-3 text-[18px] font-medium text-foreground">What we collect</h2>
          <p>
            When you join the waitlist we collect your name, work email, agency
            type, team size, and the operational challenge you share with us.
            We also log basic request metadata (IP, user agent) for spam and
            abuse prevention.
          </p>
        </div>
        <div>
          <h2 className="mb-3 text-[18px] font-medium text-foreground">How we use it</h2>
          <p>
            We use this information to send you a confirmation, prioritise
            onboarding waves, and contact you when access opens up. We never
            sell your data.
          </p>
        </div>
        <div>
          <h2 className="mb-3 text-[18px] font-medium text-foreground">Your rights</h2>
          <p>
            Request deletion or export of your data at any time by emailing{" "}
            <a className="text-foreground link-underline" href="mailto:hello@opssync.app">
              hello@opssync.app
            </a>.
          </p>
        </div>
      </div>
    </article>
  );
}
