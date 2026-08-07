"use client";

import { motion } from "framer-motion";
import type { ElementType } from "react";
import { variantsByName, viewport, type VariantName } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Which entrance to use. Defaults to the house fade-up. */
  variant?: VariantName;
  /**
   * Stand alone rather than inheriting from a `Stagger` parent. Only needed for
   * one-off elements that aren't part of a sequence.
   */
  standalone?: boolean;
  /** Extra delay in seconds. Only meaningful with `standalone`. */
  delay?: number;
  as?: ElementType;
}

/**
 * A single animating element.
 *
 * By default this declares variants but no `initial`/`animate` of its own, so
 * Framer inherits the animation state from the nearest `Stagger` ancestor. That
 * inheritance is the whole point: it lets a section choreograph its children
 * without each child owning a viewport observer.
 */
export function Reveal({
  children,
  className,
  variant = "fadeUp",
  standalone = false,
  delay = 0,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionTag
      data-motion=""
      className={cn(className)}
      variants={variantsByName[variant]}
      {...(standalone
        ? {
            initial: "hidden",
            whileInView: "visible",
            viewport,
            transition: { delay },
          }
        : {})}
    >
      {children}
    </MotionTag>
  );
}
