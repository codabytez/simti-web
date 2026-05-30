import { cn } from "@/lib/utils";

type BadgeVariant = "gold" | "teal" | "brown";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  gold: "bg-gold-pale text-brown-dark border border-gold",
  teal: "bg-teal/10 text-teal-dark border border-teal",
  brown: "bg-brown/10 text-brown border border-brown-light",
};

export function Badge({ children, variant = "gold", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
