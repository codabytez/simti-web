"use client";

import { MotionConfig } from "framer-motion";

/**
 * `reducedMotion="user"` makes Framer honour `prefers-reduced-motion` natively:
 * transform and layout animations are disabled while opacity still crossfades.
 *
 * This is load-bearing. Framer animates via inline styles, so the CSS
 * `prefers-reduced-motion` block in globals.css cannot reach any of it — the
 * media query there only ever governed non-Framer transitions.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
