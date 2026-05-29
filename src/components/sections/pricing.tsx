"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/shared/container";
import { cn } from "@/lib/utils";

type Plan = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

const PLANS: Plan[] = [
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
      "Finance + retainer tracking",
      "Workflow automations",
      "Client portals",
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

export function Pricing() {
  return (
    <Section id="pricing">
      <Container>
        <SectionHeading
          label="Pricing"
          number="05"
          title={
            <>
              Honest pricing.{" "}
              <span className="serif-italic text-zinc-500">Scales with you.</span>
            </>
          }
          description="Per seat, monthly. Annual billing saves 20%. No setup fees. Cancel anytime."
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:mt-20 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-[12.5px] text-zinc-500">
          Pricing in INR. Custom enterprise contracts available for 50+ seats —{" "}
          <a href="#waitlist" className="text-foreground link-underline">talk to us</a>.
        </p>
      </Container>
    </Section>
  );
}

function PricingCard({ plan, index }: { plan: Plan; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.05 }}
      className={cn(
        "relative flex flex-col gap-6 p-7 sm:gap-7 sm:p-9 lg:p-10",
        plan.featured
          ? "bg-[#06140C] text-white"
          : "bg-white"
      )}
    >
      {plan.featured && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-forest-400/50 to-transparent"
        />
      )}
      <div className="flex items-center justify-between">
        <h3
          className={cn(
            "text-[14px] font-semibold uppercase tracking-[0.14em]",
            plan.featured ? "text-forest-300" : "text-zinc-500"
          )}
        >
          {plan.name}
        </h3>
        {plan.featured && (
          <span className="inline-flex items-center gap-1 rounded-full border border-forest-400/30 bg-forest-500/15 px-2 py-0.5 text-[10.5px] font-medium uppercase tracking-wider text-forest-200">
            <span className="size-1 rounded-full bg-forest-400" />
            Recommended
          </span>
        )}
      </div>

      <div>
        <div className="flex items-baseline gap-1.5">
          <span
            className={cn(
              "font-serif text-[52px] font-normal leading-none tracking-[-0.02em]",
              plan.featured ? "text-white" : "text-foreground"
            )}
          >
            {plan.price}
          </span>
        </div>
        <div
          className={cn(
            "mt-2 text-[13px]",
            plan.featured ? "text-white/60" : "text-zinc-500"
          )}
        >
          {plan.cadence}
        </div>
      </div>

      <p
        className={cn(
          "text-[14px] leading-relaxed",
          plan.featured ? "text-white/70" : "text-zinc-500"
        )}
      >
        {plan.description}
      </p>

      <Button
        asChild
        size="lg"
        variant={plan.featured ? "secondary" : "primary"}
        className={cn(
          "w-full",
          plan.featured && "bg-forest-500 text-white border-transparent hover:bg-forest-400"
        )}
      >
        <a href="#waitlist">{plan.cta}</a>
      </Button>

      <ul className="space-y-3">
        {plan.features.map((f) => (
          <li
            key={f}
            className={cn(
              "flex items-start gap-2.5 text-[13.5px]",
              plan.featured ? "text-white/85" : "text-foreground/85"
            )}
          >
            <Check
              className={cn(
                "mt-0.5 size-3.5 shrink-0",
                plan.featured ? "text-forest-300" : "text-forest-700"
              )}
              strokeWidth={2.5}
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
