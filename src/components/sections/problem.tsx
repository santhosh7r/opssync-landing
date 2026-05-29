"use client";

import { motion } from "framer-motion";

import { Container, Section, SectionHeading } from "@/components/shared/container";

const PROBLEMS = [
  {
    n: "01",
    title: "Tools built for everyone — designed for no one",
    body: "Generic CRMs and project apps don't understand agency-shaped work. Retainers, SOWs, scope creep, deliverables, margin — none of it has a real home.",
  },
  {
    n: "02",
    title: "Where does your client data actually live?",
    body: "Most agency tools were built before security was a priority. Plaintext exports, weak access controls, shared logins, and zero audit trail.",
  },
  {
    n: "03",
    title: "Last meaningful update? 2022.",
    body: "Half the category is on autopilot. Bug reports go unanswered. Roadmaps gather dust. Your workflow evolves; your software doesn't.",
  },
  {
    n: "04",
    title: "Your clients deserve more than a Slack channel",
    body: "Without a real client portal, every status update dies in a DM, every approval hides in an email, every file gets re-sent for the third time.",
  },
];

export function Problem() {
  return (
    <Section id="problem">
      <Container>
        <SectionHeading
          label="The problem"
          number="01"
          title={
            <>
              Agencies are drowning in tools.{" "}
              <span className="serif-italic text-zinc-500">
                None of them fit.
              </span>
            </>
          }
          description="Most agency software is generic, insecure, or quietly abandoned. We've felt all three. OpsSync is the answer."
        />

        <div className="mt-14 grid grid-cols-1 gap-y-10 gap-x-12 sm:mt-20 sm:grid-cols-2 lg:gap-x-20">
          {PROBLEMS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.05 }}
              className="border-t border-zinc-200 pt-6"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[11px] text-zinc-400">{p.n}</span>
                <h3 className="text-[19px] font-medium leading-snug tracking-[-0.015em] text-foreground sm:text-[20px]">
                  {p.title}
                </h3>
              </div>
              <p className="mt-3 max-w-md pl-9 text-[14.5px] leading-relaxed text-zinc-500 sm:text-[15px]">
                {p.body}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
