import { cn } from "@/lib/utils";

interface CardTestimonialProps {
  quote: string;
  author: string;
  role: string;
  className?: string;
}

/**
 * Uses figure/blockquote/figcaption rather than a stack of divs, so assistive
 * tech announces the attribution as belonging to the quote.
 *
 * Sized for full, multi-paragraph testimonials shown one at a time (see
 * `Testimonials`, which owns the slide-in animation), rather than short
 * pull-quotes packed into a grid — `whitespace-pre-line` preserves the
 * blank-line paragraph breaks authored in `content.ts`.
 */
export function CardTestimonial({ quote, author, role, className }: CardTestimonialProps) {
  return (
    <figure
      className={cn(
        "relative m-0 overflow-hidden",
        "rounded-2xl p-8 lg:p-12 shadow-lg",
        "ring-1 ring-inset ring-cream/10",
        className
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-2 left-7 font-display text-[6rem] leading-none text-gold/25"
      >
        &ldquo;
      </span>

      <blockquote className="relative whitespace-pre-line font-display text-lg lg:text-xl italic leading-relaxed text-cream text-pretty">
        {quote}
      </blockquote>

      <figcaption className="relative mt-8 pt-6 border-t border-cream/12">
        <span className="block text-sm font-semibold uppercase tracking-[0.16em] text-gold-light">
          {author}
        </span>
        <span className="block mt-1 text-sm text-teal-light">{role}</span>
      </figcaption>
    </figure>
  );
}
