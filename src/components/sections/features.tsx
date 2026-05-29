"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  CheckCircle2,
  CircleDollarSign,
  FileSignature,
  KanbanSquare,
  Lock,
  RefreshCw,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

import { Container, Section } from "@/components/shared/container";
import { cn } from "@/lib/utils";

export function Features() {
  return (
    <Section
      id="features"
      className="relative isolate overflow-hidden bg-[#06140C] text-white"
    >
      {/* Subtle grid + radial halo backgrounds */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[820px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(31,110,74,0.35), transparent 60%)",
          filter: "blur(40px)",
        }}
      />

      <Container>
        <DarkLabel number="02">Specialised for agencies</DarkLabel>
        <h2 className="mt-7 max-w-3xl text-balance text-[34px] font-medium leading-[1.04] tracking-[-0.025em] text-white sm:text-[46px] lg:text-[56px]">
          Built for agencies.{" "}
          <span className="serif-italic text-white/55">Not generic SaaS.</span>
        </h2>
        <p className="mt-6 max-w-xl text-pretty text-[16px] leading-relaxed text-white/60 sm:text-[17px]">
          OpsSync isn&apos;t a CRM with a project board bolted on. It&apos;s an
          operating system designed end-to-end for how modern agencies run
          client engagements.
        </p>

        {/* Bento grid */}
        <div className="mt-14 grid grid-cols-1 gap-3 sm:mt-20 sm:grid-cols-2 sm:gap-4 lg:grid-cols-6">
          <Card
            className="lg:col-span-4"
            icon={Users}
            badge="The differentiator"
            title="Client portals"
            body="Every client gets their own branded, secure portal. Real-time status, file approvals, sign-offs, and updates — without the email chains."
          >
            <ClientPortalVisual />
          </Card>

          <Card
            className="lg:col-span-2"
            icon={Lock}
            title="Bank-grade security"
            body="AES-256 at rest, TLS 1.3 in flight, SOC 2-aligned, RBAC + audit log."
          >
            <SecurityVisual />
          </Card>

          <Card
            className="lg:col-span-2"
            icon={RefreshCw}
            badge="Ships every Friday"
            title="Continuously updated"
            body="Your feature requests become roadmap items. New things ship every week."
          >
            <ChangelogVisual />
          </Card>

          <Card
            className="lg:col-span-2"
            icon={KanbanSquare}
            title="Project management"
            body="Boards, timelines, briefs. Every task tied to a client, a deliverable, and a number."
          >
            <KanbanVisual />
          </Card>

          <Card
            className="lg:col-span-2"
            icon={CircleDollarSign}
            title="Finance & retainers"
            body="Invoices, retainers, expenses, margin per project — synced to the work."
          >
            <FinanceVisual />
          </Card>

          <Card
            className="lg:col-span-2"
            icon={FileSignature}
            title="SOWs & contracts"
            body="Reusable scopes, embedded e-sign, change orders that don't slip."
          >
            <SOWVisual />
          </Card>

          <Card
            className="lg:col-span-2"
            icon={BarChart3}
            title="Analytics"
            body="Real-time signal across delivery, margin, and team health."
          >
            <AnalyticsVisual />
          </Card>

          <Card
            className="lg:col-span-6"
            icon={Workflow}
            title="Workflow automation"
            body="Automate the operational glue — status pings, invoice reminders, onboarding loops — without writing a line of code."
            horizontal
          >
            <AutomationVisual />
          </Card>
        </div>

        {/* Footer caption */}
        <div className="mt-12 flex items-center gap-3 text-[12.5px] text-white/55 sm:mt-16">
          <Sparkles className="size-3.5 text-forest-400" />
          <span>
            Eight modules, one workspace. Pick the ones you need —{" "}
            <a
              href="/features"
              className="text-white underline-offset-4 transition-colors hover:text-forest-300 hover:underline"
            >
              see every feature →
            </a>
          </span>
        </div>
      </Container>
    </Section>
  );
}

/* ---------- Card shell ---------- */

function DarkLabel({
  number,
  children,
}: {
  number?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 text-[11.5px] font-medium uppercase tracking-[0.18em] text-white/55">
      {number && <span className="font-mono text-white/35">{number}</span>}
      <span className="h-px w-5 bg-white/15" />
      <span className="size-1.5 rounded-full bg-forest-400 shadow-[0_0_10px_2px_rgba(63,141,103,0.5)]" aria-hidden />
      <span>{children}</span>
    </div>
  );
}

function Card({
  icon: Icon,
  title,
  body,
  badge,
  className,
  horizontal = false,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
  badge?: string;
  className?: string;
  horizontal?: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] backdrop-blur-sm transition-all duration-300",
        "before:pointer-events-none before:absolute before:inset-x-6 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/15 before:to-transparent",
        "hover:border-forest-500/40 hover:bg-white/[0.04]",
        horizontal && "lg:flex-row-reverse",
        className
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-2.5 p-6 sm:p-7",
          horizontal && "lg:w-2/5 lg:justify-center lg:p-9"
        )}
      >
        <div className="flex items-center gap-2.5">
          <span className="grid size-7 place-items-center rounded-lg border border-forest-500/30 bg-forest-500/10 text-forest-300">
            <Icon className="size-3.5" />
          </span>
          <h3 className="text-[16px] font-semibold tracking-[-0.005em] text-white">
            {title}
          </h3>
          {badge && (
            <span className="ml-auto rounded-full border border-forest-400/30 bg-forest-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em] text-forest-300">
              {badge}
            </span>
          )}
        </div>
        <p className="max-w-md text-[13.5px] leading-relaxed text-white/55">
          {body}
        </p>
      </div>
      <div
        className={cn(
          "relative flex-1 border-t border-white/[0.06] bg-black/30 p-5 sm:p-6",
          horizontal && "lg:w-3/5 lg:border-l lg:border-t-0"
        )}
      >
        {children}
      </div>
    </motion.article>
  );
}

/* ---------- Visuals ---------- */

function ClientPortalVisual() {
  return (
    <div className="grid h-56 grid-cols-2 gap-2">
      {/* Internal admin view */}
      <div className="overflow-hidden rounded-lg border border-white/[0.07] bg-white/[0.025] p-2.5">
        <div className="mb-2 flex items-center justify-between text-[10px] text-white/45">
          <span className="font-medium uppercase tracking-wider">Internal</span>
          <span className="rounded bg-white/[0.06] px-1.5 py-px font-mono text-[9px] text-white/70">
            Admin
          </span>
        </div>
        <div className="space-y-1.5">
          {[
            { t: "Northwind · Phase 2", m: "Margin 42% · On track" },
            { t: "Halo · Brand v2", m: "PM owns · due Thu" },
            { t: "Loop · Q2 dashboard", m: "Eng · 12h left" },
            { t: "Citrus · Onboarding", m: "Strategy · review" },
          ].map((r) => (
            <div
              key={r.t}
              className="rounded border border-white/[0.06] bg-white/[0.02] p-1.5"
            >
              <div className="text-[10.5px] font-medium text-white">{r.t}</div>
              <div className="mt-0.5 text-[9.5px] text-white/45">{r.m}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Client portal view */}
      <div className="relative overflow-hidden rounded-lg border border-forest-500/30 bg-forest-700/[0.12] p-2.5">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-forest-400/40 to-transparent"
        />
        <div className="mb-2 flex items-center justify-between text-[10px] text-forest-300">
          <span className="font-medium uppercase tracking-wider">Client portal</span>
          <span className="rounded bg-forest-500/15 px-1.5 py-px font-mono text-[9px] text-forest-200 ring-1 ring-inset ring-forest-400/30">
            Northwind
          </span>
        </div>
        <div className="space-y-1.5">
          {[
            { t: "Phase 2 · 68% complete", s: "On track" },
            { t: "Brand v2 needs approval", s: "Tap to review" },
            { t: "3 new files shared", s: "Today" },
            { t: "Next milestone · Tue", s: "Launch assets" },
          ].map((r) => (
            <div
              key={r.t}
              className="rounded border border-forest-500/20 bg-white/[0.04] p-1.5"
            >
              <div className="text-[10.5px] font-medium text-white">{r.t}</div>
              <div className="mt-0.5 text-[9.5px] text-forest-300">{r.s}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SecurityVisual() {
  return (
    <div className="grid h-56 grid-cols-2 gap-2">
      {[
        { k: "AES-256", v: "At rest" },
        { k: "TLS 1.3", v: "In flight" },
        { k: "SOC 2", v: "Aligned" },
        { k: "RBAC", v: "+ Audit log" },
      ].map((b) => (
        <div
          key={b.k}
          className="relative flex flex-col justify-between overflow-hidden rounded-lg border border-white/[0.07] bg-white/[0.025] p-3"
        >
          <div className="flex items-center gap-1.5">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-forest-400 opacity-50" />
              <span className="relative inline-flex size-1.5 rounded-full bg-forest-400" />
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-white/50">
              Encrypted
            </span>
          </div>
          <div>
            <div className="font-mono text-[15px] font-medium tracking-tight text-white">
              {b.k}
            </div>
            <div className="text-[10.5px] text-white/50">{b.v}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ChangelogVisual() {
  const items = [
    { v: "v0.42", t: "Client portal · approvals", next: true },
    { v: "v0.41", t: "Margin per project widget" },
    { v: "v0.40", t: "Stripe auto-reconcile" },
    { v: "v0.39", t: "Slack thread → task" },
  ];
  return (
    <div className="flex h-56 flex-col gap-1.5">
      {items.map((it) => (
        <div
          key={it.v}
          className={cn(
            "flex items-center gap-2.5 rounded border px-2.5 py-2 text-[11px] transition-colors",
            it.next
              ? "border-forest-500/30 bg-forest-700/[0.15] text-white"
              : "border-white/[0.06] bg-white/[0.025] text-white/70"
          )}
        >
          <span
            className={cn(
              "font-mono text-[10px]",
              it.next ? "text-forest-300" : "text-white/40"
            )}
          >
            {it.v}
          </span>
          <span className="truncate font-medium">{it.t}</span>
          {it.next && (
            <span className="ml-auto inline-flex items-center gap-1 rounded-full border border-forest-400/30 bg-forest-500/15 px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wider text-forest-300">
              <span className="size-1 rounded-full bg-forest-400" />
              Next
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function KanbanVisual() {
  const cols = [
    { t: "Todo", n: 5, items: ["Brand v2", "Launch reel"] },
    { t: "Doing", n: 3, items: ["Homepage"] },
    { t: "Done", n: 9, items: ["Onboarding"] },
  ];
  return (
    <div className="grid h-56 grid-cols-3 gap-1.5">
      {cols.map((c) => (
        <div
          key={c.t}
          className="flex flex-col gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.02] p-1.5"
        >
          <div className="flex items-center gap-1.5 px-1 text-[10px] font-medium text-white/80">
            <span className="size-1 rounded-full bg-forest-400" />
            {c.t}
            <span className="ml-auto font-mono text-white/35">{c.n}</span>
          </div>
          {c.items.map((it) => (
            <div
              key={it}
              className="rounded border border-white/[0.06] bg-white/[0.03] p-1.5 text-[10px] font-medium text-white"
            >
              {it}
              <div className="mt-1 h-1 w-1/2 rounded-full bg-white/10" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function FinanceVisual() {
  const bars = [38, 52, 48, 65, 74, 88];
  const max = Math.max(...bars);
  return (
    <div className="flex h-56 flex-col justify-between rounded-lg border border-white/[0.06] bg-white/[0.025] p-3">
      <div>
        <div className="text-[10.5px] uppercase tracking-wider text-white/50">MRR</div>
        <div className="mt-0.5 flex items-baseline gap-1.5">
          <span className="font-mono text-[20px] font-medium tracking-tight text-white">
            ₹14.8L
          </span>
          <span className="text-[10.5px] text-forest-300">+12.4%</span>
        </div>
      </div>
      <div className="flex h-24 items-end gap-1.5">
        {bars.map((v, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.04 }}
            style={{
              height: `${(v / max) * 100}%`,
              transformOrigin: "bottom",
            }}
            className="flex-1 rounded-t-sm bg-gradient-to-t from-forest-600 to-forest-300"
          />
        ))}
      </div>
    </div>
  );
}

function SOWVisual() {
  return (
    <div className="flex h-56 flex-col justify-between rounded-lg border border-white/[0.06] bg-white/[0.025] p-3 text-[11px]">
      <div>
        <div className="flex items-center justify-between">
          <span className="font-medium text-white">SOW · Northwind</span>
          <span className="inline-flex items-center gap-1 rounded border border-forest-400/30 bg-forest-500/15 px-1.5 py-px text-[10px] font-medium text-forest-300">
            <CheckCircle2 className="size-2.5" />
            Signed
          </span>
        </div>
        <div className="mt-3 space-y-1.5 text-white/55">
          {[
            ["Phase 1 · Strategy", "₹3.2L"],
            ["Phase 2 · Identity", "₹4.6L"],
            ["Phase 3 · Launch", "₹2.0L"],
          ].map(([k, v]) => (
            <div key={k} className="flex items-center justify-between">
              <span>{k}</span>
              <span className="font-mono text-white">{v}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-white/[0.07] pt-2 text-white">
        <span className="font-medium">Total</span>
        <span className="font-mono">₹9.8L</span>
      </div>
    </div>
  );
}

function AnalyticsVisual() {
  return (
    <div className="grid h-56 grid-cols-2 gap-1.5">
      {[
        { k: "Margin", v: "42%", d: "+3.1%", spark: [4, 5, 5, 7, 8, 9] },
        { k: "Cycle", v: "3.2d", d: "−18%", spark: [9, 8, 7, 6, 5, 4] },
        { k: "NPS", v: "72", d: "+4", spark: [6, 7, 7, 8, 8, 9] },
        { k: "Util", v: "86%", d: "Healthy", spark: [7, 7, 8, 8, 9, 9] },
      ].map((s) => (
        <div
          key={s.k}
          className="flex flex-col justify-between rounded-lg border border-white/[0.06] bg-white/[0.025] p-2.5"
        >
          <div>
            <div className="text-[9.5px] uppercase tracking-wider text-white/50">{s.k}</div>
            <div className="mt-0.5 font-mono text-[14px] font-medium text-white">{s.v}</div>
          </div>
          <div className="flex items-end justify-between gap-1">
            <span className="text-[10px] text-forest-300">{s.d}</span>
            <Sparkline data={s.spark} />
          </div>
        </div>
      ))}
    </div>
  );
}

function Sparkline({ data }: { data: number[] }) {
  const w = 38;
  const h = 14;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const step = w / (data.length - 1);
  const points = data
    .map((v, i) => `${(i * step).toFixed(1)},${(h - ((v - min) / range) * h).toFixed(1)}`)
    .join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <polyline
        points={points}
        fill="none"
        strokeWidth="1.3"
        strokeLinecap="round"
        className="stroke-forest-400"
      />
    </svg>
  );
}

function AutomationVisual() {
  const steps = [
    { label: "Invoice overdue", sub: "Trigger" },
    { label: "Wait 2 days", sub: "Delay" },
    { label: "Notify lead", sub: "Slack" },
    { label: "Send reminder", sub: "Email" },
  ];
  return (
    <div className="relative flex h-56 flex-col items-stretch justify-center gap-3 sm:h-auto lg:h-full">
      {steps.map((s, i) => (
        <div key={s.label} className="relative">
          <div className="flex items-center gap-3 rounded-lg border border-white/[0.07] bg-white/[0.025] px-3.5 py-2.5">
            <span className="grid size-6 place-items-center rounded-md bg-forest-500/20 text-[10px] font-medium text-forest-300 ring-1 ring-inset ring-forest-400/30">
              {i + 1}
            </span>
            <div className="min-w-0 flex-1">
              <div className="truncate text-[12.5px] font-medium text-white">
                {s.label}
              </div>
              <div className="truncate text-[10px] text-white/45">{s.sub}</div>
            </div>
            <span className="text-[10px] text-white/35">·</span>
          </div>
          {i < steps.length - 1 && (
            <div
              aria-hidden
              className="absolute left-[26px] top-full h-3 w-px bg-gradient-to-b from-forest-500/50 to-forest-500/0"
            />
          )}
        </div>
      ))}
    </div>
  );
}
