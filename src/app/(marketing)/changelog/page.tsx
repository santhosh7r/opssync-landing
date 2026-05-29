import type { Metadata } from "next";
import { Sparkles } from "lucide-react";

import { Container, Section } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { CtaBanner } from "@/components/shared/cta-banner";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Every OpsSync release. New things ship every Friday.",
};

type Tag = "new" | "improved" | "fixed";
const TAG: Record<Tag, string> = {
  new: "border-forest-100 bg-forest-50 text-forest-700",
  improved: "border-zinc-200 bg-zinc-50 text-zinc-600",
  fixed: "border-zinc-200 bg-white text-zinc-500",
};

const RELEASES: {
  version: string;
  date: string;
  title: string;
  body: string;
  changes: { tag: Tag; text: string }[];
  highlight?: boolean;
}[] = [
  {
    version: "v0.42",
    date: "This Friday",
    title: "Client portals · approvals",
    body: "Clients can now approve deliverables directly from their portal. Approvals are logged to the audit trail and link back to the parent task.",
    changes: [
      { tag: "new", text: "Portal approvals with audit trail" },
      { tag: "new", text: "One-click sign-off on files" },
      { tag: "improved", text: "Portal load time reduced by 38%" },
    ],
    highlight: true,
  },
  {
    version: "v0.41",
    date: "Last Friday",
    title: "Margin per project widget",
    body: "Real-time margin per project, surfaced as a dashboard widget. Pulls from logged time + finance ledger automatically.",
    changes: [
      { tag: "new", text: "Margin widget on overview dashboard" },
      { tag: "improved", text: "Faster time-entry sync from Toggl" },
      { tag: "fixed", text: "Invoice timezone bug for IST customers" },
    ],
  },
  {
    version: "v0.40",
    date: "May 17",
    title: "Stripe sync · auto-reconcile",
    body: "Stripe payouts now auto-reconcile against open invoices, with smart matching on amount + memo + client.",
    changes: [
      { tag: "new", text: "Stripe auto-reconcile" },
      { tag: "new", text: "Bulk-mark-paid action on invoices" },
      { tag: "improved", text: "Currency formatting now locale-aware" },
    ],
  },
  {
    version: "v0.39",
    date: "May 10",
    title: "Slack thread → task",
    body: "Convert any Slack message into an OpsSync task with one emoji. Context is preserved end-to-end.",
    changes: [
      { tag: "new", text: "Slack emoji → task action" },
      { tag: "improved", text: "Daily digest cadence configurable per workspace" },
    ],
  },
  {
    version: "v0.38",
    date: "May 03",
    title: "Workflow automation · v1",
    body: "Triggers, conditions, and actions across every entity in OpsSync. No code required.",
    changes: [
      { tag: "new", text: "Workflow automation engine" },
      { tag: "new", text: "9 pre-built recipe templates" },
      { tag: "improved", text: "Activity feed now supports filtering" },
    ],
  },
  {
    version: "v0.37",
    date: "Apr 26",
    title: "Performance pass",
    body: "Workspace load times cut roughly in half. Larger dashboards (50+ widgets) now render under 800ms.",
    changes: [
      { tag: "improved", text: "Workspace TTI down 47%" },
      { tag: "fixed", text: "Drag-and-drop edge case on board view" },
    ],
  },
];

export default function ChangelogPage() {
  return (
    <>
      <PageHero
        label="Changelog"
        number="01"
        title={
          <>
            New things,{" "}
            <span className="serif-italic text-zinc-500">every Friday.</span>
          </>
        }
        description="Every OpsSync release, with the why behind it. Subscribe to get the highlights in your inbox."
        meta={
          <a
            href="mailto:hello@opssync.app?subject=Subscribe%20to%20changelog"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 text-[13px] font-medium text-foreground transition-colors hover:border-zinc-300"
          >
            <Sparkles className="size-3.5 text-forest-700" />
            Subscribe via email
          </a>
        }
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Sticky timeline on the left */}
            <aside className="lg:col-span-3">
              <div className="sticky top-24">
                <div className="text-[11.5px] font-medium uppercase tracking-[0.16em] text-zinc-500">
                  All releases
                </div>
                <ul className="mt-5 space-y-2.5 border-l border-zinc-200 pl-4">
                  {RELEASES.map((r) => (
                    <li key={r.version}>
                      <a
                        href={`#${r.version}`}
                        className="flex items-baseline gap-2 text-[13px] text-zinc-500 transition-colors hover:text-forest-700"
                      >
                        <span className="font-mono text-[11.5px]">{r.version}</span>
                        <span className="truncate">{r.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="lg:col-span-9">
              <ul className="flex flex-col gap-16 sm:gap-20">
                {RELEASES.map((r) => (
                  <li key={r.version} id={r.version} className="scroll-mt-28">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <span className="font-mono text-[12px] text-zinc-400">
                        {r.version}
                      </span>
                      <span className="text-[12px] text-zinc-500">{r.date}</span>
                      {r.highlight && (
                        <span className="rounded-full border border-forest-100 bg-forest-50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em] text-forest-700">
                          Up next
                        </span>
                      )}
                    </div>
                    <h2 className="mt-3 text-[28px] font-medium leading-snug tracking-[-0.015em] text-foreground sm:text-[32px]">
                      {r.title}
                    </h2>
                    <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-zinc-500">
                      {r.body}
                    </p>
                    <ul className="mt-7 flex flex-col gap-2.5">
                      {r.changes.map((c, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-[13.5px] text-foreground"
                        >
                          <span
                            className={cn(
                              "inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em]",
                              TAG[c.tag]
                            )}
                          >
                            {c.tag}
                          </span>
                          {c.text}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBanner
        eyebrow="Continuously updated"
        title={
          <>
            Your subscription{" "}
            <span className="serif-italic text-zinc-500">keeps getting better.</span>
          </>
        }
      />
    </>
  );
}
