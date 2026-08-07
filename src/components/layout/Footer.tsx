import Link from "next/link";
import { Container } from "./Container";
import { InstagramIcon, LinkedInIcon, Logo } from "@/components/ui";
import { site } from "@/lib/site";

const programme = [
  { label: "About SIMTI", href: "#about" },
  { label: "Programme", href: "#programme" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Apply", href: site.applyUrl },
];

const socials = [
  { label: "Instagram", href: site.social.instagram, Icon: InstagramIcon },
  { label: "LinkedIn", href: site.social.linkedin, Icon: LinkedInIcon },
];

function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

/**
 * A server component — nothing here needs interactivity, so it stays out of the
 * client bundle. The "Resources" column was removed: every link in it pointed at
 * `href="#"`, which reads as a real destination and isn't one.
 */
export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-near-black text-cream">
      <div className="grain" aria-hidden="true" />

      <Container className="relative pt-20 pb-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            {/* Big enough here that the seal's own lettering reads, so the
                wordmark would be redundant. */}
            <Logo size={92} wordmark={false} />
            <p className="mt-4 font-display text-lg italic text-gold-light/80">{site.tagline}</p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/50">
              Clinical skin training for licensed pharmacists in Nigeria, built on the Barrier-First
              Framework.
            </p>

            <ul className="mt-7 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${site.name} on ${label}`}
                    className="grid place-items-center w-10 h-10 rounded-full border border-cream/12
                               text-cream/50 transition-colors duration-200
                               hover:text-gold-light hover:border-gold/40"
                  >
                    <Icon size={18} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-labelledby="footer-programme">
            <h2
              id="footer-programme"
              className="text-2xs font-semibold uppercase tracking-[0.18em] text-gold-light"
            >
              Programme
            </h2>
            <ul className="mt-5 flex flex-col gap-3.5">
              {programme.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    {...(isExternal(l.href) && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="text-sm text-cream/55 transition-colors hover:text-cream"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-2xs font-semibold uppercase tracking-[0.18em] text-gold-light">
              Contact
            </h2>
            <ul className="mt-5 flex flex-col gap-3.5 text-sm text-cream/55">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-cream wrap-break-word"
                >
                  {site.email}
                </a>
              </li>
              <li>Nigeria</li>
            </ul>
          </div>
        </div>

        <hr className="rule-fade mt-14 text-cream" />

        <p className="mt-6 text-center text-xs text-cream/35">
          © {new Date().getFullYear()} {site.name}: {site.fullName}.
        </p>
      </Container>
    </footer>
  );
}
