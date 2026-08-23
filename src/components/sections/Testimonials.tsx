"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "@/components/layout";
import { CardTestimonial, SectionHeading } from "@/components/ui";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/motion";
import { testimonials } from "@/lib/content";
import { duration, easeEditorial } from "@/lib/motion";
import { cn } from "@/lib/utils";

const count = testimonials.length;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (next: number) => {
    setDirection(next > index || (index === count - 1 && next === 0) ? 1 : -1);
    setIndex(next);
  };

  const active = testimonials[index];

  return (
    <Section id="testimonials" tone="brownDark" grain aria-labelledby="testimonials-heading">
      <SectionHeading
        id="testimonials-heading"
        eyebrow="From Past Participants"
        variant="light"
        align="center"
        title="Pharmacists Who Changed How They Practise"
      />

      <Reveal standalone className="mt-16 max-w-2xl mx-auto">
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -32 }}
              transition={{ duration: duration.base, ease: easeEditorial }}
            >
              <CardTestimonial quote={active.quote} author={active.author} role={active.role} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => go((index - 1 + count) % count)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition-colors hover:border-gold/60 hover:text-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
          >
            <ArrowLeftIcon size={18} />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.author}
                type="button"
                aria-label={`Go to testimonial ${i + 1} of ${count}`}
                aria-current={i === index}
                onClick={() => go(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === index ? "w-6 bg-gold" : "w-1.5 bg-cream/25 hover:bg-cream/45"
                )}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => go((index + 1) % count)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition-colors hover:border-gold/60 hover:text-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
          >
            <ArrowRightIcon size={18} />
          </button>
        </div>
      </Reveal>
    </Section>
  );
}
