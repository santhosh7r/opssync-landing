"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Roadmap", href: "#roadmap" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 16);
  });

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "border-b transition-colors duration-300",
          scrolled
            ? "border-zinc-200/80 bg-white/85 backdrop-blur-md"
            : "border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-10">
          <Link href="#top" aria-label="OpsSync home" className="-ml-1">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13.5px] font-medium text-zinc-600 transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Button asChild variant="primary" size="sm">
              <a href="#waitlist">Get early access</a>
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-9 place-items-center rounded-full border border-zinc-200 bg-white text-foreground md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={false}
        animate={
          open
            ? { opacity: 1, y: 0, pointerEvents: "auto" }
            : { opacity: 0, y: -8, pointerEvents: "none" }
        }
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="md:hidden"
      >
        <div className="mx-auto mt-2 w-full max-w-6xl px-6">
          <div className="rounded-2xl border border-zinc-200 bg-white p-2 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.12)]">
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-[14px] text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-2 flex flex-col gap-2 border-t border-zinc-200 p-2 pt-3">
              <Button asChild variant="primary" size="md">
                <a href="#waitlist" onClick={() => setOpen(false)}>
                  Get early access
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
