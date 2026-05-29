"use client";

import { motion } from "framer-motion";
import { Container, Section, SectionHeading } from "@/components/shared/container";

const TESTIMONIALS = [
  {
    quote:
      "We replaced six tools the week we onboarded. Renewals now surface before they're overdue.",
    name: "Aarav Bhatia",
    role: "Founder, Northwind Studio",
  },
  {
    quote:
      "The first project tool that didn't add another meeting. PMs stopped pinging engineers for status.",
    name: "Riya Mehta",
    role: "Head of Ops, Halo Studio",
  },
  {
    quote:
      "I can answer 'what's our margin on Northwind' in four seconds. That used to take a week.",
    name: "Daniel Verma",
    role: "Managing Partner, Loop Labs",
  },
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
];

export function Testimonials() {
  return (
    <Section id="testimonials">
      <Container>
        <SectionHeading
          label="Operators"
          number="07"
          title={
            <>
              Loved by the founders{" "}
              <span className="serif-italic text-zinc-500">building with it.</span>
            </>
          }
          description="A small group of design-first agencies have been running early access."
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.04 }}
              className="flex h-full flex-col justify-between gap-6 bg-white p-7 sm:gap-8 sm:p-9 lg:p-10"
            >
              <blockquote className="text-pretty text-[16px] leading-relaxed text-foreground">
                <span className="font-serif text-[28px] leading-none text-zinc-300">“</span>
                {t.quote}
              </blockquote>
              <figcaption>
                <div className="text-[13.5px] font-medium text-foreground">{t.name}</div>
                <div className="text-[12.5px] text-zinc-500">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
