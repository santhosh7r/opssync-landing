"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

import { Container, Section } from "@/components/shared/container";

export function FinalCta() {
  return (
    <Section className="py-20 sm:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative isolate overflow-hidden rounded-2xl border border-zinc-200 bg-[#06140C] p-8 text-white sm:p-12 lg:p-14"
        >
          {/* Decorative top hairline + soft halo */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-forest-400/60 to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[280px] w-[680px] -translate-x-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(31,110,74,0.35), transparent 65%)",
              filter: "blur(40px)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.14]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage:
                "radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 75%)",
            }}
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-forest-400/30 bg-forest-500/15 px-3 py-1 text-[11.5px] font-medium uppercase tracking-[0.14em] text-forest-200">
                <Sparkles className="size-3" />
                Early access · Private beta
              </div>
              <h2 className="mt-6 max-w-2xl text-balance text-[32px] font-medium leading-[1.06] tracking-[-0.02em] text-white sm:text-[40px] lg:text-[48px]">
                Stop wiring tools together.{" "}
                <span className="serif-italic text-white/65">
                  Run on one.
                </span>
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/65 sm:text-[16px]">
                OpsSync is opening access in waves to a small group of
                design-first agencies. Tell us where it hurts most — we&apos;ll
                prioritise the teams we can help fastest.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
              <a
                href="#waitlist"
                className="group inline-flex h-12 items-center justify-between gap-3 rounded-full bg-white pl-5 pr-2 text-[14px] font-medium text-foreground transition-all hover:bg-white/95 active:scale-[0.99] lg:w-auto"
              >
                <span>Join the waitlist</span>
                <span className="grid size-8 place-items-center rounded-full bg-foreground text-background transition-transform group-hover:translate-x-0.5">
                  <ArrowUpRight className="size-3.5" />
                </span>
              </a>
              <a
                href="#waitlist"
                className="inline-flex items-center gap-1 self-start text-[12.5px] text-white/55 transition-colors hover:text-white lg:self-end"
              >
                Or book a guided demo
                <ArrowUpRight className="size-3" />
              </a>
              <div className="mt-1 flex items-center gap-3 text-[11.5px] text-white/45 lg:self-end">
                <span className="inline-flex items-center gap-1.5">
                  <span className="size-1 rounded-full bg-forest-400" />
                  Takes 30 seconds
                </span>
                <span className="h-3 w-px bg-white/15" />
                <span>No credit card</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
