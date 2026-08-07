"use client";

import { Section } from "@/components/layout";
import { SectionHeading } from "@/components/ui";
import { Reveal, Stagger } from "@/components/motion";
import { eligibility } from "@/lib/content";

export function WhoIsItFor() {
  return (
    <Section tone="cream" aria-labelledby="fit-heading">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div>
          <SectionHeading
            id="fit-heading"
            eyebrow="Is This for You?"
            title="Built for Practising Pharmacists Ready to Specialise"
          />

          <Stagger stagger={0.09} className="mt-6 flex flex-col gap-4 max-w-xl">
            <Reveal>
              <p className="text-lead text-brown-light text-pretty">
                SIMTI is not a general skincare course. It is a clinical cohort programme designed
                specifically for licensed pharmacists who interact with patients daily.
              </p>
            </Reveal>
            <Reveal>
              <p className="text-lead text-brown-light text-pretty">
                If you are regularly asked about skin conditions and want to answer those questions
                with clinical confidence, this programme was built for you.
              </p>
            </Reveal>
          </Stagger>
        </div>

        <Reveal standalone variant="scaleIn">
          <div className="rounded-2xl border border-border bg-cream-dark p-9 lg:p-11 shadow-sm">
            <h3 className="font-display text-2xl font-semibold text-brown-dark mb-7">
              You&apos;re a good fit if you are:
            </h3>

            <Stagger stagger={0.08} as="ul" className="flex flex-col gap-5">
              {eligibility.map((item) => (
                <Reveal as="li" key={item} className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 grid shrink-0 place-items-center w-5 h-5 rounded-full
                               bg-gold-pale border border-gold/70"
                  >
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-brown-dark"
                    >
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                  </span>
                  <span className="leading-snug text-brown-dark text-pretty">{item}</span>
                </Reveal>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
