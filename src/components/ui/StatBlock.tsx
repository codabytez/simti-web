"use client";

import { useEffect, useMemo, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { fadeUp, easeEditorial } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface StatBlockProps {
  /** Accepts decorated values like "142+" or "96%". */
  value: string;
  label: string;
  className?: string;
}

/** Splits "142+" into 142 and "+" so the number can count while the affix holds. */
function parseValue(value: string) {
  const match = value.match(/^(\D*)([\d.,]+)(.*)$/);
  if (!match) return null;
  const [, prefix, digits, suffix] = match;
  const numeric = Number(digits.replace(/,/g, ""));
  if (!Number.isFinite(numeric)) return null;
  return { prefix, numeric, suffix, decimals: (digits.split(".")[1] ?? "").length };
}

export function StatBlock({ value, label, className }: StatBlockProps) {
  // Memoised so the effect below keeps a stable dependency — recomputing this
  // inline would hand the effect a new object each render and restart the
  // animation before it could advance.
  const parsed = useMemo(() => parseValue(value), [value]);

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduceMotion = useReducedMotion();
  const animated = parsed !== null && !reduceMotion;

  // The count lives in a MotionValue rather than React state: Framer writes the
  // text straight to the DOM, so a 1.6s tick doesn't re-render the tree ~96
  // times. Seeded with the final figure so the server renders the true value
  // and the stat stays correct without JS.
  const count = useMotionValue(parsed?.numeric ?? 0);

  const text = useTransform(count, (latest) => {
    if (!parsed) return value;
    const n = parsed.decimals
      ? latest.toFixed(parsed.decimals)
      : Math.round(latest).toLocaleString("en-NG");
    return `${parsed.prefix}${n}${parsed.suffix}`;
  });

  useEffect(() => {
    if (!animated || !inView || !parsed) return;

    // Rewind and run. Both are writes to an external system, not React state.
    count.set(0);
    const controls = animate(count, parsed.numeric, {
      duration: 1.6,
      ease: easeEditorial,
    });

    return () => controls.stop();
  }, [animated, inView, parsed, count]);

  return (
    <motion.div data-motion="" variants={fadeUp} className={cn("text-center", className)}>
      <span
        ref={ref}
        className="block font-mono tabular text-[clamp(2.5rem,1.6rem+3.2vw,3.75rem)] font-medium text-gold leading-none"
      >
        {/* A ticking number would be announced on every frame, so it's hidden
            and the settled value exposed once. `select-none` keeps the
            duplicate out of copied text. */}
        {animated ? (
          <motion.span aria-hidden="true">{text}</motion.span>
        ) : (
          <span aria-hidden="true">{value}</span>
        )}
        <span className="sr-only select-none">{value}</span>
      </span>
      <span className="mt-3 block text-sm font-medium uppercase tracking-[0.14em] text-cream/75 text-balance">
        {label}
      </span>
    </motion.div>
  );
}
