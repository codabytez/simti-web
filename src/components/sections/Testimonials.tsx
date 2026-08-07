"use client";

import { Section } from "@/components/layout";
import { CardTestimonial, SectionHeading } from "@/components/ui";
import { Stagger } from "@/components/motion";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <Section id="testimonials" tone="brownDark" grain aria-labelledby="testimonials-heading">
      <SectionHeading
        id="testimonials-heading"
        eyebrow="From Past Participants"
        variant="light"
        align="center"
        title="Pharmacists Who Changed How They Practise"
      />

      <Stagger stagger={0.12} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <CardTestimonial key={t.author} quote={t.quote} author={t.author} role={t.role} />
        ))}
      </Stagger>
    </Section>
  );
}
