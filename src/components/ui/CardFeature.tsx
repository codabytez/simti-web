import { cn } from "@/lib/utils";

interface CardFeatureProps {
  icon?: React.ReactNode;
  title: string;
  body: string;
  className?: string;
}

export function CardFeature({ icon, title, body, className }: CardFeatureProps) {
  return (
    <div
      className={cn(
        "relative bg-cream border border-border rounded-xl p-8 overflow-hidden",
        "transition-transform duration-250 hover:-translate-y-1 hover:shadow-lg",
        "before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-0.75",
        // "before:bg-linear-to-r before:from-gold before:to-teal",
        className
      )}
    >
      {icon && (
        <div className="w-12 h-12 bg-gold-pale rounded-lg flex items-center justify-center mb-5">
          {icon}
        </div>
      )}
      <h3 className="font-display text-2xl font-semibold text-brown-dark mb-3 leading-snug">
        {title}
      </h3>
      <p className="text-base text-brown-light leading-relaxed">{body}</p>
    </div>
  );
}
