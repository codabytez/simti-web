"use client";

import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CalendarTick, Clock, Award, People } from "iconsax-reactjs";

const details = [
  { icon: CalendarTick, label: "Cohort-based intake", value: "Next opening Q1 2026" },
  { icon: Clock, label: "Structured curriculum", value: "8 core modules" },
  { icon: Award, label: "On completion", value: "SIMTI Certified Fellow" },
  { icon: People, label: "Post-fellowship", value: "Community of practice" },
];

export function FellowsProgramme() {
  return (
    <section id="programme" className="bg-navy py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <RevealOnScroll delay={0}>
              <Eyebrow variant="teal">Fellows Programme</Eyebrow>
            </RevealOnScroll>
            <RevealOnScroll delay={0.08}>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold text-cream leading-tight mb-6">
                A Structured Path to Certification
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.16}>
              <p className="text-cream/70 leading-relaxed mb-8 max-w-lg">
                The SIMTI Fellowship is a cohort-based learning experience — not a self-paced
                course. You move through the curriculum with a group of peers, gaining a clinical
                credential and a professional community that lasts beyond the programme.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.24}>
              <Button variant="primary" href="/apply">
                Apply for the Next Cohort
              </Button>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={0.16}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {details.map((d) => (
                <div key={d.label} className="bg-navy-dark rounded-xl p-6 border border-cream/10">
                  <d.icon size={20} color="#4A9AAF" className="mb-3" />
                  <p className="text-xs font-semibold uppercase tracking-widest text-teal-light mb-1">
                    {d.label}
                  </p>
                  <p className="text-cream font-semibold">{d.value}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
