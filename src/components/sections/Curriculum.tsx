"use client";

import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CardModule } from "@/components/ui/CardModule";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const modules = [
  { number: "01", title: "Skin Anatomy & the Barrier Function" },
  { number: "02", title: "Understanding Skin of Colour" },
  { number: "03", title: "Barrier Disruptors: Products, Environment, Behaviour" },
  { number: "04", title: "Condition Assessment at the Dispensing Point" },
  { number: "05", title: "Evidence-Based Product Recommendation" },
  { number: "06", title: "Managing Common Skin Presentations" },
  { number: "07", title: "Topical Steroids: Safe Guidance Protocol" },
  { number: "08", title: "Case Studies & Clinical Practice" },
];

export function Curriculum() {
  return (
    <section id="curriculum" className="bg-cream py-24 lg:py-32">
      <Container>
        <div className="max-w-2xl mb-14">
          <RevealOnScroll delay={0}>
            <Eyebrow>What You&apos;ll Learn</Eyebrow>
          </RevealOnScroll>
          <RevealOnScroll delay={0.08}>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-brown-dark leading-tight mb-4">
              From Skin Biology to Clinical Practice
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.16}>
            <p className="text-brown-light leading-relaxed">
              Eight structured modules that take you from foundational science to confident clinical
              decision-making at the counter.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {modules.map((m, i) => (
            <RevealOnScroll key={m.number} delay={Math.floor(i / 2) * 0.08} className="h-full">
              <CardModule number={m.number} title={m.title} className="h-full" />
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.2}>
          <Button variant="secondary" href="#">
            Download Curriculum PDF
          </Button>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
