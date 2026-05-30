import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://safeinmyskintraininginstitute.com"),
  title: "SIMTI — Barrier First, Always | Clinical Skin Training for Pharmacists",
  description:
    "SIMTI trains Nigerian pharmacists to become certified clinical skin experts through the Barrier-First Framework. Join the Fellows Programme today.",
  openGraph: {
    title: "SIMTI — Barrier First, Always",
    description:
      "Clinical skin training for pharmacists in Nigeria. Become a certified SIMTI Fellow.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "SIMTI",
  description: "Clinical skin training institute for pharmacists in Nigeria",
  url: "https://safeinmyskintraininginstitute.com",
  areaServed: "NG",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable} h-full antialiased`}
      style={{ fontFamily: "var(--font-body)" }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-gold focus:text-near-black focus:text-sm focus:font-semibold focus:rounded-sm"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
