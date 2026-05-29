"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DashboardMockup } from "@/components/mockup/dashboard";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.06 * i },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-28 sm:pt-36 lg:pt-44"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-grid opacity-60 radial-fade-top"
      />

      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <motion.a
            href="#waitlist"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white py-1 pl-2.5 pr-3 text-[11.5px] font-medium text-zinc-600 transition-all hover:border-zinc-300 hover:text-foreground"
          >
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-forest-500 opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-forest-700" />
            </span>
            Private beta · now accepting agencies
            <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-7 max-w-4xl text-balance text-[40px] font-medium leading-[1.02] tracking-[-0.028em] text-foreground sm:text-[56px] md:text-[68px] lg:text-[80px]"
          >
            Run your entire agency{" "}
            <span className="serif-italic text-foreground/95">from one</span>{" "}
            workspace.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-xl text-pretty text-[15.5px] leading-relaxed text-zinc-500 sm:mt-7 sm:text-[17px]"
          >
            OpsSync is the operating system modern agencies use to manage
            clients, projects, finance, and team workflows — without juggling a
            dozen tools.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-8 flex w-full max-w-sm flex-col items-stretch gap-2.5 sm:mt-10 sm:w-auto sm:flex-row sm:items-center sm:gap-3"
          >
            <Button asChild size="lg" variant="primary" className="w-full sm:w-auto">
              <a href="#waitlist">Join the waitlist</a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
              <a href="#waitlist">Book a demo</a>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-[12px] text-zinc-500 sm:text-[12.5px]"
          >
            <span>1,400+ agencies on the waitlist</span>
            <span className="hidden h-3 w-px bg-zinc-200 sm:inline-block" />
            <span>SOC 2-aligned infrastructure</span>
            <span className="hidden h-3 w-px bg-zinc-200 sm:inline-block" />
            <span>No credit card required</span>
          </motion.div>
        </div>

        {/* Dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="relative mx-auto mt-14 max-w-6xl sm:mt-20 lg:mt-24"
        >
          <DashboardMockup variant="hero" />
        </motion.div>

        {/* Logo strip */}
        <div className="mt-16 sm:mt-24">
          <p className="text-center text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400">
            Trusted by operators at modern agencies
          </p>
          <LogoStrip />
        </div>
      </div>
    </section>
  );
}

function LogoStrip() {
  const logos = [
    "Northwind",
    "Halo Studio",
    "Loop Labs",
    "Citrus Co.",
    "Helix",
    "Foundry",
    "Tonic",
    "Mercer",
  ];
  return (
    <div className="relative mx-auto mt-7 max-w-5xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max animate-marquee items-center gap-12 py-2 pr-12 sm:gap-16 sm:pr-16">
        {[...logos, ...logos].map((l, i) => (
          <span
            key={`${l}-${i}`}
            className="shrink-0 text-[16px] font-medium tracking-[-0.015em] text-zinc-400 sm:text-[20px]"
          >
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}
