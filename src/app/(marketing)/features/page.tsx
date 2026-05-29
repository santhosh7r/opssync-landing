import type { Metadata } from "next";
import {
  BarChart3,
  CircleDollarSign,
  FileSignature,
  KanbanSquare,
  Lock,
  RefreshCw,
  Users,
  Workflow,
} from "lucide-react";

import { Container, Section } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { CtaBanner } from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Client portals, project management, finance, SOWs, security, and workflow automation — built specifically for agencies.",
};

const FEATURES = [
  {
    icon: Users,
    title: "Client portals",
    body: "Every client gets a branded, secure portal of their own. Real-time project status, file approvals, sign-offs, and updates — without the email chains. Your clients see exactly what you want them to see, when you want them to see it.",
    points: [
      "Branded subdomains and theming",
      "Approvals & file requests",
      "Activity-feed style updates",
      "Per-client roles & permissions",
    ],
    featured: true,
  },
  {
    icon: Lock,
    title: "Bank-grade security",
    body: "Built secure-by-default. AES-256 encryption at rest, TLS 1.3 in flight, SOC 2-aligned infrastructure, role-based access controls, and a full audit trail of every action across your workspace.",
    points: [
      "AES-256 at rest, TLS 1.3 in flight",
      "SOC 2-aligned, daily backups",
      "RBAC + immutable audit log",
      "SSO / SAML on Scale plan",
    ],
    featured: true,
  },
  {
    icon: RefreshCw,
    title: "Continuously updated",
    body: "We're not the agency tool that went on autopilot. New things ship every Friday. Your feature requests don't disappear into a black hole — they become roadmap items. Your subscription keeps getting better, every month, forever.",
    points: [
      "Weekly releases, public changelog",
      "Customer-voted roadmap",
      "Founders read every reply",
      "Public Discord with the team",
    ],
    featured: true,
  },
  {
    icon: KanbanSquare,
    title: "Project management",
    body: "Boards, timelines, briefs, dependencies. Every task carries an owner, a deadline, and a dollar value — so drift becomes visible the moment it starts. Built for the way agency work actually moves.",
    points: ["Boards, lists, timeline views", "Briefs linked to tasks", "Dependencies & blockers", "Time tracking inline"],
  },
  {
    icon: CircleDollarSign,
    title: "Finance & retainers",
    body: "Invoices, retainers, expenses, and forecasts in one place. Real-time margin per project. Sync with Stripe, QuickBooks, or Zoho — no more reconciling spreadsheets.",
    points: ["Retainer auto-renewal alerts", "Real-time margin per project", "Stripe / QuickBooks / Zoho sync", "Forecasting + collection aging"],
  },
  {
    icon: FileSignature,
    title: "SOWs & contracts",
    body: "Reusable scope templates with e-sign. Change orders that don't slip through the cracks. SOWs link directly to project phases, so when scope changes — the work, the budget, and the timeline update together.",
    points: ["Reusable scope templates", "Embedded e-signature", "Phase-linked deliverables", "Change-order tracking"],
  },
  {
    icon: BarChart3,
    title: "Analytics",
    body: "Real-time signal across delivery, margin, and team health. Not a BI tool — opinionated views for the questions agency leaders actually ask.",
    points: ["Project margin trends", "Utilization & capacity", "Cycle time per task type", "Client NPS pulse"],
  },
  {
    icon: Workflow,
    title: "Workflow automation",
    body: "Automate the operational glue — status pings, invoice reminders, kickoff checklists, onboarding loops — without writing a line of code.",
    points: ["No-code recipe builder", "Triggers across every entity", "Slack & email actions", "Conditional branching"],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        label="Features"
        number="01"
        title={
          <>
            Every part of your agency.{" "}
            <span className="serif-italic text-zinc-500">One workspace.</span>
          </>
        }
        description="A focused, opinionated toolkit — designed for client-shaped work, not generic project management."
      />

      <Section>
        <Container>
          <div className="flex flex-col gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200">
            {FEATURES.map((f) => (
              <FeatureRow key={f.title} {...f} />
            ))}
          </div>
        </Container>
      </Section>

      <CtaBanner
        eyebrow="Built for agencies"
        title={
          <>
            Stop wiring together a dozen tools.{" "}
            <span className="serif-italic text-zinc-500">Run on one.</span>
          </>
        }
      />
    </>
  );
}

function FeatureRow({
  icon: Icon,
  title,
  body,
  points,
  featured,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
  points: string[];
  featured?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 gap-x-12 gap-y-6 bg-white p-8 sm:p-10 lg:grid-cols-12 lg:gap-x-16 lg:p-12">
      <div className="lg:col-span-5">
        <div className="flex items-center gap-2.5">
          <span
            className={
              featured
                ? "grid size-9 place-items-center rounded-lg border border-forest-100 bg-forest-50 text-forest-700"
                : "grid size-9 place-items-center rounded-lg border border-zinc-200 bg-zinc-50 text-foreground"
            }
          >
            <Icon className="size-4" />
          </span>
          <h2 className="text-[22px] font-medium tracking-[-0.015em] text-foreground sm:text-[26px]">
            {title}
          </h2>
          {featured && (
            <span className="ml-auto rounded-full border border-forest-100 bg-forest-50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em] text-forest-700">
              Differentiator
            </span>
          )}
        </div>
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-zinc-500">
          {body}
        </p>
      </div>
      <div className="lg:col-span-7">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {points.map((p) => (
            <li
              key={p}
              className="flex items-start gap-2.5 rounded-xl border border-zinc-200 bg-white p-4 text-[13.5px] text-foreground"
            >
              <span className="mt-1 size-1.5 shrink-0 rounded-full bg-forest-700" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
