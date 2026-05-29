import * as React from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function Section({
  className,
  children,
  id,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      id={id}
      className={cn("relative py-20 sm:py-28 lg:py-36", className)}
      {...props}
    >
      {children}
    </section>
  );
}

export function SectionLabel({
  number,
  children,
  className,
}: {
  number?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 text-[11.5px] font-medium uppercase tracking-[0.18em] text-zinc-500",
        className
      )}
    >
      {number && (
        <span className="font-mono text-zinc-400">{number}</span>
      )}
      <span className="h-px w-5 bg-zinc-300" />
      <span className="size-1.5 rounded-full bg-forest-700" aria-hidden />
      <span>{children}</span>
    </div>
  );
}

export function SectionHeading({
  label,
  number,
  title,
  description,
  align = "left",
  className,
}: {
  label?: string;
  number?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {label && <SectionLabel number={number}>{label}</SectionLabel>}
      <h2
        className={cn(
          "max-w-3xl text-balance text-[34px] font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[44px] lg:text-[52px]",
          align === "center" && "mx-auto"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-xl text-pretty text-[16.5px] leading-relaxed text-zinc-500",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
