import { cn } from "@/lib/utils";

interface DividerProps {
  variant?: "gradient" | "full" | "center";
  className?: string;
}

export function Divider({ variant = "gradient", className }: DividerProps) {
  if (variant === "full") {
    return <hr className={cn("w-full h-px bg-border border-none", className)} />;
  }

  return (
    <div
      className={cn(
        "h-0.5 w-16 my-6 bg-linear-to-r from-gold to-transparent",
        variant === "center" && "mx-auto",
        className
      )}
    />
  );
}
