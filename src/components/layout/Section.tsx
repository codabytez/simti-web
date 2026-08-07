import { Container } from "./Container";
import { cn } from "@/lib/utils";

/**
 * Surface tones. Pairing background and foreground here is what stops sections
 * from each re-deciding their own text colour — previously every section set
 * `text-cream` or `text-brown-dark` by hand on each child.
 */
const tones = {
  cream: "bg-cream text-brown-dark",
  creamWarm: "bg-cream-warm text-brown-dark",
  creamDark: "bg-cream-dark text-brown-dark",
  brown: "bg-brown text-cream",
  brownDark: "bg-brown-dark text-cream",
  brownDeep: "bg-brown-deep text-cream",
  navy: "bg-navy text-cream",
  navyDark: "bg-navy-dark text-cream",
} as const;

export type Tone = keyof typeof tones;

/** Tones dark enough to carry the grain overlay and a light-on-dark treatment. */
export const darkTones: Tone[] = ["brown", "brownDark", "brownDeep", "navy", "navyDark"];

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  tone?: Tone;
  /** Vertical rhythm. `lg` is for the moments that should feel like a pause. */
  size?: "sm" | "md" | "lg";
  /** Overlay film grain. Only legible on dark tones. */
  grain?: boolean;
  /** Skip the built-in Container when the section manages its own width. */
  bleed?: boolean;
  className?: string;
  containerClassName?: string;
  "aria-labelledby"?: string;
}

const sizes = {
  sm: "py-[calc(var(--spacing-section)*0.7)]",
  md: "py-section",
  lg: "py-section-lg",
} as const;

export function Section({
  children,
  id,
  tone = "cream",
  size = "md",
  grain = false,
  bleed = false,
  className,
  containerClassName,
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative isolate overflow-hidden", tones[tone], sizes[size], className)}
      {...rest}
    >
      {grain && <div className="grain" aria-hidden="true" />}
      {bleed ? (
        children
      ) : (
        <Container className={cn("relative", containerClassName)}>{children}</Container>
      )}
    </section>
  );
}
