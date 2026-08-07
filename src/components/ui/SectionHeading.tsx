"use client";

import { Eyebrow } from "./Eyebrow";
import { Reveal, Stagger } from "@/components/motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  /** Colour register for the eyebrow, matched to the section's surface. */
  variant?: "default" | "light" | "teal";
  align?: "left" | "center";
  /** Renders an `h1` instead of the default `h2`. */
  as?: "h1" | "h2";
  id?: string;
  className?: string;
  size?: "md" | "lg";
}

/**
 * Eyebrow + heading + lead, the shape repeated by six sections. Bundling them
 * keeps the vertical rhythm and stagger timing identical everywhere instead of
 * each section re-deriving its own spacing.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  variant = "default",
  align = "left",
  as: Tag = "h2",
  id,
  className,
  size = "md",
}: SectionHeadingProps) {
  const centred = align === "center";

  return (
    <Stagger
      stagger={0.07}
      className={cn(
        "flex flex-col",
        centred ? "items-center text-center mx-auto max-w-2xl" : "items-start max-w-2xl",
        className
      )}
    >
      <Reveal className="mb-5">
        <Eyebrow variant={variant}>{eyebrow}</Eyebrow>
      </Reveal>

      <Reveal>
        <Tag
          id={id}
          className={cn(
            "font-display font-semibold text-balance",
            size === "lg" ? "text-display-lg" : "text-display-md"
          )}
        >
          {title}
        </Tag>
      </Reveal>

      {lead && (
        <Reveal className="mt-5">
          <p className={cn("text-lead opacity-75 text-pretty", centred && "mx-auto")}>{lead}</p>
        </Reveal>
      )}
    </Stagger>
  );
}
