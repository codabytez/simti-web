import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google";
import { MotionProvider } from "@/components/motion";
import { site } from "@/lib/site";
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
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}: ${site.tagline} | Clinical Skin Training for Pharmacists`,
    template: `%s | ${site.name}`,
  },
  description:
    "SIMTI trains Nigerian pharmacists in clinical skin practice through the Barrier-First Framework. Cohort 2 runs live on Zoom across five intensive days in October 2026.",
  applicationName: site.name,
  keywords: [
    "clinical skin training",
    "pharmacist training Nigeria",
    "skin of colour dermatology",
    "Barrier-First Framework",
    "SIMTI cohort programme",
    "PCN pharmacist CPD",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: site.url,
    siteName: site.fullName,
    title: `${site.name}: ${site.tagline}`,
    description: "Clinical skin training for pharmacists in Nigeria. Cohort 2 opens October 2026.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name}: ${site.tagline}`,
    description: "Clinical skin training for pharmacists in Nigeria.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#3d1f18",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: site.name,
  legalName: site.fullName,
  alternateName: site.fullName,
  description:
    "Clinical skin training institute for pharmacists in Nigeria, teaching the Barrier-First Framework.",
  url: site.url,
  email: site.email,
  slogan: site.tagline,
  logo: `${site.url}/logo.png`,
  image: `${site.url}/logo.png`,
  foundingDate: "2025",
  areaServed: { "@type": "Country", name: "Nigeria" },
  sameAs: [site.social.instagram, site.social.linkedin, site.social.facebook, site.social.tiktok],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-NG"
      className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/*
          Framer Motion serialises its initial variant as inline styles, so the
          prerendered HTML ships with `opacity: 0` on every animated element.
          Without scripting those styles are never cleared and the page reads as
          blank — this restores it. <noscript> is the only way to scope a rule to
          "JS unavailable" from CSS alone.
        */}
        <noscript>
          <style>
            {
              // Descendants are covered too: nested motion elements (the barrier
              // diagram's layer groups, for one) serialise their own hidden state,
              // and restoring only the roots would leave them blank.
              // `.grain` is reinstated afterwards — it's a decorative overlay that
              // relies on a low opacity the reset above would otherwise blow out.
              `[data-motion],[data-motion] *{opacity:1!important;transform:none!important}` +
                `.grain{opacity:.14!important}`
            }
          </style>
        </noscript>
      </head>
      <body className="min-h-full flex flex-col font-body bg-cream text-brown-dark">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-gold focus:text-near-black focus:text-sm focus:font-semibold focus:rounded-sm"
        >
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
