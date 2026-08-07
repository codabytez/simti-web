"use client";

import { motion } from "framer-motion";
import { drawLine } from "@/lib/motion";
import { cn } from "@/lib/utils";

type EyebrowVariant = "default" | "light" | "teal";

interface EyebrowProps {
  children: React.ReactNode;
  variant?: EyebrowVariant;
  className?: string;
}

const variants: Record<EyebrowVariant, { text: string; rule: string }> = {
  default: { text: "text-gold", rule: "bg-gold" },
  light: { text: "text-gold-light", rule: "bg-gold-light" },
  teal: { text: "text-teal-light", rule: "bg-teal-light" },
};

/**
 * The leading rule is a real element rather than a `before:` pseudo so it can
 * animate independently — it wipes out from its origin as the eyebrow fades in.
 */
export function Eyebrow({ children, variant = "default", className }: EyebrowProps) {
  const v = variants[variant];

  return (
    <p
      className={cn(
        "inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em]",
        v.text,
        className
      )}
    >
      <motion.span
        aria-hidden="true"
        variants={drawLine}
        className={cn("block h-px w-8 origin-left", v.rule)}
      />
      {children}
    </p>
  );
}
