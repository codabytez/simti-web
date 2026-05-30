"use client";

import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function ApplicationCTA() {
  return (
    <section id="apply" className="bg-navy py-32 lg:py-40">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <RevealOnScroll delay={0}>
            <Eyebrow variant="teal" className="justify-center">
              Barrier First, Always
            </Eyebrow>
          </RevealOnScroll>
          <RevealOnScroll delay={0.08}>
            <h2 className="font-display text-4xl lg:text-6xl font-semibold italic text-cream leading-tight mb-4">
              The next cohort of SIMTI Fellows starts soon.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.16}>
            <p className="text-cream/60 mb-10">
              Applications for the 2026 cohort are now open. Places are limited.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.24}>
            <Button variant="primary" size="lg" href="/apply">
              Apply Now
            </Button>
            <p className="mt-6 text-sm text-teal-light">
              Questions?{" "}
              <a
                href="mailto:hello@safeinmyskintraininginstitute.com"
                className="underline hover:text-cream transition-colors"
              >
                Email us at hello@safeinmyskintraininginstitute.com
              </a>
            </p>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
