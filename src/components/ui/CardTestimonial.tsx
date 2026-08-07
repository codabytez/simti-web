"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface CardTestimonialProps {
  quote: string;
  author: string;
  role: string;
  className?: string;
}

/**
 * Uses figure/blockquote/figcaption rather than a stack of divs, so assistive
 * tech announces the attribution as belonging to the quote.
 */
export function CardTestimonial({ quote, author, role, className }: CardTestimonialProps) {
  return (
    <motion.figure
      data-motion=""
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 380, damping: 26 }}
      className={cn(
        "relative flex flex-col h-full m-0 overflow-hidden",
        "bg-navy rounded-2xl p-9 lg:p-10 shadow-lg",
        "ring-1 ring-inset ring-cream/10",
        className
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-2 left-6 font-display text-[7rem] leading-none text-gold/25"
      >
        &ldquo;
      </span>

      <blockquote className="relative flex-1 font-display text-xl lg:text-2xl italic leading-snug text-cream text-pretty">
        {quote}
      </blockquote>

      <figcaption className="relative mt-7 pt-6 border-t border-cream/12">
        <span className="block text-sm font-semibold uppercase tracking-[0.16em] text-gold-light">
          {author}
        </span>
        <span className="block mt-1 text-sm text-teal-light">{role}</span>
      </figcaption>
    </motion.figure>
  );
}
