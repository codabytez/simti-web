import type { Transition, Variants } from "framer-motion";

/**
 * Motion design tokens.
 *
 * The brand is clinical and editorial, so motion should read as *settling into
 * place* rather than springing. Everything below favours a strong expo-style
 * decay: fast start, long quiet tail, no overshoot on content. Springs are
 * reserved for direct manipulation (drawer, hover), where overshoot reads as
 * responsiveness rather than decoration.
 */

/** Expo-out. The house easing curve for anything entering the page. */
export const easeEditorial = [0.16, 1, 0.3, 1] as const;

/** Slight overshoot, for elements responding to a user action. */
export const easeSpring = [0.34, 1.56, 0.64, 1] as const;

export const duration = {
  fast: 0.2,
  base: 0.4,
  slow: 0.7,
  slower: 1.1,
} as const;

export const transition = {
  enter: { duration: duration.slow, ease: easeEditorial },
  quick: { duration: duration.base, ease: easeEditorial },
  drawer: { type: "spring", stiffness: 320, damping: 34, mass: 0.9 },
} satisfies Record<string, Transition>;

/**
 * The default child variant. `hidden`/`visible` names are shared across every
 * primitive so a `Stagger` parent can drive arbitrary descendants without them
 * needing to know who their parent is.
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: transition.enter },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transition.enter },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: transition.enter },
};

/** Wipes a hairline rule out from its origin. Used for eyebrows and dividers. */
export const drawLine: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: duration.slow, ease: easeEditorial },
  },
};

export const variantsByName = {
  fadeUp,
  fadeIn,
  scaleIn,
  drawLine,
} as const;

export type VariantName = keyof typeof variantsByName;

/**
 * Parent orchestrator. One viewport observer drives an entire section, and
 * children inherit `hidden`/`visible` automatically via Framer's propagation.
 */
export function staggerParent(stagger = 0.08, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}

/** Shared viewport config so every section triggers at a consistent point. */
export const viewport = { once: true, margin: "-12% 0px -12% 0px" } as const;
