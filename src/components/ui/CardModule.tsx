import { cn } from "@/lib/utils";

interface CardModuleProps {
  number: string;
  title: string;
  description?: string;
  className?: string;
}

export function CardModule({ number, title, description, className }: CardModuleProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-5 bg-cream border border-border border-l-4 border-l-teal rounded-r-xl px-8 py-6",
        className
      )}
    >
      <span className="font-mono min-w-8 pt-0.75 text-sm font-medium text-teal">{number}</span>
      <div>
        <h4 className="text-lg font-semibold text-brown-dark mb-2">{title}</h4>
        {description && <p className="text-sm text-brown-light leading-relaxed">{description}</p>}
      </div>
    </div>
  );
}
