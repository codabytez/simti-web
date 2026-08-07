"use client";

import { Section } from "@/components/layout";
import { StatBlock } from "@/components/ui";
import { Stagger } from "@/components/motion";
import { stats } from "@/lib/content";

export function StatsBar() {
  return (
    <Section tone="brown" size="sm" grain aria-label="SIMTI by the numbers">
      <Stagger
        stagger={0.1}
        as="ul"
        className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 divide-cream/12 lg:divide-x"
      >
        {stats.map((s) => (
          <li key={s.label} className="lg:px-4">
            <StatBlock value={s.value} label={s.label} />
          </li>
        ))}
      </Stagger>
    </Section>
  );
}
