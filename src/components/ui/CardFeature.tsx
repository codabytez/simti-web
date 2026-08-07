"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface CardFeatureProps {
  index?: string;
  title: string;
  body: string;
  className?: string;
}

/**
 * The accent rule along the top previously used a `before:` pseudo-element with
 * a height but no background, so it never rendered. It's now a real gradient
 * that wipes across on hover.
 */
export function CardFeature({ index, title, body, className }: CardFeatureProps) {
  return (
    <motion.article
      data-motion=""
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 380, damping: 26 }}
      className={cn(
        "group relative flex flex-col h-full overflow-hidden",
        "bg-cream border border-border rounded-2xl p-8 lg:p-10",
        "shadow-sm transition-shadow duration-300 hover:shadow-lg",
        className
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0",
          "bg-linear-to-r from-gold via-gold-light to-transparent",
          "transition-transform duration-500 ease-editorial group-hover:scale-x-100"
        )}
      />

      {index && (
        <span className="font-mono tabular text-xs font-medium text-gold tracking-widest mb-6">
          {index}
        </span>
      )}

      <h3 className="font-display text-2xl lg:text-[1.75rem] font-semibold leading-snug text-balance mb-3">
        {title}
      </h3>
      <p className="text-brown-light leading-relaxed text-pretty">{body}</p>
    </motion.article>
  );
}
