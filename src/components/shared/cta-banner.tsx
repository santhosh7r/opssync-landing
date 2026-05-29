import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/shared/container";

export function CtaBanner({
  eyebrow = "Ready when you are",
  title = "Run your agency from one workspace.",
  primary = { label: "Join the waitlist", href: "/#waitlist" },
  secondary = { label: "Book a demo", href: "/#waitlist" },
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <Section className="border-t border-zinc-200 bg-zinc-50/60">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <div className="text-[11.5px] font-medium uppercase tracking-[0.16em] text-forest-700">
              {eyebrow}
            </div>
            <h2 className="mt-4 max-w-2xl text-balance text-[34px] font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[44px] lg:text-[52px]">
              {title}
            </h2>
          </div>
          <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-3">
            <Link
              href={primary.href}
              className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-foreground px-5 text-[14px] font-medium text-background transition-colors hover:bg-foreground/90"
            >
              {primary.label}
              <ArrowRight className="size-3.5" />
            </Link>
            <Link
              href={secondary.href}
              className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 bg-white px-5 text-[14px] font-medium text-foreground transition-colors hover:border-zinc-300"
            >
              {secondary.label}
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
