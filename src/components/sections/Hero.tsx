"use client";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const trustSignals = [
  "PCN-Recognized Curriculum",
  "Cohort-Based Learning",
  "Certified SIMTI Fellow",
];

export function Hero() {
  return (
    <section className="relative min-h-screen bg-brown-dark flex items-center pt-18">
      <div className="absolute inset-0 opacity-[0.12] bg-[url('/noise.svg')] pointer-events-none" />

      <Container className="relative z-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 items-center">
          {/* Left column */}
          <div>
            <RevealOnScroll delay={0}>
              <Eyebrow variant="light">Fellows Programme</Eyebrow>
            </RevealOnScroll>

            <RevealOnScroll delay={0.08}>
              <h1 className="font-display text-5xl lg:text-7xl font-semibold text-cream leading-[1.1] tracking-tight mb-3">
                Train to Become Nigeria&apos;s Leading Clinical Skin Expert
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={0.12}>
              <p className="text-sm text-cream/50 tracking-wide mb-6">
                SIMTI: Safe In My Skin Training Institute
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.16}>
              <p className="text-lg text-cream/75 leading-relaxed mb-10 max-w-xl">
                A structured training for licensed pharmacists ready to practice evidence-based skin
                care grounded in the Barrier-First Framework.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.24}>
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <Button variant="primary" size="lg" href="/apply">
                  Apply for Cohort 2
                </Button>
                <Button variant="ghost" size="lg" href="#curriculum">
                  See Curriculum
                </Button>
              </div>

              <ul className="flex flex-wrap gap-6">
                {trustSignals.map((signal) => (
                  <li key={signal} className="flex items-center gap-2 text-sm text-cream/70">
                    <span className="text-gold font-bold">✓</span>
                    {signal}
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>

          {/* Right column — image placeholder */}
          <RevealOnScroll delay={0.2} className="relative hidden lg:block">
            <div className="aspect-4/5 rounded-2xl bg-brown/40 border border-cream/10 flex items-center justify-center">
              <p className="text-cream/30 text-sm text-center px-8">
                Hero image
                <br />
                Pharmacist in clinical setting
              </p>
            </div>

            {/* Floating stat card — bottom left */}
            <div className="absolute -bottom-6 -left-8 bg-brown-dark border border-gold/20 rounded-xl px-6 py-4 shadow-xl">
              <p className="font-mono text-3xl font-medium text-gold leading-none mb-1">142+</p>
              <p className="text-xs font-medium text-cream/60 uppercase tracking-widest">
                Fellows Trained
              </p>
            </div>

            {/* Gold accent line */}
            <div className="absolute -left-4 top-8 bottom-8 w-px bg-linear-to-b from-transparent via-gold to-transparent opacity-40" />
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
