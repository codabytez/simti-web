import { cn } from "@/lib/utils";

interface CardTestimonialProps {
  quote: string;
  author: string;
  role: string;
  className?: string;
}

export function CardTestimonial({ quote, author, role, className }: CardTestimonialProps) {
  return (
    <div className={cn("relative bg-navy rounded-xl p-10", className)}>
      <span
        className="absolute top-4 left-8 font-display text-[5rem] leading-none text-gold opacity-30 pointer-events-none select-none"
        aria-hidden
      >
        &ldquo;
      </span>
      <p className="relative z-10 font-display text-xl italic text-cream leading-snug mb-6">
        {quote}
      </p>
      <p className="text-sm font-semibold text-gold-light uppercase tracking-widest">{author}</p>
      <p className="text-sm text-teal-light mt-1">{role}</p>
    </div>
  );
}
