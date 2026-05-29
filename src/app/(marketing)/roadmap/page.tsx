import type { Metadata } from "next";
import { CheckCircle2, CircleDashed, CircleDot, MessageSquareDot } from "lucide-react";

import { Container, Section, SectionLabel } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { CtaBanner } from "@/components/shared/cta-banner";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "What we've shipped, what we're building, and what's next. Updated every Friday.",
};

type Status = "shipped" | "in-progress" | "next" | "planned";

const meta: Record<Status, { label: string; chip: string; icon: typeof CheckCircle2 }> = {
  shipped: { label: "Shipped", chip: "border-forest-100 bg-forest-50 text-forest-700", icon: CheckCircle2 },
  "in-progress": { label: "In progress", chip: "border-zinc-300 bg-foreground text-background", icon: CircleDot },
  next: { label: "Up next", chip: "border-zinc-200 bg-white text-foreground", icon: CircleDot },
  planned: { label: "Planned", chip: "border-zinc-200 bg-zinc-50 text-zinc-500", icon: CircleDashed },
};

const ROADMAP: { quarter: string; items: { status: Status; title: string; body: string }[] }[] = [
  {
    quarter: "Q1 · Shipped",
    items: [
      { status: "shipped", title: "Core workspace", body: "Projects, tasks, clients, briefs, activity layer." },
      { status: "shipped", title: "Finance v1", body: "Invoices, retainers, expenses, and ledger sync." },
      { status: "shipped", title: "Boards & timeline", body: "Kanban, list, and Gantt-style timeline views." },
      { status: "shipped", title: "Slack & Google integrations", body: "Native two-way sync with both surfaces." },
    ],
  },
  {
    quarter: "Q2 · In progress",
    items: [
      { status: "in-progress", title: "Client portals", body: "Branded portals with approvals, files, and live project status." },
      { status: "in-progress", title: "Workflow automation", body: "Triggers, conditions, and no-code recipes across every entity." },
      { status: "next", title: "Real-time margin per project", body: "Bridges finance and delivery — see project profitability live." },
      { status: "next", title: "Notion / Linear sync", body: "Two-way sync for briefs, tasks, and changelog." },
    ],
  },
  {
    quarter: "Q3 · Planned",
    items: [
      { status: "planned", title: "OpsSync AI", body: "Ambient assistant for summaries, status, and operational nudges." },
      { status: "planned", title: "Resource forecasting", body: "Predict capacity 4–12 weeks ahead based on pipeline weight." },
      { status: "planned", title: "Mobile (iOS + Android)", body: "Read + write on the move. Focused on inbox & approvals." },
    ],
  },
  {
    quarter: "Q4 · Planned",
    items: [
      { status: "planned", title: "Public API + SDK", body: "Webhooks, REST API, and a typed SDK for custom integrations." },
      { status: "planned", title: "Marketplace", body: "Templates, automations, and playbooks from operators." },
    ],
  },
];

export default function RoadmapPage() {
  return (
    <>
      <PageHero
        label="Roadmap"
        number="01"
        title={
          <>
            Built in public.{" "}
            <span className="serif-italic text-zinc-500">Shipped every Friday.</span>
          </>
        }
        description="What we've shipped, what we're building, and what's next. Customer-voted, founder-owned, updated weekly."
        meta={
          <a
            href="/contact"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-forest-100 bg-forest-50 px-4 text-[13px] font-medium text-forest-700 transition-colors hover:border-forest-200"
          >
            <MessageSquareDot className="size-3.5" />
            Suggest a feature
          </a>
        }
      />

      <Section>
        <Container>
          <div className="flex flex-col gap-16 sm:gap-20">
            {ROADMAP.map((q, qi) => (
              <div key={q.quarter}>
                <SectionLabel number={`0${qi + 1}`}>{q.quarter}</SectionLabel>
                <ul className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white">
                  {q.items.map((it) => {
                    const m = meta[it.status];
                    const Icon = m.icon;
                    return (
                      <li
                        key={it.title}
                        className="grid grid-cols-12 items-start gap-x-4 gap-y-3 border-b border-zinc-200 px-6 py-6 last:border-b-0 sm:px-10"
                      >
                        <div className="col-span-12 sm:col-span-7">
                          <h3 className="text-[18px] font-medium leading-snug tracking-[-0.01em] text-foreground">
                            {it.title}
                          </h3>
                          <p className="mt-1 max-w-md text-[14px] leading-relaxed text-zinc-500">
                            {it.body}
                          </p>
                        </div>
                        <div className="col-span-12 sm:col-span-5 sm:justify-self-end">
                          <span
                            className={cn(
                              "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.08em]",
                              m.chip
                            )}
                          >
                            <Icon className="size-3" />
                            {m.label}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBanner
        eyebrow="Built with operators"
        title={
          <>
            Your feature requests{" "}
            <span className="serif-italic text-zinc-500">shape the roadmap.</span>
          </>
        }
        primary={{ label: "Join the waitlist", href: "/#waitlist" }}
        secondary={{ label: "Suggest a feature", href: "/contact" }}
      />
    </>
  );
}
