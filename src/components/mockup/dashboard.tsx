"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bell,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  Command,
  FolderKanban,
  GaugeCircle,
  Inbox,
  LayoutDashboard,
  Plus,
  Search,
  Settings,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

import { cn } from "@/lib/utils";

type Variant = "hero" | "full";

const SIDEBAR_PRIMARY = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Inbox", icon: Inbox, badge: "12" },
  { label: "Projects", icon: FolderKanban },
  { label: "Clients", icon: Users },
  { label: "Finance", icon: CircleDollarSign },
  { label: "Workflows", icon: Workflow },
  { label: "Reports", icon: GaugeCircle },
];

const SIDEBAR_SECONDARY = [
  { label: "Team", icon: Briefcase },
  { label: "Calendar", icon: CalendarDays },
  { label: "Settings", icon: Settings },
];

const TASKS = {
  inProgress: [
    { title: "Brand identity v2 — Northwind", tag: "Design", due: "Today", owner: "AB" },
    { title: "Retainer renewal proposal", tag: "Finance", due: "Tue", owner: "JR" },
    { title: "Launch motion teaser", tag: "Motion", due: "Wed", owner: "MK" },
  ],
  review: [
    { title: "Homepage redesign — Loop Labs", tag: "Web", due: "Thu", owner: "SP" },
    { title: "Q2 performance dashboard", tag: "Ops", due: "Fri", owner: "DV" },
  ],
  done: [{ title: "Onboarding flow — Halo Studio", tag: "UX", owner: "AB" }],
} as const;

const ACTIVITY = [
  { who: "Riya Mehta", action: "moved", target: "Q2 dashboard", detail: "to Review", time: "2m" },
  { who: "Daniel V.", action: "approved invoice", target: "#INV-2049", detail: "₹84,500", time: "12m" },
  { who: "Aarav B.", action: "shipped", target: "Northwind brand v2", detail: "to production", time: "1h" },
  { who: "OpsSync", action: "flagged", target: "Halo retainer", detail: "renewing in 6 days", time: "3h", ai: true },
];

const PIPELINE = [
  { name: "Loop Labs", stage: "Discovery", value: "₹2.4L" },
  { name: "Northwind", stage: "Proposal", value: "₹6.8L" },
  { name: "Halo Studio", stage: "Negotiation", value: "₹4.1L" },
  { name: "Citrus Co.", stage: "Onboarding", value: "₹3.2L" },
];

export function DashboardMockup({
  variant = "hero",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative isolate w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white",
        "shadow-[0_1px_2px_rgba(0,0,0,0.04),0_24px_60px_-32px_rgba(0,0,0,0.18)]",
        className
      )}
    >
      {/* Window chrome */}
      <div className="flex items-center justify-between gap-2 border-b border-zinc-200 bg-zinc-50/60 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-zinc-200" />
          <span className="size-2.5 rounded-full bg-zinc-200" />
          <span className="size-2.5 rounded-full bg-zinc-200" />
        </div>
        <div className="hidden flex-1 items-center justify-center sm:flex">
          <div className="flex h-7 max-w-[380px] flex-1 items-center gap-2 rounded-md border border-zinc-200 bg-white px-2.5 text-[11px] text-zinc-500">
            <Command className="size-3" />
            <span>opssync.app · workspace · acme-agency</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="hidden h-6 items-center gap-1 rounded-md border border-zinc-200 bg-white px-2 text-[10px] font-medium uppercase tracking-wider text-zinc-500 sm:inline-flex">
            <span className="size-1 rounded-full bg-forest-700" /> Live
          </span>
          <span className="size-6 rounded-full bg-zinc-200" />
        </div>
      </div>

      <div className="grid grid-cols-12">
        {/* Sidebar */}
        <aside className="col-span-3 hidden border-r border-zinc-200 bg-zinc-50/50 p-3 md:block lg:col-span-2">
          <div className="mb-3 flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-2 py-1.5 text-[11.5px]">
            <span className="grid size-5 place-items-center rounded bg-foreground text-[10px] font-semibold text-background">
              A
            </span>
            <span className="truncate text-foreground">Acme Agency</span>
          </div>

          <div className="mb-2 flex h-7 items-center gap-2 rounded-md border border-zinc-200 bg-white px-2 text-[11px] text-zinc-500">
            <Search className="size-3" /> Search
            <kbd className="ml-auto rounded border border-zinc-200 bg-zinc-50 px-1 font-mono text-[10px] text-zinc-500">
              ⌘K
            </kbd>
          </div>

          <nav className="mt-3 flex flex-col gap-0.5">
            {SIDEBAR_PRIMARY.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </nav>

          <div className="mt-4 px-2 text-[10px] font-medium uppercase tracking-wider text-zinc-400">
            Workspace
          </div>
          <nav className="mt-2 flex flex-col gap-0.5">
            {SIDEBAR_SECONDARY.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </nav>
        </aside>

        {/* Main */}
        <main className="col-span-12 md:col-span-9 lg:col-span-10">
          <TopBar />
          <div className="grid gap-4 p-4 sm:p-5 grid-cols-12">
            <StatCard
              className="col-span-12 sm:col-span-6 lg:col-span-3"
              label="Active projects"
              value="28"
              delta="+4"
              tone="up"
              spark={[6, 8, 7, 10, 9, 12, 14, 13, 16]}
            />
            <StatCard
              className="col-span-12 sm:col-span-6 lg:col-span-3"
              label="MRR"
              value="₹14.8L"
              delta="+12.4%"
              tone="up"
              spark={[3, 4, 5, 5, 7, 8, 9, 11, 13]}
            />
            <StatCard
              className="col-span-12 sm:col-span-6 lg:col-span-3"
              label="Outstanding"
              value="₹3.2L"
              delta="−18%"
              tone="down"
              spark={[12, 10, 11, 9, 8, 7, 6, 5, 4]}
            />
            <StatCard
              className="col-span-12 sm:col-span-6 lg:col-span-3"
              label="Utilization"
              value="86%"
              delta="Healthy"
              tone="up"
              spark={[7, 8, 9, 8, 9, 10, 9, 11, 10]}
            />

            <div className="col-span-12 lg:col-span-8">
              <Card>
                <CardHeader
                  title="Project board · Northwind relaunch"
                  subtitle="14 tasks · 3 in review"
                  right={
                    <div className="flex items-center gap-1.5">
                      <Pill>This week</Pill>
                      <span className="grid size-6 place-items-center rounded-md border border-zinc-200 bg-white text-zinc-500">
                        <Plus className="size-3" />
                      </span>
                    </div>
                  }
                />
                <div className="grid grid-cols-1 gap-3 p-3 pt-2 sm:grid-cols-3">
                  <Column title="In progress" count={3}>
                    {TASKS.inProgress.map((t) => (
                      <TaskCard key={t.title} {...t} />
                    ))}
                  </Column>
                  <Column title="Review" count={2}>
                    {TASKS.review.map((t) => (
                      <TaskCard key={t.title} {...t} />
                    ))}
                  </Column>
                  <Column title="Done" count={1}>
                    {TASKS.done.map((t) => (
                      <TaskCard key={t.title} {...t} />
                    ))}
                    <DoneSummary />
                  </Column>
                </div>
              </Card>
            </div>

            <div className="col-span-12 lg:col-span-4">
              <Card>
                <CardHeader title="Activity" subtitle="Live workspace events" />
                <ul className="divide-y divide-zinc-200">
                  {ACTIVITY.map((a) => (
                    <li
                      key={a.target + a.time}
                      className="flex items-start gap-3 px-4 py-3"
                    >
                      <span
                        className={cn(
                          "mt-0.5 grid size-7 shrink-0 place-items-center rounded-full text-[11px] font-medium",
                          a.ai
                            ? "bg-foreground text-background"
                            : "bg-zinc-100 text-zinc-600"
                        )}
                      >
                        {a.ai ? <Sparkles className="size-3.5" /> : a.who.slice(0, 1)}
                      </span>
                      <div className="min-w-0 flex-1 text-[12.5px] leading-relaxed">
                        <span className="font-medium text-foreground">{a.who}</span>{" "}
                        <span className="text-zinc-500">{a.action}</span>{" "}
                        <span className="font-medium text-foreground">{a.target}</span>{" "}
                        <span className="text-zinc-500">{a.detail}</span>
                      </div>
                      <span className="shrink-0 font-mono text-[10.5px] text-zinc-400">
                        {a.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {variant === "full" && (
              <>
                <div className="col-span-12 lg:col-span-7">
                  <Card>
                    <CardHeader
                      title="Revenue"
                      subtitle="Last 30 days"
                      right={
                        <div className="flex items-center gap-1">
                          <Pill>30d</Pill>
                          <Pill active>MRR</Pill>
                        </div>
                      }
                    />
                    <div className="p-4 pt-2">
                      <RevenueChart />
                      <div className="mt-3 grid grid-cols-3 gap-3">
                        <MiniStat label="Collected" value="₹11.4L" delta="+18%" tone="up" />
                        <MiniStat label="Outstanding" value="₹3.2L" delta="−12%" tone="down" />
                        <MiniStat label="Forecast" value="₹14.8L" delta="+9%" tone="up" />
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="col-span-12 lg:col-span-5">
                  <Card>
                    <CardHeader title="Client pipeline" subtitle="Weighted ₹16.5L" right={<Pill>4 deals</Pill>} />
                    <ul className="divide-y divide-zinc-200">
                      {PIPELINE.map((p) => (
                        <li key={p.name} className="flex items-center gap-3 px-4 py-3 text-[12.5px]">
                          <span className="size-1.5 rounded-full bg-foreground" />
                          <span className="font-medium text-foreground">{p.name}</span>
                          <span className="text-zinc-400">·</span>
                          <span className="text-zinc-500">{p.stage}</span>
                          <span className="ml-auto font-mono text-foreground">{p.value}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>

                <div className="col-span-12 lg:col-span-7">
                  <Card>
                    <CardHeader title="Invoices" subtitle="Last 7 days" right={<Pill>Stripe</Pill>} />
                    <InvoiceTable />
                  </Card>
                </div>

                <div className="col-span-12 lg:col-span-5">
                  <Card>
                    <CardHeader title="Team workload" subtitle="This week" />
                    <ul className="divide-y divide-zinc-200">
                      {[
                        { name: "Aarav B.", role: "Design Lead", pct: 92 },
                        { name: "Riya M.", role: "Project Mgr", pct: 78 },
                        { name: "Daniel V.", role: "Operations", pct: 64 },
                        { name: "Sanya P.", role: "Web Eng", pct: 88 },
                        { name: "Marcus K.", role: "Motion", pct: 41 },
                      ].map((m) => (
                        <li key={m.name} className="flex items-center gap-3 px-4 py-3 text-[12.5px]">
                          <span className="grid size-7 place-items-center rounded-full bg-zinc-100 text-[10px] font-medium text-zinc-700">
                            {m.name.split(" ").map((p) => p[0]).join("")}
                          </span>
                          <div className="min-w-0">
                            <div className="truncate font-medium text-foreground">{m.name}</div>
                            <div className="truncate text-[11px] text-zinc-500">{m.role}</div>
                          </div>
                          <div className="ml-auto flex w-28 items-center gap-2">
                            <div className="h-1 flex-1 overflow-hidden rounded-full bg-zinc-100">
                              <div className="h-full rounded-full bg-foreground" style={{ width: `${m.pct}%` }} />
                            </div>
                            <span className="w-9 text-right font-mono text-[10.5px] text-zinc-500">{m.pct}%</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

/* ---------- subcomponents ---------- */

function SidebarItem({
  label,
  icon: Icon,
  active,
  badge,
}: {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  active?: boolean;
  badge?: string;
}) {
  return (
    <a
      className={cn(
        "group flex items-center gap-2 rounded-md px-2 py-1.5 text-[12.5px] transition-colors",
        active
          ? "bg-white text-foreground shadow-[0_1px_0_rgba(0,0,0,0.04)] ring-1 ring-inset ring-zinc-200"
          : "text-zinc-600 hover:bg-white"
      )}
    >
      <Icon className="size-3.5" />
      <span className="truncate">{label}</span>
      {badge && (
        <span className="ml-auto rounded-md bg-zinc-100 px-1.5 font-mono text-[10px] text-zinc-500">
          {badge}
        </span>
      )}
    </a>
  );
}

function TopBar() {
  return (
    <div className="flex items-center justify-between gap-2 border-b border-zinc-200 px-4 py-3 sm:px-5">
      <div className="flex items-center gap-2">
        <span className="text-[10.5px] font-medium uppercase tracking-wider text-zinc-400">
          Overview
        </span>
        <span className="text-zinc-300">/</span>
        <span className="text-[13px] font-medium text-foreground">Acme Agency</span>
        <span className="ml-1 inline-flex items-center gap-1 rounded-md border border-forest-100 bg-forest-50 px-1.5 py-px text-[10px] font-medium text-forest-700">
          <span className="size-1 rounded-full bg-forest-700" /> On track
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="hidden h-7 items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-2 text-[11px] text-zinc-500 sm:inline-flex">
          <Sparkles className="size-3" /> Ask OpsSync
        </span>
        <span className="grid size-7 place-items-center rounded-md border border-zinc-200 bg-white text-zinc-500">
          <Bell className="size-3.5" />
        </span>
      </div>
    </div>
  );
}

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-[0_1px_1px_rgba(0,0,0,0.02)]",
        className
      )}
    >
      {children}
    </div>
  );
}

function CardHeader({
  title,
  subtitle,
  right,
}: {
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-3 border-b border-zinc-200 px-4 py-3">
      <div className="min-w-0">
        <div className="truncate text-[13px] font-semibold tracking-[-0.005em] text-foreground">
          {title}
        </div>
        {subtitle && <div className="truncate text-[11.5px] text-zinc-500">{subtitle}</div>}
      </div>
      {right && <div className="shrink-0">{right}</div>}
    </div>
  );
}

function Pill({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex h-6 items-center rounded-md border px-2 text-[11px]",
        active
          ? "border-foreground bg-foreground text-background"
          : "border-zinc-200 bg-white text-zinc-500"
      )}
    >
      {children}
    </span>
  );
}

function StatCard({
  label,
  value,
  delta,
  tone,
  spark,
  className,
}: {
  label: string;
  value: string;
  delta: string;
  tone: "up" | "down";
  spark: number[];
  className?: string;
}) {
  return (
    <div className={cn("rounded-xl border border-zinc-200 bg-white p-4", className)}>
      <div className="flex items-center justify-between text-[11.5px] text-zinc-500">
        <span>{label}</span>
        <ArrowUpRight
          className={cn("size-3.5", tone === "up" ? "text-foreground" : "text-zinc-400 rotate-90")}
        />
      </div>
      <div className="mt-2 flex items-end justify-between gap-2">
        <div>
          <div className="font-mono text-xl font-medium tracking-tight text-foreground">{value}</div>
          <div className={cn("text-[11px]", tone === "up" ? "text-forest-700" : "text-zinc-500")}>
            {delta}
          </div>
        </div>
        <Sparkline data={spark} />
      </div>
    </div>
  );
}

function Sparkline({ data }: { data: number[] }) {
  const w = 78;
  const h = 28;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const step = w / (data.length - 1);
  const points = data
    .map((v, i) => {
      const x = i * step;
      const y = h - ((v - min) / range) * h;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <polyline
        points={points}
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-zinc-800"
      />
    </svg>
  );
}

function Column({
  title,
  count,
  children,
}: {
  title: string;
  count: number;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-w-0 flex-col gap-2 rounded-lg border border-zinc-200 bg-zinc-50/60 p-2">
      <div className="flex items-center justify-between px-1.5">
        <div className="flex items-center gap-1.5 text-[11px] font-medium text-foreground">
          <span className="size-1.5 rounded-full bg-foreground" />
          {title}
          <span className="font-mono text-zinc-400">{count}</span>
        </div>
        <Plus className="size-3 text-zinc-400" />
      </div>
      <div className="flex flex-col gap-1.5">{children}</div>
    </div>
  );
}

function TaskCard({
  title,
  tag,
  due,
  owner,
}: {
  title: string;
  tag: string;
  due?: string;
  owner: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="rounded-md border border-zinc-200 bg-white p-2.5"
    >
      <div className="line-clamp-2 text-[12px] font-medium text-foreground">{title}</div>
      <div className="mt-2 flex items-center gap-1.5">
        <span className="inline-flex items-center rounded border border-zinc-200 bg-zinc-50 px-1.5 py-px text-[10px] font-medium text-zinc-600">
          {tag}
        </span>
        {due && <span className="text-[10.5px] text-zinc-500">{due}</span>}
        <span className="ml-auto grid size-5 place-items-center rounded-full bg-zinc-100 text-[9.5px] font-semibold text-zinc-700">
          {owner}
        </span>
      </div>
    </motion.div>
  );
}

function DoneSummary() {
  return (
    <div className="rounded-md border border-dashed border-zinc-200 p-2.5 text-[11px] text-zinc-500">
      <div className="flex items-center gap-1.5">
        <CheckCircle2 className="size-3.5 text-foreground" />
        12 tasks shipped this sprint
      </div>
      <div className="mt-1 text-[10.5px]">Avg cycle 3.2d · −18% vs last</div>
    </div>
  );
}

function RevenueChart() {
  const bars = [42, 38, 55, 49, 60, 58, 71, 64, 78, 74, 86, 92];
  const max = Math.max(...bars);
  return (
    <div className="relative h-32 w-full">
      <div className="absolute inset-0 flex flex-col justify-between">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-px w-full bg-zinc-100" />
        ))}
      </div>
      <div className="absolute inset-0 flex items-end gap-1.5">
        {bars.map((v, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.03 }}
            style={{ height: `${(v / max) * 100}%`, transformOrigin: "bottom" }}
            className="flex-1 rounded-t-sm bg-foreground"
          />
        ))}
      </div>
    </div>
  );
}

function MiniStat({
  label,
  value,
  delta,
  tone,
}: {
  label: string;
  value: string;
  delta: string;
  tone: "up" | "down";
}) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-2.5">
      <div className="text-[10.5px] uppercase tracking-wider text-zinc-500">{label}</div>
      <div className="mt-1 flex items-baseline gap-1.5">
        <span className="font-mono text-[13px] font-medium text-foreground">{value}</span>
        <span className={cn("text-[10.5px]", tone === "up" ? "text-forest-700" : "text-zinc-500")}>
          {delta}
        </span>
      </div>
    </div>
  );
}

function InvoiceTable() {
  const rows = [
    { id: "INV-2049", client: "Northwind", amount: "₹84,500", status: "Paid", date: "Mar 12" },
    { id: "INV-2048", client: "Halo Studio", amount: "₹1,24,000", status: "Overdue", date: "Mar 10" },
    { id: "INV-2047", client: "Loop Labs", amount: "₹56,200", status: "Sent", date: "Mar 09" },
    { id: "INV-2046", client: "Citrus Co.", amount: "₹38,750", status: "Paid", date: "Mar 07" },
  ];
  const status: Record<string, string> = {
    Paid: "border-forest-100 bg-forest-50 text-forest-700",
    Overdue: "border-zinc-300 bg-zinc-100 text-zinc-700",
    Sent: "border-zinc-200 bg-white text-zinc-600",
  };
  return (
    <div className="overflow-hidden">
      <div className="grid grid-cols-12 gap-2 border-b border-zinc-200 px-4 py-2 text-[10.5px] font-medium uppercase tracking-wider text-zinc-500">
        <div className="col-span-3">Invoice</div>
        <div className="col-span-4">Client</div>
        <div className="col-span-2 text-right">Amount</div>
        <div className="col-span-2">Status</div>
        <div className="col-span-1 text-right">Date</div>
      </div>
      <ul className="divide-y divide-zinc-200">
        {rows.map((r) => (
          <li key={r.id} className="grid grid-cols-12 items-center gap-2 px-4 py-2.5 text-[12.5px]">
            <div className="col-span-3 font-mono text-foreground">{r.id}</div>
            <div className="col-span-4 text-foreground">{r.client}</div>
            <div className="col-span-2 text-right font-mono text-foreground">{r.amount}</div>
            <div className="col-span-2">
              <span className={cn("inline-flex items-center rounded border px-1.5 py-px text-[10.5px] font-medium", status[r.status])}>
                {r.status}
              </span>
            </div>
            <div className="col-span-1 text-right text-zinc-500">{r.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
