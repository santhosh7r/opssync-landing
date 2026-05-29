"use client";

import { motion } from "framer-motion";

import { Container, Section, SectionHeading } from "@/components/shared/container";
import { cn } from "@/lib/utils";

const ITEMS = [
  { status: "shipped", quarter: "Q1", title: "Core workspace", body: "Projects, tasks, clients, briefs, activity." },
  { status: "shipped", quarter: "Q1", title: "Finance v1", body: "Invoices, retainers, expenses, and ledger sync." },
  { status: "in-progress", quarter: "Q2", title: "Workflow automation", body: "Triggers, conditions, and no-code recipes." },
  { status: "in-progress", quarter: "Q2", title: "Client portals", body: "Branded portals for approvals, files, and status." },
  { status: "planned", quarter: "Q3", title: "OpsSync AI", body: "Ambient assistant for summaries and nudges." },
  { status: "planned", quarter: "Q4", title: "Public API + SDK", body: "Webhooks, REST API, typed SDK." },
] as const;

const meta: Record<string, { label: string; chip: string }> = {
  shipped: {
    label: "Shipped",
    chip: "border-forest-100 bg-forest-50 text-forest-700",
  },
  "in-progress": {
    label: "In progress",
    chip: "border-zinc-300 bg-foreground text-background",
  },
  planned: {
    label: "Planned",
    chip: "border-zinc-200 bg-white text-zinc-500",
  },
};

export function Roadmap() {
  return (
    <Section id="roadmap" className="bg-zinc-50/60">
      <Container>
        <SectionHeading
          label="Roadmap"
          number="06"
          title={
            <>
              Built in public.{" "}
              <span className="serif-italic text-zinc-500">Shipped every week.</span>
            </>
          }
          description="A snapshot of what we've shipped and what we're building next."
        />

        <div className="mt-14 overflow-hidden rounded-2xl border border-zinc-200 bg-white sm:mt-20">
          <ul className="divide-y divide-zinc-200">
            {ITEMS.map((it, i) => {
              const m = meta[it.status];
              return (
                <motion.li
                  key={it.title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.04 }}
                  className="grid grid-cols-12 items-baseline gap-x-4 gap-y-3 px-5 py-5 sm:px-10 sm:py-6"
                >
                  <span className="col-span-2 font-mono text-[11px] text-zinc-400 sm:col-span-1">
                    {it.quarter}
                  </span>
                  <div className="col-span-10 sm:col-span-7">
                    <h3 className="text-[18px] font-medium tracking-[-0.01em] text-foreground">
                      {it.title}
                    </h3>
                    <p className="mt-1 text-[14px] text-zinc-500">{it.body}</p>
                  </div>
                  <div className="col-span-12 sm:col-span-4 sm:justify-self-end">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider",
                        m.chip
                      )}
                    >
                      {m.label}
                    </span>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
