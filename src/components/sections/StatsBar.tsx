"use client";

import { Container } from "@/components/layout/Container";
import { StatBlock } from "@/components/ui/StatBlock";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const stats = [
  { number: "142+", label: "Fellows Trained" },
  { number: "11", label: "Nigerian States Reached" },
  { number: "8", label: "Core Curriculum Modules" },
  { number: "96%", label: "Report Increased Clinical Confidence" },
];

export function StatsBar() {
  return (
    <section className="bg-brown py-16">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <RevealOnScroll key={s.label} delay={i * 0.08}>
              <StatBlock number={s.number} label={s.label} />
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
