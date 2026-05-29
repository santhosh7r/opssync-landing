import * as React from "react";
import { Container, SectionLabel } from "@/components/shared/container";
import { cn } from "@/lib/utils";

export function PageHero({
  label,
  number,
  title,
  description,
  meta,
  className,
}: {
  label: string;
  number?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  meta?: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden border-b border-zinc-200 pb-16 pt-28 sm:pb-20 sm:pt-36 lg:pt-44",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-grid opacity-50 radial-fade-top"
      />
      <Container>
        <SectionLabel number={number}>{label}</SectionLabel>
        <h1 className="mt-7 max-w-3xl text-balance text-[40px] font-medium leading-[1.04] tracking-[-0.025em] text-foreground sm:text-[52px] lg:text-[64px]">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-pretty text-[16px] leading-relaxed text-zinc-500 sm:text-[17px]">
            {description}
          </p>
        )}
        {meta && <div className="mt-8">{meta}</div>}
      </Container>
    </section>
  );
}
