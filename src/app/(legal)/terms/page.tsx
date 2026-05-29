import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing your use of OpsSync.",
};

export default function TermsPage() {
  return (
    <article>
      <h1 className="text-[40px] font-medium leading-tight tracking-[-0.02em] text-foreground">
        Terms of Service
      </h1>
      <p className="mt-3 text-[13px] text-zinc-500">Last updated: today</p>

      <div className="mt-12 space-y-8 text-[15.5px] leading-relaxed text-zinc-600">
        <p>
          This is a placeholder set of terms for OpsSync&apos;s waitlist
          landing page. Replace with your final terms before production launch.
        </p>
        <div>
          <h2 className="mb-3 text-[18px] font-medium text-foreground">Waitlist access</h2>
          <p>
            Joining the OpsSync waitlist does not guarantee access to the
            product. We onboard agencies in waves and reach out individually.
          </p>
        </div>
        <div>
          <h2 className="mb-3 text-[18px] font-medium text-foreground">Communications</h2>
          <p>
            By joining, you consent to receive transactional and product-related
            emails. You can opt out at any time using the link in any email or
            by contacting us.
          </p>
        </div>
        <div>
          <h2 className="mb-3 text-[18px] font-medium text-foreground">Contact</h2>
          <p>
            Questions? Email{" "}
            <a className="text-foreground link-underline" href="mailto:hello@opssync.app">
              hello@opssync.app
            </a>.
          </p>
        </div>
      </div>
    </article>
  );
}
