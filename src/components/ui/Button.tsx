import { cn } from "@/lib/utils";
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
}

const base =
  "inline-flex items-center justify-center font-semibold uppercase tracking-wide rounded-sm cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-near-black hover:bg-gold-light hover:-translate-y-px hover:shadow-gold active:translate-y-0",
  secondary: "bg-transparent text-brown border-2 border-brown hover:bg-brown hover:text-cream",
  ghost: "bg-transparent text-cream border border-cream/50 hover:border-cream hover:bg-cream/10",
};

const sizes: Record<Size, string> = {
  sm: "text-xs px-5 py-2",
  md: "text-sm px-8 py-3.5",
  lg: "text-sm px-10 py-4",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
