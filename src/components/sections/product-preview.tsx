"use client";

import { motion } from "framer-motion";
import { Container, Section, SectionHeading } from "@/components/shared/container";
import { DashboardMockup } from "@/components/mockup/dashboard";

export function ProductPreview() {
  return (
    <Section id="product" className="overflow-hidden">
      <Container>
        <SectionHeading
          label="The workspace"
          number="03"
          title={
            <>
              A workspace built for{" "}
              <span className="serif-italic text-zinc-500">the way agencies operate.</span>
            </>
          }
          description="One surface for projects, finance, clients, and team health — designed with the speed and craft of the tools your team already loves."
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 sm:mt-20"
        >
          <DashboardMockup variant="full" />
        </motion.div>
      </Container>
    </Section>
  );
}
