"use client";

import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CardFeature } from "@/components/ui/CardFeature";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const features = [
  {
    title: "The Barrier-First Framework",
    body: "Understand how the skin barrier works before any recommendation. Every clinical decision starts here.",
  },
  {
    title: "Skin of Colour Expertise",
    body: "Trained specifically for the dermatological realities of Nigerian patients: melanin-rich skin, common presentations, and cultural context.",
  },
  {
    title: "Clinical Confidence at the Counter",
    body: "Turn every dispensing moment into expert skin consultation. Leave each interaction with a clear, evidence-based recommendation.",
  },
];

export function Solution() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <Container>
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <RevealOnScroll delay={0}>
            <Eyebrow className="justify-center">The SIMTI Method</Eyebrow>
          </RevealOnScroll>
          <RevealOnScroll delay={0.08}>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-brown-dark leading-tight mb-4">
              Science-Led. Practitioner-Focused.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.16}>
            <p className="text-brown-light leading-relaxed">
              The Barrier-First Framework is a structured clinical lens for every skin interaction,
              built on dermatology science and adapted for the pharmacy counter.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <RevealOnScroll key={f.title} delay={i * 0.1} className="h-full">
              <CardFeature title={f.title} body={f.body} className="h-full" />
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
