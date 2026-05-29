import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

import { Container } from "@/components/shared/container";
import { siteConfig } from "@/lib/site";

const NAV = {
  product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Roadmap", href: "/roadmap" },
    { label: "Changelog", href: "/changelog" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Customers", href: "/customers" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "Help center", href: "#" },
    { label: "API", href: "#" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Security", href: "/security" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <Container className="py-14 sm:py-20">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" aria-label="OpsSync home" className="inline-flex items-center gap-2.5">
              <Image
                src="/opssync-mark.svg"
                alt=""
                width={36}
                height={36}
                priority
                className="rounded-[26%]"
              />
              <span className="text-[18px] font-semibold tracking-[-0.02em] text-foreground">
                OpsSync
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-[13.5px] leading-relaxed text-zinc-500">
              The operating system for modern agencies. Built specifically for
              client-shaped work — secure, opinionated, and updated every week.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[
                { icon: Twitter, href: siteConfig.links.twitter, label: "Twitter" },
                { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" },
                { icon: Github, href: siteConfig.links.github, label: "GitHub" },
                { icon: Mail, href: `mailto:${siteConfig.links.email}`, label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid size-8 place-items-center rounded-full border border-zinc-200 bg-white text-zinc-500 transition-colors hover:border-forest-200 hover:text-forest-700"
                >
                  <s.icon className="size-3.5" />
                </a>
              ))}
            </div>
          </div>

          {(
            [
              ["Product", NAV.product],
              ["Company", NAV.company],
              ["Resources", NAV.resources],
              ["Legal", NAV.legal],
            ] as const
          ).map(([title, links]) => (
            <div key={title}>
              <div className="text-[11.5px] font-medium uppercase tracking-[0.16em] text-zinc-500">
                {title}
              </div>
              <ul className="mt-5 space-y-3">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[13.5px] text-foreground transition-colors hover:text-forest-700"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-zinc-200 pt-8 sm:mt-20 sm:flex-row sm:items-center">
          <p className="text-[12.5px] text-zinc-500">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-[12.5px] text-zinc-500">
            <span className="inline-flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-forest-700" />
              All systems operational
            </span>
            <span className="hidden h-3 w-px bg-zinc-200 sm:inline-block" />
            <span>Made for agencies, by operators.</span>
          </div>
        </div>
      </Container>

      <div
        aria-hidden
        className="pointer-events-none mx-auto max-w-6xl overflow-hidden px-6 sm:px-8 lg:px-10"
      >
        <div
          className="select-none text-center font-serif text-[20vw] font-normal leading-[0.9] tracking-[-0.04em] sm:text-[16vw] lg:text-[200px]"
          style={{ color: "rgba(15, 70, 48, 0.2)" }}
        >
          OpsSync
        </div>
      </div>
    </footer>
  );
}
