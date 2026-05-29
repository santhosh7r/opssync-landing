export const siteConfig = {
  name: "OpsSync",
  shortName: "OpsSync",
  tagline: "The Modern Operating System for Agencies",
  description:
    "OpsSync helps agencies manage operations, clients, projects, finances, and workflows with clarity and speed — from one premium workspace.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://opssync.app",
  ogImage: "/og.png",
  links: {
    twitter: "https://twitter.com/opssyncapp",
    linkedin: "https://www.linkedin.com/company/opssync",
    github: "https://github.com/opssync",
    email: "hello@opssync.app",
  },
} as const;

export type SiteConfig = typeof siteConfig;
