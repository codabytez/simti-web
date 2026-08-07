import type { SVGProps } from "react";

/**
 * Local icon set.
 *
 * These replace `iconsax-reactjs`, an unmaintained 0.0.x package that shipped
 * ~18MB to provide the seven glyphs below. Drawn on a 24px grid with a 1.5
 * stroke to match the type's weight; `currentColor` throughout so they inherit
 * from their container rather than needing a colour prop.
 */

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Icon({ size = 24, children, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M8 2v3M16 2v3M3.5 9.09h17M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z" />
      <path d="m15.7 13.7-3.4 3.4-1.7-1.7" />
    </Icon>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z" />
      <path d="M15.71 15.18 12.61 13.33c-.54-.32-.98-1.09-.98-1.72V7.51" />
    </Icon>
  );
}

export function AwardIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 15.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
      <path d="m18.2 14.06-.79 5.55c-.15 1.07-.98 1.42-1.87.79l-3.06-2.16a.9.9 0 0 0-.96 0l-3.06 2.16c-.89.63-1.72.28-1.87-.79l-.79-5.55" />
    </Icon>
  );
}

export function PeopleIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9.16 10.87a1.5 1.5 0 0 0-.27 0 3.63 3.63 0 0 1-3.5-3.63A3.63 3.63 0 0 1 9.02 3.6a3.64 3.64 0 0 1 .14 7.27ZM16.41 5.4a2.87 2.87 0 0 1 .29 5.72 1.2 1.2 0 0 0-.22 0" />
      <path d="M5.16 14.56c-1.99 1.33-1.99 3.5 0 4.82 2.26 1.52 5.97 1.52 8.23 0 1.99-1.33 1.99-3.5 0-4.82-2.25-1.51-5.96-1.51-8.23 0ZM17.59 18.6c.59-.13 1.15-.37 1.61-.73 1.28-.96 1.28-2.54 0-3.5-.45-.35-1-.59-1.58-.72" />
    </Icon>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3 7h18M3 12h18M3 17h18" />
    </Icon>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Icon>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
      <path d="M3 16v1.5C3 19.99 4.01 21 6.5 21h11c2.49 0 3.5-1.01 3.5-3.5V16" />
    </Icon>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M7.5 21h9c3 0 4.5-1.5 4.5-4.5v-9C21 4.5 19.5 3 16.5 3h-9C4.5 3 3 4.5 3 7.5v9C3 19.5 4.5 21 7.5 21Z" />
      <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM17.14 7h.01" />
    </Icon>
  );
}

export function LinkedInIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.13 1.44-2.13 2.94v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function FacebookIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M22.68 0H1.32C.59 0 0 .59 0 1.32v21.36C0 23.41.59 24 1.32 24h11.5v-9.3H9.7v-3.62h3.12V8.41c0-3.1 1.89-4.79 4.65-4.79 1.32 0 2.46.1 2.79.14v3.24h-1.92c-1.5 0-1.8.72-1.8 1.76v2.31h3.59l-.47 3.62h-3.12V24h6.12c.73 0 1.32-.59 1.32-1.32V1.32C24 .59 23.41 0 22.68 0Z" />
    </svg>
  );
}

export function TikTokIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M16.5 0h-3.4v16.3c0 1.65-1.32 3-2.96 3a2.98 2.98 0 0 1-2.97-3 2.98 2.98 0 0 1 2.97-3c.3 0 .6.05.87.13V9.9a6.6 6.6 0 0 0-.87-.06 6.42 6.42 0 0 0-6.4 6.43A6.42 6.42 0 0 0 10.14 22a6.42 6.42 0 0 0 6.4-6.43V8.06a8.36 8.36 0 0 0 4.86 1.56V6.2a4.99 4.99 0 0 1-4.9-6.2Z" />
    </svg>
  );
}
