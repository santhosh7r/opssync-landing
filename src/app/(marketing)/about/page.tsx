import type { Metadata } from "next";
import Image from "next/image";

import { Container, Section, SectionLabel } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { CtaBanner } from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "About",
  description:
    "OpsSync is the operating system for modern agencies — built by operators, for operators.",
};

const VALUES = [
  {
    n: "01",
    k: "Built for one thing, well",
    v: "We're not building a generic productivity app. Every decision is filtered through one question: does this make running an agency easier?",
  },
  {
    n: "02",
    k: "Security is a feature, not a footnote",
    v: "Client data is sacred. Encryption, RBAC, and audit trails are not premium add-ons — they're how the product is built.",
  },
  {
    n: "03",
    k: "Ship every Friday, forever",
    v: "Software that stops shipping is software that's slowly dying. We ship every week — your subscription keeps getting better.",
  },
  {
    n: "04",
    k: "Operators read every reply",
    v: "Founders and engineers handle support. If you write to us, someone who can change the product is reading.",
  },
];

const PRINCIPLES = [
  "We don't ship features we wouldn't use.",
  "Defaults beat configuration.",
  "If it's not in the audit log, it didn't happen.",
  "Pricing should be obvious. So should cancellation.",
  "Clients are users too — not an afterthought.",
];

const TEAM = [
  { name: "Santhosh", role: "Founder & Design", grad: "from-zinc-200 to-zinc-300" },
  { name: "A. Bhatia", role: "Founding Engineer", grad: "from-zinc-300 to-zinc-200" },
  { name: "R. Mehta", role: "Operations", grad: "from-zinc-200 to-zinc-300" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        number="01"
        title={
          <>
            We&apos;re building the tool{" "}
            <span className="serif-italic text-zinc-500">we wish we&apos;d had.</span>
          </>
        }
        description="OpsSync started as an internal stack at a small agency that grew faster than the tools could keep up. We rebuilt it for everyone."
      />

      {/* Story */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionLabel number="02">Our story</SectionLabel>
              <h2 className="mt-6 text-balance text-[34px] font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[42px]">
                From an internal tool{" "}
                <span className="serif-italic text-zinc-500">to a category.</span>
              </h2>
            </div>
            <div className="space-y-5 text-[15.5px] leading-relaxed text-zinc-600 lg:col-span-7">
              <p>
                In 2022, our team was running a fifteen-person design agency on
                a stack of nine apps. Briefs in Notion, tasks in Linear, deals
                in HubSpot, invoices in Zoho, time in Toggl, files in Drive,
                meetings in Calendly, chat in Slack, finance in a Google Sheet.
              </p>
              <p>
                Each tool was good. Together, they were a tax on focus. Every
                week was the same conversation: <span className="text-foreground">where does this live, who&apos;s owning this, what&apos;s the status, did the client see it.</span>
              </p>
              <p>
                We tried every &ldquo;all-in-one&rdquo; agency platform on the
                market. The good ones were generic; the agency-specific ones
                were either built in 2014 or hadn&apos;t shipped a meaningful
                update in over a year. None had a real client portal. None
                treated security like adults.
              </p>
              <p>
                So we built our own. Quietly. Just for us. Then we started
                showing it to peers, and the same question kept coming back:
                when can I use this?
              </p>
              <p className="text-foreground">
                OpsSync is the answer.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section className="border-t border-zinc-200 bg-zinc-50/60">
        <Container>
          <SectionLabel number="03">What we believe</SectionLabel>
          <h2 className="mt-6 max-w-3xl text-balance text-[34px] font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[42px]">
            Four things we&apos;re not negotiating on.
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-y-10 gap-x-12 sm:grid-cols-2 lg:gap-x-20">
            {VALUES.map((v) => (
              <article key={v.k} className="border-t border-zinc-200 pt-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[11px] text-zinc-400">{v.n}</span>
                  <h3 className="text-[20px] font-medium tracking-[-0.015em] text-foreground">
                    {v.k}
                  </h3>
                </div>
                <p className="mt-3 max-w-md pl-9 text-[15px] leading-relaxed text-zinc-500">
                  {v.v}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Principles */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionLabel number="04">Operating principles</SectionLabel>
              <h2 className="mt-6 text-balance text-[34px] font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[42px]">
                Small rules we live by.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <ul className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
                {PRINCIPLES.map((p, i) => (
                  <li
                    key={p}
                    className="flex items-center gap-4 border-b border-zinc-200 px-6 py-5 last:border-b-0 sm:px-8"
                  >
                    <span className="font-mono text-[11px] text-zinc-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15.5px] font-medium text-foreground">
                      {p}
                    </span>
                    <span className="ml-auto size-1.5 rounded-full bg-forest-700" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Team */}
      <Section className="border-t border-zinc-200 bg-zinc-50/60">
        <Container>
          <SectionLabel number="05">The team</SectionLabel>
          <h2 className="mt-6 max-w-3xl text-balance text-[34px] font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[42px]">
            Small team. <span className="serif-italic text-zinc-500">High standards.</span>
          </h2>
          <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-zinc-500">
            A focused group of operators, designers, and engineers who&apos;ve
            run, scaled, and sold agencies before. We answer our own support.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:grid-cols-3">
            {TEAM.map((m) => (
              <div key={m.name} className="bg-white p-8">
                <div className="flex items-center gap-3">
                  <div
                    className={`size-10 rounded-full bg-gradient-to-br ${m.grad}`}
                  />
                  <div>
                    <div className="text-[15px] font-medium text-foreground">
                      {m.name}
                    </div>
                    <div className="text-[12.5px] text-zinc-500">{m.role}</div>
                  </div>
                </div>
                <p className="mt-6 text-[13.5px] leading-relaxed text-zinc-500">
                  Previously building, running, and operating creative shops
                  across India, EU, and the US.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-3">
            <Image
              src="/opssync-mark.svg"
              alt=""
              width={32}
              height={32}
              className="rounded-[26%]"
            />
            <p className="text-[13px] text-zinc-500">
              Headquartered in Bengaluru, India. Remote-first across IST, GMT,
              and PST.
            </p>
          </div>
        </Container>
      </Section>

      <CtaBanner
        eyebrow="Join us early"
        title={
          <>
            Help us shape the tool you wish you&apos;d had.
          </>
        }
      />
    </>
  );
}
