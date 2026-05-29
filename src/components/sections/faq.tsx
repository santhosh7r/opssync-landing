"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container, Section, SectionHeading } from "@/components/shared/container";

const FAQS = [
  {
    q: "When does OpsSync launch?",
    a: "Private beta opens this quarter, with general availability planned later this year. Waitlist members get early access in priority order, starting with agencies that shared a real challenge.",
  },
  {
    q: "How is OpsSync priced?",
    a: "Per seat, per month — Starter ₹499, Growth ₹1,499, Scale ₹3,999. Annual billing saves 20% and there are no setup fees. Custom enterprise pricing is available for 50+ seats.",
  },
  {
    q: "Which tools does it integrate with?",
    a: "Native integrations at launch: Slack, Google Workspace, Notion, Linear, Zapier, Stripe, QuickBooks, Zoho Books, and HubSpot. A public API and webhooks ship with Growth and Scale.",
  },
  {
    q: "How long does onboarding take?",
    a: "Most agencies are fully live within a week. Our team runs a guided migration covering workspace setup, importing clients and projects, configuring workflows, and training. Scale plans include a dedicated success manager.",
  },
  {
    q: "What happens to my data if I cancel?",
    a: "You own your data. Export everything as CSV or JSON at any time. We retain backups for 30 days post-cancellation, then permanently delete on request.",
  },
  {
    q: "Is OpsSync secure?",
    a: "All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We run on SOC 2-aligned infrastructure with daily backups, role-based access controls, and SSO/SAML on Scale.",
  },
  {
    q: "What support do you offer?",
    a: "Email on Starter, priority chat + email on Growth, dedicated success manager and SLA on Scale. All plans get our agency playbook library and weekly office hours.",
  },
];

export function FAQ() {
  return (
    <Section id="faq" className="border-t border-zinc-200">
      <Container>
        <div className="grid grid-cols-1 gap-10 sm:gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionHeading
              label="FAQ"
              number="08"
              align="left"
              title={
                <>
                  Questions,{" "}
                  <span className="serif-italic text-zinc-500">answered.</span>
                </>
              }
              description="Can't find what you're looking for? Email us at hello@opssync.app — a human reads every message."
            />
          </div>
          <div className="lg:col-span-7">
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
              {FAQS.map((f, i) => (
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
  );
}
