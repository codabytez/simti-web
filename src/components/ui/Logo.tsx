import Image from "next/image";
import logo from "@/assets/logo.png";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  /** Pixel size of the seal. */
  size?: number;
  /** Show the SIMTI wordmark beside the seal. */
  wordmark?: boolean;
  className?: string;
}

/**
 * The seal carries its own SIMTI lettering, but it's unreadable much below
 * ~120px, so the wordmark is set alongside it at nav sizes rather than relying
 * on the mark alone. Standard practice for crest-style marks.
 */
export function Logo({ size = 40, wordmark = true, className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src={logo}
        alt=""
        width={size}
        height={size}
        priority
        className="shrink-0"
        style={{ width: size, height: size }}
      />
      {wordmark && (
        <span className="font-display text-2xl font-semibold tracking-tight leading-none">
          {site.name}
        </span>
      )}
    </span>
  );
}
