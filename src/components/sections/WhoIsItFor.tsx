"use client";

import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const checklist = [
  "Licensed pharmacist (PCN registered)",
  "Customer-facing role (community or hospital pharmacy)",
  "Regularly asked about skin conditions and products",
  "Ready to add a clinical specialty to your practice",
];

export function WhoIsItFor() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <RevealOnScroll delay={0}>
              <Eyebrow>Is This for You?</Eyebrow>
            </RevealOnScroll>
            <RevealOnScroll delay={0.08}>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold text-brown-dark leading-tight mb-6">
                Built for Practising Pharmacists Ready to Specialise
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.16}>
              <p className="text-brown-light leading-relaxed mb-4">
                SIMTI is not a general skincare course. It is a clinical fellowship designed
                specifically for licensed pharmacists who interact with patients daily.
              </p>
              <p className="text-brown-light leading-relaxed">
                If you are regularly asked about skin conditions and want to answer those questions
                with clinical confidence, this programme was built for you.
              </p>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={0.2}>
            <div className="bg-cream-dark rounded-2xl p-10">
              <h3 className="font-display text-2xl font-semibold text-brown-dark mb-6">
                You&apos;re a good fit if you are:
              </h3>
              <ul className="space-y-4">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-gold-pale border border-gold flex items-center justify-center text-brown-dark font-bold text-xs">
                      ✓
                    </span>
                    <span className="text-brown-dark leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
