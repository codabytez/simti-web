import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn, isExternal } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface CommonProps {
  variant?: Variant;
  size?: Size;
}

/**
 * Discriminated on `href`, so TypeScript enforces the right attribute set for
 * each rendered element. Previously this was typed as button-only and dropped
 * `...props` entirely on the link branch, which silently swallowed handlers —
 * the mobile drawer's `onClick={close}` never ran.
 */
type ButtonAsButton = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

type ButtonAsLink = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "group relative inline-flex items-center justify-center gap-2 font-semibold uppercase tracking-wide rounded-sm cursor-pointer " +
  "transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out " +
  "focus-visible:outline-2 focus-visible:outline-offset-3 " +
  "disabled:opacity-50 disabled:pointer-events-none " +
  "motion-safe:hover:-translate-y-px active:translate-y-0";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-near-black hover:bg-gold-light hover:shadow-gold focus-visible:outline-gold-light",
  secondary:
    "bg-transparent text-brown border-2 border-brown hover:bg-brown hover:text-cream focus-visible:outline-brown",
  ghost:
    "bg-transparent text-cream border border-cream/40 hover:border-cream hover:bg-cream/10 focus-visible:outline-cream",
};

const sizes: Record<Size, string> = {
  sm: "text-xs px-5 py-2.5",
  md: "text-sm px-8 py-3.5",
  lg: "text-sm px-10 py-4",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (rest.href !== undefined) {
    const { href, ...anchorProps } = rest;

    return (
      <Link
        href={href}
        className={classes}
        {...(isExternal(href) && { target: "_blank", rel: "noopener noreferrer" })}
        {...anchorProps}
      >
        {children}
      </Link>
    );
  }

  const { type, ...buttonProps } = rest;

  return (
    <button type={type ?? "button"} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
