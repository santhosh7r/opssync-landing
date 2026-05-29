import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import { Container, Section, SectionLabel } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { CtaBanner } from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "Customers",
  description:
    "Modern agencies running their entire operation on OpsSync.",
};

const STORIES = [
  {
    agency: "Northwind Studio",
    location: "Bengaluru",
    size: "18 people",
    quote:
      "We replaced six tools the week we onboarded. Retainer renewals now surface before they're overdue — not after.",
    name: "Aarav Bhatia",
    role: "Founder",
    stat: { value: "−42%", label: "Time spent on status reports" },
  },
  {
    agency: "Halo Studio",
    location: "Lisbon",
    size: "12 people",
    quote:
      "The first project tool that didn't add another meeting. PMs stopped pinging engineers for status — it's all just there.",
    name: "Riya Mehta",
    role: "Head of Operations",
    stat: { value: "3.4×", label: "Faster handoffs across teams" },
  },
  {
    agency: "Loop Labs",
    location: "Berlin",
    size: "31 people",
    quote:
      "I can answer 'what's our margin on Northwind' in four seconds. That used to take a week.",
    name: "Daniel Verma",
    role: "Managing Partner",
    stat: { value: "+18%", label: "Margin visibility on active work" },
  },
];

const SHORT_QUOTES = [
  {
    quote:
      "Feels like a tool built by people who've actually run an agency. The defaults are remarkable.",
    name: "Sanya Pillai",
    role: "Co-founder, Citrus Co.",
  },
  {
    quote:
      "We grew from 12 to 34 people without breaking. That used to require a hire — not a tool.",
    name: "Marcus King",
    role: "COO, Helix Agency",
  },
  {
    quote:
      "Linear-quality craft. Priced like a SaaS that gets agencies. We're never going back.",
    name: "Imani Osei",
    role: "Founder, Foundry Collective",
  },
  {
    quote:
      "The client portals alone justify the move. Our clients log in instead of emailing.",
    name: "Tara Khanna",
    role: "Founder, Tonic Studio",
  },
  {
    quote:
      "Every Friday there's something new and useful. Most tools we use went on autopilot years ago.",
    name: "Jonas Weber",
    role: "Ops Lead, Mercer & Co.",
  },
  {
    quote:
      "Finance and delivery finally speak the same language. That's what we were paying for.",
    name: "Priya Nair",
    role: "Managing Partner, Halo",
  },
];

export default function CustomersPage() {
  return (
    <>
      <PageHero
        label="Customers"
        number="01"
        title={
          <>
            Modern agencies,{" "}
            <span className="serif-italic text-zinc-500">running on OpsSync.</span>
          </>
        }
        description="A small group of design-first agencies have been running early access. Here's what they've shipped, and what they're saying."
      />

      {/* Featured stories */}
      <Section>
        <Container>
          <div className="flex flex-col gap-12 sm:gap-16">
            {STORIES.map((s, i) => (
              <article
                key={s.agency}
                className="grid grid-cols-1 gap-10 border-t border-zinc-200 pt-12 lg:grid-cols-12 lg:gap-16"
              >
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] text-zinc-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-[26px] font-medium tracking-[-0.015em] text-foreground sm:text-[30px]">
                      {s.agency}
                    </h2>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[12.5px] text-zinc-500">
                    <span>{s.location}</span>
                    <span className="h-3 w-px self-center bg-zinc-200" />
                    <span>{s.size}</span>
                  </div>

                  <div className="mt-10 rounded-2xl border border-forest-100 bg-forest-50/60 p-6">
                    <div className="font-serif text-[44px] leading-none tracking-[-0.02em] text-forest-700 sm:text-[52px]">
                      {s.stat.value}
                    </div>
                    <div className="mt-2 text-[13px] text-forest-700/80">
                      {s.stat.label}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <blockquote className="text-[22px] font-medium leading-[1.35] tracking-[-0.01em] text-foreground sm:text-[26px]">
                    <span className="font-serif text-[40px] leading-none text-zinc-300">“</span>
                    {s.quote}
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-3 border-t border-zinc-200 pt-6">
                    <div className="size-9 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-300" />
                    <div>
                      <div className="text-[14px] font-medium text-foreground">
                        {s.name}
                      </div>
                      <div className="text-[12.5px] text-zinc-500">{s.role}</div>
                    </div>
                    <a
                      href="/#waitlist"
                      className="ml-auto inline-flex items-center gap-1 text-[12.5px] font-medium text-foreground transition-colors hover:text-forest-700"
                    >
                      Read more <ArrowUpRight className="size-3.5" />
                    </a>
                  </figcaption>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Short quotes wall */}
      <Section className="border-t border-zinc-200 bg-zinc-50/60">
        <Container>
          <SectionLabel number="02">More from operators</SectionLabel>
          <h2 className="mt-6 max-w-2xl text-balance text-[32px] font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[42px]">
            What founders are saying.
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:grid-cols-2 lg:grid-cols-3">
            {SHORT_QUOTES.map((q) => (
              <figure
                key={q.name}
                className="flex h-full flex-col justify-between gap-6 bg-white p-7 sm:gap-8 sm:p-9"
              >
                <blockquote className="text-[15px] leading-relaxed text-foreground">
                  <span className="font-serif text-[28px] leading-none text-zinc-300">“</span>
                  {q.quote}
                </blockquote>
                <figcaption>
                  <div className="text-[13.5px] font-medium text-foreground">
                    {q.name}
                  </div>
                  <div className="text-[12.5px] text-zinc-500">{q.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBanner
        eyebrow="Become an early customer"
        title={
          <>
            Run your agency the way{" "}
            <span className="serif-italic text-zinc-500">these teams do.</span>
          </>
        }
      />
    </>
  );
}
