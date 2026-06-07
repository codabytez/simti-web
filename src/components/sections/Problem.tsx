"use client";

import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const problems = [
  {
    title: "Bleaching creams dispensed without guidance",
    body: "Hydroquinone and mercury-laced products move across pharmacy counters daily, often without a word of clinical counsel.",
  },
  {
    title: "Topical steroids misused at the point of sale",
    body: "Potent corticosteroids are routinely recommended for conditions they cannot treat and discontinued without a taper.",
  },
  {
    title: "Skin of colour conditions misdiagnosed or overlooked",
    body: "Dermatology training in Nigeria rarely centres the realities of skin-to-color. Pharmacists inherit the same blind spots.",
  },
];

export function Problem() {
  return (
    <section id="about" className="bg-cream-dark py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <RevealOnScroll delay={0}>
              <Eyebrow>The Gap in Pharmacy Training</Eyebrow>
            </RevealOnScroll>
            <RevealOnScroll delay={0.08}>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold text-brown-dark leading-tight mb-10">
                Pharmacists are the first line of skin care advice in Nigeria, but most aren&apos;t
                equipped for it.
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.16}>
              <div className="space-y-8">
                {problems.map((p) => (
                  <div key={p.title} className="pl-5 border-l-2 border-gold">
                    <h3 className="font-semibold text-brown-dark mb-1">{p.title}</h3>
                    <p className="text-sm text-brown-light leading-relaxed">{p.body}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={0.2}>
            <div className="bg-navy rounded-2xl p-10 lg:p-14">
              <blockquote className="font-display text-2xl lg:text-3xl italic text-cream leading-snug">
                &ldquo;Pharmacists are more than just dispensers. They&rsquo;re a clinical
                touchpoint, and SIMTI prepares you to show up as one.&rdquo;
              </blockquote>
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
