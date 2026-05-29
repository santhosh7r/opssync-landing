import type { Metadata } from "next";
import {
  ArrowUpRight,
  Building2,
  Github,
  Linkedin,
  Mail,
  MessageSquareDot,
  Sparkles,
  Twitter,
} from "lucide-react";

import { Container, Section, SectionLabel } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { CtaBanner } from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to OpsSync. Sales, partnerships, support, security — a human reads every message.",
};

const CONTACTS = [
  {
    label: "Sales & demos",
    email: "sales@opssync.app",
    body: "Book a guided walkthrough, ask about Scale, or get a custom quote.",
    icon: Sparkles,
  },
  {
    label: "Support",
    email: "support@opssync.app",
    body: "Already using OpsSync? Founders and engineers handle every reply.",
    icon: MessageSquareDot,
  },
  {
    label: "Security",
    email: "security@opssync.app",
    body: "Reports, audits, and questions about our infrastructure.",
    icon: Building2,
  },
  {
    label: "Press & partnerships",
    email: "hello@opssync.app",
    body: "Story angles, agency partnerships, and integration requests.",
    icon: Mail,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        number="01"
        title={
          <>
            Talk to us.{" "}
            <span className="serif-italic text-zinc-500">A human will reply.</span>
          </>
        }
        description="Founders and engineers handle every inbound. Median reply time is under 24 hours, often inside two."
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Left — contact options */}
            <div className="lg:col-span-7">
              <SectionLabel number="02">Reach the right person</SectionLabel>
              <h2 className="mt-6 text-[28px] font-medium leading-[1.1] tracking-[-0.015em] text-foreground sm:text-[34px]">
                Four inboxes, one team.
              </h2>

              <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:grid-cols-2">
                {CONTACTS.map((c) => (
                  <a
                    key={c.label}
                    href={`mailto:${c.email}`}
                    className="group flex flex-col gap-3 bg-white p-7 transition-colors hover:bg-zinc-50/60"
                  >
                    <span className="grid size-9 place-items-center rounded-lg border border-forest-100 bg-forest-50 text-forest-700">
                      <c.icon className="size-4" />
                    </span>
                    <div>
                      <div className="text-[15px] font-semibold tracking-[-0.005em] text-foreground">
                        {c.label}
                      </div>
                      <div className="mt-1 text-[13px] leading-relaxed text-zinc-500">
                        {c.body}
                      </div>
                    </div>
                    <div className="mt-3 inline-flex items-center gap-1 text-[12.5px] font-medium text-foreground transition-colors group-hover:text-forest-700">
                      {c.email}
                      <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </a>
                ))}
              </div>

              {/* Office */}
              <div className="mt-12 grid grid-cols-1 gap-6 rounded-2xl border border-zinc-200 bg-white p-7 sm:grid-cols-2 sm:p-9">
                <div>
                  <div className="text-[11.5px] font-medium uppercase tracking-[0.16em] text-zinc-500">
                    Office
                  </div>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-foreground">
                    Indiranagar
                    <br />
                    Bengaluru, 560038
                    <br />
                    India
                  </p>
                </div>
                <div>
                  <div className="text-[11.5px] font-medium uppercase tracking-[0.16em] text-zinc-500">
                    Hours
                  </div>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-foreground">
                    Mon–Fri · 09:00–19:00 IST
                    <br />
                    Saturdays for live demos by appointment
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-2">
                {[
                  { icon: Twitter, href: "https://twitter.com/opssyncapp", label: "Twitter" },
                  { icon: Linkedin, href: "https://linkedin.com/company/opssync", label: "LinkedIn" },
                  { icon: Github, href: "https://github.com/opssync", label: "GitHub" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="inline-flex h-9 items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 text-[12.5px] font-medium text-foreground transition-colors hover:border-forest-200 hover:text-forest-700"
                  >
                    <s.icon className="size-3.5" />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right — quick form */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_24px_64px_-32px_rgba(0,0,0,0.18)] sm:p-9 lg:sticky lg:top-24">
                <div className="flex items-center justify-between">
                  <h3 className="text-[15px] font-semibold tracking-[-0.005em] text-foreground">
                    Send us a note
                  </h3>
                  <span className="inline-flex items-center gap-1 rounded-full border border-forest-100 bg-forest-50 px-2 py-0.5 text-[10.5px] font-medium text-forest-700">
                    Replies in 24h
                  </span>
                </div>

                <form
                  action="mailto:hello@opssync.app"
                  method="POST"
                  encType="text/plain"
                  className="mt-6 flex flex-col gap-5"
                >
                  <Field label="Your name" name="name" placeholder="Jane Doe" />
                  <Field label="Email" name="email" type="email" placeholder="you@agency.com" />
                  <Field label="Company" name="company" placeholder="Your agency" />
                  <div className="flex flex-col">
                    <label
                      htmlFor="message"
                      className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-zinc-500"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="A sentence or two is plenty."
                      className="mt-1 w-full border-0 border-b border-zinc-200 bg-transparent px-0 py-2 text-[14.5px] text-foreground transition-colors placeholder:text-zinc-400 focus:border-foreground focus:outline-none focus:ring-0"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-2 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground text-[14px] font-medium text-background transition-colors hover:bg-foreground/90"
                  >
                    Send message
                  </button>
                  <p className="text-center text-[11px] text-zinc-500">
                    Opens your email client · we read every reply
                  </p>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBanner
        eyebrow="Or just join early"
        title={
          <>
            Get on the waitlist{" "}
            <span className="serif-italic text-zinc-500">while we&apos;re still in beta.</span>
          </>
        }
      />
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-zinc-500"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-1 w-full border-0 border-b border-zinc-200 bg-transparent px-0 py-2 text-[14.5px] text-foreground transition-colors placeholder:text-zinc-400 focus:border-foreground focus:outline-none focus:ring-0"
      />
    </div>
  );
}
