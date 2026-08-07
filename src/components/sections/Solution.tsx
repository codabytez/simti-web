"use client";

import { Section } from "@/components/layout";
import { CardFeature, SectionHeading } from "@/components/ui";
import { Stagger } from "@/components/motion";
import { pillars } from "@/lib/content";

export function Solution() {
  return (
    <Section tone="cream" aria-labelledby="solution-heading">
      <SectionHeading
        id="solution-heading"
        eyebrow="The SIMTI Method"
        align="center"
        title="Science-Led. Practitioner-Focused."
        lead="The Barrier-First Framework is a structured clinical lens for every skin interaction, built on dermatology science and adapted for the pharmacy counter."
      />

      <Stagger stagger={0.12} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((p) => (
          <CardFeature key={p.title} index={p.index} title={p.title} body={p.body} />
        ))}
      </Stagger>
    </Section>
  );
}
