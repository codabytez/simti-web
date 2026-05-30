import Link from "next/link";
import { Container } from "./Container";
import { Divider } from "@/components/ui/Divider";
import { Instagram } from "iconsax-reactjs";

const programme = [
  { label: "About SIMTI", href: "#about" },
  { label: "Fellows Programme", href: "#programme" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Apply", href: "#apply" },
];

const resources = [
  { label: "Blog / Articles", href: "#" },
  { label: "Skin of Colour Resources", href: "#" },
  { label: "For Pharmacies", href: "#" },
  { label: "FAQ", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-near-black text-cream">
      <Container className="pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <span className="font-display text-2xl font-semibold text-cream tracking-tight block mb-3">
              SIMTI
            </span>
            <p className="text-sm text-cream/60 italic mb-6">Barrier First, Always</p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-cream/40 hover:text-gold-light transition-colors"
              >
                <Instagram size={20} color="currentColor" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-cream/40 hover:text-gold-light transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Programme */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-light mb-4">
              Programme
            </h4>
            <ul className="space-y-3">
              {programme.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-cream/60 hover:text-cream transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-light mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {resources.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-cream/60 hover:text-cream transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-light mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-cream/60">
              <li>
                <a
                  href="mailto:hello@safeinmyskintraininginstitute.com"
                  className="hover:text-cream transition-colors"
                >
                  hello@safeinmyskintraininginstitute.com
                </a>
              </li>
              <li>Nigeria</li>
            </ul>
          </div>
        </div>

        <Divider variant="full" className="bg-cream/10" />

        <p className="mt-6 text-xs text-cream/30 text-center">
          © {new Date().getFullYear()} SIMTI — Skin Integrity &amp; Management Training Institute.
          &nbsp;
          <Link href="#" className="hover:text-cream/60 transition-colors">
            Privacy Policy
          </Link>
          &nbsp;·&nbsp;
          <Link href="#" className="hover:text-cream/60 transition-colors">
            Terms
          </Link>
        </p>
      </Container>
    </footer>
  );
}
