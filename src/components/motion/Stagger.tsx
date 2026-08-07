"use client";

import { motion } from "framer-motion";
import type { ElementType } from "react";
import { staggerParent, viewport } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  /** Seconds between each child's entrance. */
  stagger?: number;
  /** Seconds to wait before the first child begins. */
  delay?: number;
  /** Render as a different element (e.g. "ul", "section"). */
  as?: ElementType;
  /**
   * Play immediately on mount instead of waiting for the viewport. Use for
   * above-the-fold content, which is already visible when the page loads.
   */
  immediate?: boolean;
}

/**
 * Orchestration parent. Establishes a single viewport observer and drives every
 * descendant `Reveal` through Framer's variant propagation.
 *
 * This replaces the previous approach of giving each element its own observer:
 * one observer per section instead of one per element, and — more importantly —
 * children animate as a coordinated sequence rather than racing independently.
 */
export function Stagger({
  children,
  className,
  stagger = 0.08,
  delay = 0,
  as = "div",
  immediate = false,
}: StaggerProps) {
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionTag
      data-motion=""
      className={cn(className)}
      variants={staggerParent(stagger, delay)}
      initial="hidden"
      {...(immediate ? { animate: "visible" } : { whileInView: "visible", viewport })}
    >
      {children}
    </MotionTag>
  );
}
