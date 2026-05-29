"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";

import { Container, Section, SectionHeading } from "@/components/shared/container";

const OUTCOMES = [
  { title: "Reduce operational chaos", body: "One place for tasks, briefs, clients, and finance." },
  { title: "Improve accountability", body: "Every task carries an owner, a deadline, and a dollar value." },
  { title: "Save management time", body: "Status meetings collapse into a live dashboard." },
  { title: "Revenue visibility", body: "Retainers and forecasts sync to the work — not a spreadsheet." },
  { title: "Centralize workflows", body: "Every repeatable motion runs from the same place." },
  { title: "Scale without breaking", body: "Add clients without adding chaos." },
];

const STATS = [
  { value: 12, suffix: "hrs", label: "Saved per manager / week", sub: "Avg across early-access agencies" },
  { value: 38, suffix: "%", label: "Productivity improvement", sub: "Measured 60 days after rollout" },
  { value: 3.4, suffix: "×", label: "More efficient workflows", sub: "Vs. their previous stack" },
];

export function ROI() {
  return (
    <Section id="roi" className="border-y border-zinc-200">
      <Container>
        <SectionHeading
          label="Outcomes"
          number="04"
          title={
            <>
              Operational clarity.{" "}
              <span className="serif-italic text-zinc-500">Compounding growth.</span>
            </>
          }
          description="Agencies that switch to OpsSync stop fighting their tools and start compounding their operations."
        />

        <div className="mt-14 grid grid-cols-1 gap-y-8 gap-x-12 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {OUTCOMES.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.04 }}
              className="border-t border-zinc-200 pt-5"
            >
              <h3 className="text-[15.5px] font-semibold tracking-[-0.005em] text-foreground">
                {o.title}
              </h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-zinc-500">{o.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:mt-24 sm:grid-cols-3">
          {STATS.map((s, i) => (
            <StatBlock key={s.label} {...s} delay={i * 0.08} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function StatBlock({
  value,
  suffix,
  label,
  sub,
  delay = 0,
}: {
  value: number;
  suffix: string;
  label: string;
  sub: string;
  delay?: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    const duration = 1100;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(value * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  const formatted =
    value % 1 === 0 ? Math.round(display).toString() : display.toFixed(1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className="bg-white p-7 sm:p-9 lg:p-10"
    >
      <div className="flex items-baseline gap-1">
        <span className="font-serif text-[54px] font-normal leading-none tracking-[-0.02em] text-forest-700 sm:text-[64px] lg:text-[72px]">
          {formatted}
        </span>
        <span className="font-serif text-2xl text-forest-600/70">{suffix}</span>
      </div>
      <div className="mt-4 text-[14px] font-medium text-foreground">{label}</div>
      <div className="mt-1 text-[12.5px] text-zinc-500">{sub}</div>
    </motion.div>
  );
}
