import type { Metadata } from "next";
import { Check, Minus } from "lucide-react";

import { Container, Section, SectionLabel } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { CtaBanner } from "@/components/shared/cta-banner";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Honest, per-seat pricing for modern agencies. Starter, Growth, and Scale plans. No setup fees. Annual billing saves 20%.",
};

const PLANS = [
  {
    name: "Starter",
    price: "₹499",
    cadence: "per user / month",
    description: "For small studios getting their operations in one place.",
    features: [
      "Up to 5 team members",
      "Unlimited projects & clients",
      "Boards, briefs, and tasks",
      "Basic invoices & SOWs",
      "Email support",
    ],
    cta: "Join waitlist",
  },
  {
    name: "Growth",
    price: "₹1,499",
    cadence: "per user / month",
    description: "For growing agencies that need real visibility and revenue control.",
    features: [
      "Up to 25 team members",
      "Client portals",
      "Finance + retainer tracking",
      "Workflow automations",
      "Advanced analytics",
      "Priority support",
    ],
    cta: "Join waitlist",
    featured: true,
  },
  {
    name: "Scale",
    price: "₹3,999",
    cadence: "per user / month",
    description: "For multi-team agencies running operations at high volume.",
    features: [
      "Unlimited team members",
      "Multi-workspace & roles",
      "API + integrations",
      "SSO + audit logs",
      "Custom approvals",
      "Dedicated success manager",
    ],
    cta: "Book demo",
  },
];

const COMPARISON: { group: string; rows: [string, boolean | string, boolean | string, boolean | string][] }[] = [
  {
    group: "Workspace",
    rows: [
      ["Team members", "5", "25", "Unlimited"],
      ["Projects & clients", "Unlimited", "Unlimited", "Unlimited"],
      ["Storage", "20 GB", "100 GB", "500 GB"],
      ["Workspaces", "1", "3", "Unlimited"],
    ],
  },
  {
    group: "Client portals",
    rows: [
      ["Branded portals", false, true, true],
      ["Approvals & sign-offs", false, true, true],
      ["Custom domains", false, false, true],
    ],
  },
  {
    group: "Finance",
    rows: [
      ["Invoices & retainers", "Basic", "Advanced", "Advanced"],
      ["Stripe / QuickBooks sync", false, true, true],
      ["Real-time margin", false, true, true],
    ],
  },
  {
    group: "Security",
    rows: [
      ["AES-256 encryption", true, true, true],
      ["RBAC", true, true, true],
      ["Audit log", "30 days", "1 year", "Unlimited"],
      ["SSO / SAML", false, false, true],
    ],
  },
  {
    group: "Support",
    rows: [
      ["Channel", "Email", "Priority chat", "Dedicated CSM"],
      ["Response SLA", "48h", "24h", "4h"],
      ["Office hours", true, true, true],
    ],
  },
];

const FAQ = [
  {
    q: "Can I change plans later?",
    a: "Yes — upgrade or downgrade at any time. Changes prorate immediately and reflect on your next invoice.",
  },
  {
    q: "Do you offer annual billing?",
    a: "Yes. Annual billing saves 20% across all plans. Contact us for multi-year discounts.",
  },
  {
    q: "Is there a free trial?",
    a: "Waitlist members get the first 30 days free during the private beta. After GA, all plans include a 14-day trial.",
  },
  {
    q: "What payment methods do you accept?",
    a: "All major credit cards via Stripe, plus UPI, NEFT, and wire transfers for annual plans.",
  },
  {
    q: "Is there a setup fee?",
    a: "No setup fees, ever. Scale customers get a complimentary guided migration.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        label="Pricing"
        number="02"
        title={
          <>
            Honest pricing.{" "}
            <span className="serif-italic text-zinc-500">Scales with you.</span>
          </>
        }
        description="Per seat, monthly. Annual billing saves 20%. No setup fees. Cancel anytime."
      />

      {/* Plans */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 lg:grid-cols-3">
            {PLANS.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-[12.5px] text-zinc-500">
            Pricing in INR. Custom enterprise contracts available for 50+ seats —{" "}
            <a href="/contact" className="text-foreground link-underline">
              talk to us
            </a>
            .
          </p>
        </Container>
      </Section>

      {/* Comparison */}
      <Section className="border-t border-zinc-200 bg-zinc-50/60">
        <Container>
          <SectionLabel number="03">Compare plans</SectionLabel>
          <h2 className="mt-6 max-w-2xl text-balance text-[32px] font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[40px]">
            What&apos;s in each plan,{" "}
            <span className="serif-italic text-zinc-500">in detail.</span>
          </h2>

          <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-200 bg-white">
            {/* Header row */}
            <div className="hidden grid-cols-12 border-b border-zinc-200 bg-zinc-50/60 px-6 py-4 text-[11.5px] font-medium uppercase tracking-[0.14em] text-zinc-500 sm:grid">
              <div className="col-span-6">Feature</div>
              <div className="col-span-2 text-center">Starter</div>
              <div className="col-span-2 text-center text-forest-700">Growth</div>
              <div className="col-span-2 text-center">Scale</div>
            </div>

            {COMPARISON.map((g) => (
              <div key={g.group}>
                <div className="border-b border-t border-zinc-200 bg-zinc-50/50 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground first:border-t-0">
                  {g.group}
                </div>
                {g.rows.map(([label, s, g2, sc]) => (
                  <div
                    key={label}
                    className="grid grid-cols-12 items-center gap-2 border-b border-zinc-200 px-6 py-3.5 text-[13.5px] last:border-b-0"
                  >
                    <div className="col-span-12 text-foreground sm:col-span-6">{label}</div>
                    <Cell value={s} className="col-span-4 sm:col-span-2" mobileLabel="Starter" />
                    <Cell value={g2} className="col-span-4 sm:col-span-2" mobileLabel="Growth" featured />
                    <Cell value={sc} className="col-span-4 sm:col-span-2" mobileLabel="Scale" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Pricing FAQ */}
      <Section>
        <Container>
          <SectionLabel number="04">Pricing FAQ</SectionLabel>
          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12">
            <h2 className="text-[32px] font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[40px] lg:col-span-5">
              Questions about pricing,{" "}
              <span className="serif-italic text-zinc-500">answered.</span>
            </h2>
            <div className="lg:col-span-7">
              <Accordion type="single" collapsible defaultValue="item-0">
                {FAQ.map((f, i) => (
                  <AccordionItem key={f.q} value={`item-${i}`}>
                    <AccordionTrigger>{f.q}</AccordionTrigger>
                    <AccordionContent>{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}

function PlanCard({
  plan,
}: {
  plan: {
    name: string;
    price: string;
    cadence: string;
    description: string;
    features: string[];
    cta: string;
    featured?: boolean;
  };
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-6 p-7 sm:gap-7 sm:p-9 lg:p-10",
        plan.featured ? "bg-foreground text-background" : "bg-white"
      )}
    >
      <div className="flex items-center justify-between">
        <h3
          className={cn(
            "text-[14px] font-semibold uppercase tracking-[0.14em]",
            plan.featured ? "text-background/80" : "text-zinc-500"
          )}
        >
          {plan.name}
        </h3>
        {plan.featured && (
          <span className="rounded-full border border-background/20 bg-background/10 px-2 py-0.5 text-[10.5px] font-medium uppercase tracking-wider text-background">
            Recommended
          </span>
        )}
      </div>
      <div>
        <div
          className={cn(
            "font-serif text-[52px] font-normal leading-none tracking-[-0.02em]",
            plan.featured ? "text-background" : "text-foreground"
          )}
        >
          {plan.price}
        </div>
        <div
          className={cn(
            "mt-2 text-[13px]",
            plan.featured ? "text-background/70" : "text-zinc-500"
          )}
        >
          {plan.cadence}
        </div>
      </div>
      <p
        className={cn(
          "text-[14px] leading-relaxed",
          plan.featured ? "text-background/80" : "text-zinc-500"
        )}
      >
        {plan.description}
      </p>
      <a
        href="/#waitlist"
        className={cn(
          "inline-flex h-11 items-center justify-center rounded-full px-5 text-[14px] font-medium transition-colors",
          plan.featured
            ? "bg-background text-foreground hover:bg-background/90"
            : "bg-foreground text-background hover:bg-foreground/90"
        )}
      >
        {plan.cta}
      </a>
      <ul className="space-y-3">
        {plan.features.map((f) => (
          <li
            key={f}
            className={cn(
              "flex items-start gap-2.5 text-[13.5px]",
              plan.featured ? "text-background/85" : "text-foreground/85"
            )}
          >
            <Check
              className={cn(
                "mt-0.5 size-3.5 shrink-0",
                plan.featured ? "text-background" : "text-forest-700"
              )}
              strokeWidth={2.5}
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Cell({
  value,
  className,
  mobileLabel,
  featured,
}: {
  value: boolean | string;
  className?: string;
  mobileLabel: string;
  featured?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-2 sm:justify-center", className)}>
      <span className="text-[10.5px] uppercase tracking-wider text-zinc-400 sm:hidden">
        {mobileLabel}
      </span>
      {typeof value === "boolean" ? (
        value ? (
          <Check
            className={cn("size-4", featured ? "text-forest-700" : "text-foreground")}
            strokeWidth={2.5}
          />
        ) : (
          <Minus className="size-3.5 text-zinc-300" />
        )
      ) : (
        <span className={cn("text-[13px]", featured ? "font-medium text-foreground" : "text-foreground/80")}>
          {value}
        </span>
      )}
    </div>
  );
}
