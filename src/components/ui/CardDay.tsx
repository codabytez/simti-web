"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface CardDayProps {
  day: string;
  title: string;
  note?: string;
  topics: readonly string[];
  className?: string;
}

/**
 * One of the five live training days. Replaces the generic module card — the
 * real curriculum has substantive topic lists per day, and hiding them behind a
 * one-line title was underselling the programme.
 */
export function CardDay({ day, title, note, topics, className }: CardDayProps) {
  return (
    <motion.li
      data-motion=""
      variants={fadeUp}
      className={cn(
        "group relative flex flex-col h-full overflow-hidden",
        "rounded-2xl border border-border bg-cream p-8 lg:p-9",
        "shadow-sm transition-shadow duration-300 hover:shadow-lg",
        className
      )}
    >
      <p className="font-mono tabular text-xs font-medium uppercase tracking-[0.2em] text-teal">
        {day}
      </p>

      <h3 className="mt-4 font-display text-2xl font-semibold leading-snug text-brown-dark text-balance">
        {title}
      </h3>

      {note && <p className="mt-2 text-sm italic text-brown-light/80">{note}</p>}

      <ul className="mt-6 flex flex-col gap-2.5 border-t border-border/70 pt-6">
        {topics.map((t) => (
          <li key={t} className="flex items-start gap-3 text-sm leading-relaxed text-brown-light">
            <span
              aria-hidden="true"
              className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-gold"
            />
            <span className="text-pretty">{t}</span>
          </li>
        ))}
      </ul>
    </motion.li>
  );
}
