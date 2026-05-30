"use client";

import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CardTestimonial } from "@/components/ui/CardTestimonial";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const testimonials = [
  {
    quote:
      "SIMTI gave me a clinical language for conversations I was already having. I now know exactly what to ask, and what to recommend.",
    author: "Pharmacist A.",
    role: "Community Pharmacy, Lagos",
  },
  {
    quote:
      "I used to dread skin questions. Now I look forward to them. The Barrier-First Framework changed how I see every consultation.",
    author: "Pharmacist B.",
    role: "Hospital Pharmacy, Abuja",
  },
  {
    quote:
      "The cohort model made it possible — learning alongside colleagues kept me accountable and made the material stick.",
    author: "Pharmacist C.",
    role: "Community Pharmacy, Port Harcourt",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-brown-dark py-24 lg:py-32">
      <Container>
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <RevealOnScroll delay={0}>
            <Eyebrow variant="light" className="justify-center">
              From SIMTI Fellows
            </Eyebrow>
          </RevealOnScroll>
          <RevealOnScroll delay={0.08}>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-cream leading-tight">
              Pharmacists Who Changed How They Practise
            </h2>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <RevealOnScroll key={t.author} delay={i * 0.1}>
              <CardTestimonial quote={t.quote} author={t.author} role={t.role} />
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
