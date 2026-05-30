import { cn } from "@/lib/utils";

type EyebrowVariant = "default" | "light" | "teal";

interface EyebrowProps {
  children: React.ReactNode;
  variant?: EyebrowVariant;
  className?: string;
}

const variants: Record<EyebrowVariant, string> = {
  default: "text-gold before:bg-gold",
  light: "text-gold-light before:bg-gold-light",
  teal: "text-teal-light before:bg-teal-light",
};

export function Eyebrow({ children, variant = "default", className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-4",
        "before:content-[''] before:block before:w-6 before:h-[1.5px]",
        variants[variant],
        className
      )}
    >
      {children}
    </p>
  );
}
