"use client";

import { Section } from "@/components/layout";
import {
  AwardIcon,
  Button,
  CalendarIcon,
  ClockIcon,
  PeopleIcon,
  SectionHeading,
} from "@/components/ui";
import { Reveal, Stagger } from "@/components/motion";
import { phases, programmeDetails } from "@/lib/content";
import { site } from "@/lib/site";

const icons = {
  calendar: CalendarIcon,
  clock: ClockIcon,
  award: AwardIcon,
  people: PeopleIcon,
} as const;

export function Programme() {
  return (
    <Section id="programme" tone="navy" grain aria-labelledby="programme-heading">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div>
          <SectionHeading
            id="programme-heading"
            eyebrow="Cohort Programme"
            variant="teal"
            title="A Structured Path Through Four Phases"
            lead="SIMTI runs as a cohort-based programme, not a self-paced course. You move through four phases with a group of peers — from live training to research — building a professional community that lasts beyond the cohort."
          />

          <Reveal standalone delay={0.2} className="mt-10">
            <Button variant="primary" size="lg" href={site.applyUrl}>
              Apply for the Next Cohort
            </Button>
          </Reveal>
        </div>

        <Stagger stagger={0.09} className="grid grid-cols-1 sm:grid-cols-2 gap-4" as="ul">
          {programmeDetails.map((d) => {
            const Icon = icons[d.icon];
            return (
              <Reveal
                as="li"
                key={d.label}
                className="group rounded-xl border border-cream/12 bg-navy-dark/70 p-6
                           transition-colors duration-300 hover:border-teal-light/40 hover:bg-navy-dark"
              >
                <Icon
                  size={22}
                  className="mb-4 text-teal-light transition-transform duration-300 group-hover:scale-110"
                />
                <p className="text-2xs font-semibold uppercase tracking-[0.18em] text-teal-light">
                  {d.label}
                </p>
                <p className="mt-1.5 font-semibold text-cream text-pretty">{d.value}</p>
              </Reveal>
            );
          })}
        </Stagger>
      </div>

      {/* The four phases, as a connected vertical spine. */}
      <Stagger stagger={0.11} as="ol" className="relative mt-24 flex flex-col gap-10">
        <span
          aria-hidden="true"
          className="absolute left-1.75 top-3 bottom-3 w-px bg-linear-to-b from-teal-light/50 via-teal-light/25 to-transparent md:left-2"
        />

        {phases.map((p) => (
          <Reveal as="li" key={p.number} className="relative pl-10 md:pl-12">
            <span
              aria-hidden="true"
              className="absolute left-0 top-2 grid size-4 place-items-center rounded-full
                         border border-teal-light/60 bg-navy md:size-4.5"
            >
              <span className="size-1.5 rounded-full bg-teal-light" />
            </span>

            <div className="md:grid md:grid-cols-[minmax(0,15rem)_1fr] md:gap-10 md:items-baseline">
              <div>
                <p className="font-mono text-2xs font-medium uppercase tracking-[0.2em] text-teal-light">
                  {p.number}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-cream text-balance">
                  {p.title}
                </h3>
              </div>
              <p className="mt-3 leading-relaxed text-cream/65 text-pretty md:mt-0">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </Stagger>
    </Section>
  );
}
