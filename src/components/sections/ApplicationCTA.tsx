"use client";

import { Section } from "@/components/layout";
import { Button, Eyebrow } from "@/components/ui";
import { Reveal, Stagger } from "@/components/motion";
import { site } from "@/lib/site";

export function ApplicationCTA() {
  return (
    <Section id="apply" tone="navyDark" size="lg" grain aria-labelledby="cta-heading">
      {/* Warm glow so the closing panel doesn't read as flat as the mid-page navy. */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[80vw] h-[45vw] max-w-250 rounded-full pointer-events-none
                   bg-[radial-gradient(ellipse,rgba(184,150,58,0.13),transparent_70%)] blur-3xl"
      />

      <Stagger stagger={0.09} className="relative flex flex-col items-center text-center">
        <Reveal className="mb-6">
          <Eyebrow variant="teal">{site.tagline}</Eyebrow>
        </Reveal>

        <Reveal>
          <h2
            id="cta-heading"
            className="font-display text-display-lg font-semibold italic text-cream text-balance max-w-3xl"
          >
            The next SIMTI cohort starts soon.
          </h2>
        </Reveal>

        <Reveal className="mt-5">
          <p className="text-lead text-cream/65 max-w-lg text-pretty">
            Applications for the 2026 cohort are now open. Places are limited.
          </p>
        </Reveal>

        <Reveal className="mt-11">
          <Button variant="primary" size="lg" href={site.applyUrl}>
            Apply Now
          </Button>
        </Reveal>

        <Reveal className="mt-8">
          <p className="text-sm text-cream/55">
            Questions?{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-teal-light underline underline-offset-4 decoration-teal-light/40 hover:decoration-teal-light transition-colors"
            >
              {site.email}
            </a>
          </p>
        </Reveal>
      </Stagger>
    </Section>
  );
}
