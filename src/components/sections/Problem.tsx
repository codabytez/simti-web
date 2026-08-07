"use client";

import { Section } from "@/components/layout";
import { SectionHeading } from "@/components/ui";
import { Reveal, Stagger } from "@/components/motion";
import { problems } from "@/lib/content";

export function Problem() {
  return (
    <Section id="about" tone="creamDark" aria-labelledby="problem-heading">
      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-20 items-start">
        <div>
          <SectionHeading
            id="problem-heading"
            eyebrow="The Gap in Pharmacy Training"
            title={
              <>
                Pharmacists are the first line of skin care advice in Nigeria, but most aren&apos;t
                equipped for it.
              </>
            }
          />

          <Stagger stagger={0.1} className="mt-12 flex flex-col gap-9" as="ul">
            {problems.map((p) => (
              <Reveal as="li" key={p.title} className="relative pl-6">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1 bottom-1 w-0.5 rounded-full bg-linear-to-b from-gold to-gold/20"
                />
                <h3 className="font-semibold text-brown-dark mb-1.5 text-pretty">{p.title}</h3>
                <p className="text-sm leading-relaxed text-brown-light text-pretty">{p.body}</p>
              </Reveal>
            ))}
          </Stagger>
        </div>

        {/* Pull-quote. Sticky on tall screens so it holds while the list scrolls. */}
        <Reveal standalone variant="scaleIn" className="lg:sticky lg:top-28">
          <figure className="relative m-0 overflow-hidden rounded-2xl bg-navy p-10 lg:p-12 shadow-lg">
            <div className="grain" aria-hidden="true" />
            <span
              aria-hidden="true"
              className="pointer-events-none select-none absolute -top-4 left-7 font-display text-[8rem] leading-none text-gold/20"
            >
              &ldquo;
            </span>
            <blockquote className="relative font-display text-2xl lg:text-[1.9rem] italic leading-snug text-cream text-pretty">
              Pharmacists are more than just dispensers. They&rsquo;re a clinical touchpoint, and
              SIMTI prepares you to show up as one.
            </blockquote>
            <div aria-hidden="true" className="relative mt-8 h-px w-16 bg-gold/60" />
          </figure>
        </Reveal>
      </div>
    </Section>
  );
}
