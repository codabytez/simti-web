import { cn } from "@/lib/utils";

interface StatBlockProps {
  number: string;
  label: string;
  className?: string;
}

export function StatBlock({ number, label, className }: StatBlockProps) {
  return (
    <div className={cn("text-center py-8 px-6", className)}>
      <span className="block font-mono text-5xl font-medium text-gold leading-none mb-2">
        {number}
      </span>
      <span className="block text-sm font-medium text-cream uppercase tracking-wide opacity-80">
        {label}
      </span>
    </div>
  );
}
