"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { Button } from "@/components/ui/Button";
import { HamburgerMenu, CloseCircle } from "iconsax-reactjs";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const links = [
  { label: "About", href: "#about", id: "about" },
  { label: "Fellows Programme", href: "#programme", id: "programme" },
  { label: "Curriculum", href: "#curriculum", id: "curriculum" },
  { label: "Testimonials", href: "#testimonials", id: "testimonials" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(links.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-18 transition-all duration-300",
          scrolled || menuOpen
            ? "bg-brown-dark/95 backdrop-blur-md border-b border-gold/15"
            : "bg-transparent"
        )}
      >
        <Container className="h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" onClick={close} className="flex items-center gap-2">
            <span className="font-display text-2xl font-semibold text-cream tracking-tight">
              SIMTI
            </span>
          </Link>

          {/* Nav links — desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors duration-200",
                  active === l.id ? "text-gold" : "text-cream/85 hover:text-gold-light"
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + mobile hamburger */}
          <div className="flex items-center gap-4">
            <Button variant="primary" size="sm" href="/apply" className="hidden md:inline-flex">
              Apply Now
            </Button>

            <button
              className="md:hidden text-cream p-1 focus-visible:outline-none"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? (
                <CloseCircle size={28} color="currentColor" />
              ) : (
                <HamburgerMenu size={28} color="currentColor" />
              )}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-brown-dark flex flex-col pt-18 transition-transform duration-300 md:hidden",
          menuOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col gap-1 px-6 py-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={close}
              className={cn(
                "font-display text-3xl font-medium py-3 border-b border-cream/10 transition-colors",
                active === l.id ? "text-gold" : "text-cream/85 hover:text-gold-light"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="px-6 mt-2">
          <Button
            variant="primary"
            size="lg"
            href="/apply"
            className="w-full justify-center"
            onClick={close}
          >
            Apply Now
          </Button>
        </div>
      </div>
    </>
  );
}
