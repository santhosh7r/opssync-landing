import type { Metadata } from "next";
import {
  ArrowUpRight,
  CheckCircle2,
  Database,
  FileSearch,
  Fingerprint,
  KeyRound,
  Lock,
  ScrollText,
  ShieldCheck,
} from "lucide-react";

import { Container, Section, SectionLabel } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { CtaBanner } from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "Security",
  description:
    "How OpsSync protects your data. Encryption, access controls, audit logs, and our approach to client trust.",
};

const PILLARS = [
  {
    icon: Lock,
    title: "Encrypted, end-to-end",
    body: "AES-256 at rest, TLS 1.3 in flight. Every byte is encrypted before it touches disk and stays encrypted throughout its lifecycle.",
  },
  {
    icon: ShieldCheck,
    title: "SOC 2-aligned infrastructure",
    body: "Hosted on SOC 2 Type II infrastructure with daily backups, point-in-time recovery, and 99.95% uptime SLA on Scale.",
  },
  {
    icon: KeyRound,
    title: "Role-based access control",
    body: "Granular RBAC across workspaces, projects, and clients. Least-privilege by default — admins explicitly grant access.",
  },
  {
    icon: FileSearch,
    title: "Immutable audit log",
    body: "Every action — every view, edit, export, sign-in — is logged immutably. Available via UI or API on Growth and Scale.",
  },
  {
    icon: Fingerprint,
    title: "SSO & SAML",
    body: "Single sign-on via Google, Microsoft, or any SAML 2.0 IdP. SCIM provisioning available on the Scale plan.",
  },
  {
    icon: Database,
    title: "Data residency",
    body: "Choose between India (BLR), Europe (FRA), or US-East (IAD) regions for your workspace data. Configurable per workspace.",
  },
];

const PRACTICES: { k: string; v: string }[] = [
  { k: "Backups", v: "Daily encrypted snapshots, 30-day retention, cross-region replication." },
  { k: "Disaster recovery", v: "RPO < 15 minutes. RTO < 1 hour. Tested quarterly." },
  { k: "Penetration testing", v: "Annual external pen-test by a CERT-In empanelled firm." },
  { k: "Bug bounty", v: "Private program with responsible disclosure. security@opssync.app." },
  { k: "Sub-processors", v: "Public list at /security/subprocessors, updated when a vendor changes." },
  { k: "GDPR & DPDP", v: "Standard contractual clauses, DPA on request, India DPDP compliant." },
];

const DATA_RIGHTS = [
  "Export your data as CSV, JSON, or PDF at any time.",
  "Delete your account and we permanently erase data within 30 days.",
  "We never train on your data, ever — your data is yours.",
  "Our staff cannot access workspace contents without your explicit consent.",
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        label="Security"
        number="01"
        title={
          <>
            Your client data{" "}
            <span className="serif-italic text-zinc-500">is sacred.</span>
          </>
        }
        description="OpsSync was built secure-by-default. Encryption, access controls, audit trails, and clear data rights — not premium add-ons, but how the product is built."
        meta={
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-forest-100 bg-forest-50 px-3 py-1 text-[12px] font-medium text-forest-700">
              <Lock className="size-3" />
              AES-256 · TLS 1.3
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-forest-100 bg-forest-50 px-3 py-1 text-[12px] font-medium text-forest-700">
              <ShieldCheck className="size-3" />
              SOC 2-aligned
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-forest-100 bg-forest-50 px-3 py-1 text-[12px] font-medium text-forest-700">
              <FileSearch className="size-3" />
              Audit log on every plan
            </span>
          </div>
        }
      />

      {/* Pillars */}
      <Section>
        <Container>
          <SectionLabel number="02">How we protect your data</SectionLabel>
          <h2 className="mt-6 max-w-2xl text-balance text-[34px] font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[42px]">
            Six pillars.{" "}
            <span className="serif-italic text-zinc-500">Zero compromises.</span>
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p) => (
              <div key={p.title} className="bg-white p-7 sm:p-8">
                <span className="grid size-10 place-items-center rounded-lg border border-forest-100 bg-forest-50 text-forest-700">
                  <p.icon className="size-4" />
                </span>
                <h3 className="mt-5 text-[16px] font-semibold tracking-[-0.005em] text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-zinc-500">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Practices */}
      <Section className="border-t border-zinc-200 bg-zinc-50/60">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionLabel number="03">Operational practices</SectionLabel>
              <h2 className="mt-6 text-balance text-[32px] font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[40px]">
                The unglamorous part.{" "}
                <span className="serif-italic text-zinc-500">Done seriously.</span>
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-zinc-500">
                Backups, recovery, pen-testing — the work that doesn&apos;t
                show up in a feature list, but is the reason your data is safe.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
                {PRACTICES.map((p) => (
                  <li
                    key={p.k}
                    className="grid grid-cols-12 gap-4 border-b border-zinc-200 px-6 py-5 last:border-b-0 sm:px-8"
                  >
                    <div className="col-span-12 sm:col-span-4">
                      <div className="text-[13.5px] font-medium text-foreground">
                        {p.k}
                      </div>
                    </div>
                    <div className="col-span-12 sm:col-span-8">
                      <div className="text-[13.5px] leading-relaxed text-zinc-500">
                        {p.v}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Data rights */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionLabel number="04">Your data rights</SectionLabel>
              <h2 className="mt-6 text-balance text-[32px] font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[40px]">
                Your data{" "}
                <span className="serif-italic text-zinc-500">stays yours.</span>
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-zinc-500">
                We don&apos;t sell it. We don&apos;t train on it. We can&apos;t
                even see it without your consent.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="space-y-3">
                {DATA_RIGHTS.map((r) => (
                  <li
                    key={r}
                    className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-white p-5 text-[14.5px] text-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-forest-700" strokeWidth={2} />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Report a vuln */}
      <Section className="border-t border-zinc-200">
        <Container>
          <div className="rounded-2xl border border-zinc-200 bg-foreground p-8 text-background sm:p-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-background/15 bg-background/10 px-3 py-1 text-[11.5px] font-medium uppercase tracking-[0.14em] text-background/80">
                  <ScrollText className="size-3" />
                  Bug bounty
                </div>
                <h2 className="mt-5 max-w-2xl text-balance text-[28px] font-medium leading-[1.1] tracking-[-0.015em] text-background sm:text-[36px]">
                  Found something?{" "}
                  <span className="serif-italic text-background/70">We pay for it.</span>
                </h2>
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-background/70">
                  Private responsible-disclosure program for security
                  researchers. Reports acknowledged within 24 hours; payouts up
                  to ₹5L for critical findings.
                </p>
              </div>
              <div className="flex flex-col gap-2 lg:col-span-4 lg:items-end">
                <a
                  href="mailto:security@opssync.app"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-background px-5 text-[14px] font-medium text-foreground transition-colors hover:bg-background/90"
                >
                  security@opssync.app
                  <ArrowUpRight className="size-3.5" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-[12.5px] text-background/70 transition-colors hover:text-background"
                >
                  PGP key · download
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBanner
        eyebrow="Security questions?"
        title={
          <>
            Talk to us.{" "}
            <span className="serif-italic text-zinc-500">We answer them all.</span>
          </>
        }
        primary={{ label: "Join the waitlist", href: "/#waitlist" }}
        secondary={{ label: "Contact security", href: "mailto:security@opssync.app" }}
      />
    </>
  );
}
