"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "./Container";
import { Button, CloseIcon, Logo, MenuIcon } from "@/components/ui";
import { useActiveSection } from "@/hooks/useActiveSection";
import { showTestimonials } from "@/lib/content";
import { transition } from "@/lib/motion";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

// Dropped alongside the section itself — a nav item pointing at an anchor that
// no longer renders would scroll nowhere.
const links = [
  { label: "About", href: "#about", id: "about" },
  { label: "Programme", href: "#programme", id: "programme" },
  { label: "Curriculum", href: "#curriculum", id: "curriculum" },
  ...(showTestimonials
    ? [{ label: "Testimonials", href: "#testimonials", id: "testimonials" }]
    : []),
];

const sectionIds = links.map((l) => l.id);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const reduceMotion = useReducedMotion();

  const drawerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the drawer, compensating for the scrollbar's width so
  // the fixed header doesn't shift when it disappears.
  useEffect(() => {
    if (!menuOpen) return;
    const { body, documentElement } = document;
    const scrollbar = window.innerWidth - documentElement.clientWidth;
    const prevOverflow = body.style.overflow;
    const prevPadding = body.style.paddingRight;

    body.style.overflow = "hidden";
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;

    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPadding;
    };
  }, [menuOpen]);

  // Escape to dismiss, and keep Tab inside the drawer while it owns the screen.
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        triggerRef.current?.focus();
        return;
      }

      if (e.key !== "Tab") return;

      const focusables = drawerRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, close]);

  // Move focus into the drawer once it opens.
  useEffect(() => {
    if (!menuOpen) return;
    const first = drawerRef.current?.querySelector<HTMLElement>("a[href]");
    first?.focus();
  }, [menuOpen]);

  return (
    <>
      <motion.header
        data-motion=""
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 h-18",
          "transition-[background-color,border-color,backdrop-filter] duration-300 ease-out",
          scrolled || menuOpen
            ? "bg-brown-dark/90 backdrop-blur-md border-b border-gold/15"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <Container className="h-full flex items-center justify-between gap-6">
          <Link
            href="/"
            onClick={close}
            aria-label={`${site.name} — home`}
            className="rounded-sm text-cream"
          >
            <Logo size={38} />
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active === l.id ? "true" : undefined}
                    className={cn(
                      "relative py-1 text-sm font-medium tracking-wide rounded-sm",
                      "transition-colors duration-200",
                      "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-gold",
                      "after:origin-left after:transition-transform after:duration-300 after:ease-editorial",
                      active === l.id
                        ? "text-gold after:scale-x-100"
                        : "text-cream/80 hover:text-gold-light after:scale-x-0 hover:after:scale-x-100"
                    )}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              href={site.applyUrl}
              className="hidden md:inline-flex"
            >
              Apply Now
            </Button>

            <button
              ref={triggerRef}
              type="button"
              className="md:hidden -mr-1 p-2 text-cream rounded-sm"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <CloseIcon size={26} /> : <MenuIcon size={26} />}
            </button>
          </div>
        </Container>
      </motion.header>

      {/*
        Rendered conditionally rather than parked offscreen. The previous drawer
        stayed mounted with `translate-x-full` and `aria-hidden`, so its links
        remained in the tab order — keyboard users could tab into an invisible
        menu, and `aria-hidden` over focusable content is itself invalid.
      */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={reduceMotion ? { duration: 0.15 } : transition.drawer}
            className="fixed inset-0 z-40 bg-brown-dark flex flex-col pt-18 md:hidden"
          >
            <div className="grain" aria-hidden="true" />

            <nav aria-label="Mobile" className="relative flex flex-col px-6 py-8">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={l.href}
                    onClick={close}
                    aria-current={active === l.id ? "true" : undefined}
                    className={cn(
                      "block font-display text-3xl font-medium py-3.5",
                      "border-b border-cream/10 transition-colors",
                      active === l.id ? "text-gold" : "text-cream/85 hover:text-gold-light"
                    )}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              className="relative px-6 mt-2"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Button
                variant="primary"
                size="lg"
                href={site.applyUrl}
                className="w-full"
                onClick={close}
              >
                Apply Now
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
