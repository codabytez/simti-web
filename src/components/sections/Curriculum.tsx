"use client";

import { Section } from "@/components/layout";
import { Button, CardDay, DownloadIcon, SectionHeading } from "@/components/ui";
import { Reveal, Stagger } from "@/components/motion";
import { crossCuttingThemes, outcomes, trainingDays } from "@/lib/content";
import { site } from "@/lib/site";

export function Curriculum() {
  return (
    <Section id="curriculum" tone="creamWarm" aria-labelledby="curriculum-heading">
      <SectionHeading
        align="center"
        id="curriculum-heading"
        eyebrow="What You'll Learn"
        title="From Skin Biology to Clinical Practice"
        lead="Phase One runs as five intensive, live training days across three weekends — each one building from foundational science toward confident decision-making at the counter."
      />

      <Stagger stagger={0.09} as="ul" className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {trainingDays.map((d) => (
          <CardDay
            key={d.day}
            day={d.day}
            title={d.title}
            note={"note" in d ? d.note : undefined}
            topics={d.topics}
          />
        ))}
      </Stagger>

      {/* Cross-cutting themes — called out in the curriculum as spanning all days. */}
      <Reveal standalone className="mt-8">
        <div className="rounded-xl border border-dashed border-border-dark bg-cream/60 px-7 py-6">
          <p className="text-sm text-brown-light text-pretty">
            <span className="font-semibold text-brown-dark">Running through every day:</span>{" "}
            {crossCuttingThemes.map((t, i) => (
              <span key={t}>
                {t.toLowerCase()}
                {i < crossCuttingThemes.length - 1 ? ", " : "."}
              </span>
            ))}
          </p>
        </div>
      </Reveal>

      {/* Outcomes */}
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">
        <Reveal standalone>
          <h3 className="font-display text-display-sm font-semibold text-brown-dark text-balance">
            By the end of the training, you will be able to:
          </h3>
        </Reveal>

        <Stagger stagger={0.07} as="ul" className="flex flex-col gap-4">
          {outcomes.map((o) => (
            <Reveal as="li" key={o} className="flex items-start gap-4">
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-1 shrink-0 text-teal"
                aria-hidden="true"
              >
                <path d="m5 13 4 4L19 7" />
              </svg>
              <span className="leading-relaxed text-brown-dark text-pretty">{o}</span>
            </Reveal>
          ))}
        </Stagger>
      </div>

      <Reveal standalone delay={0.1} className="mt-16">
        <div className="flex flex-col sm:flex-row sm:items-center gap-5">
          <Button variant="secondary" href={site.curriculumPdf} target="_blank" rel="noopener">
            <DownloadIcon size={17} />
            Download Full Curriculum
          </Button>
          <p className="text-sm text-brown-light">
            Questions about the curriculum?{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-medium text-teal-dark underline underline-offset-4 decoration-teal/40 hover:decoration-teal transition-colors"
            >
              Get in touch
            </a>
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
