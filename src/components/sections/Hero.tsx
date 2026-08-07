"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/layout";
import { BarrierDiagram, Button, Eyebrow } from "@/components/ui";
import { Reveal, Stagger } from "@/components/motion";
import { heroTrustSignals } from "@/lib/content";
import { site } from "@/lib/site";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Depth on scroll: the portrait drifts slower than the copy, and the whole
  // block fades as it leaves. Framer clamps these when the user has asked for
  // reduced motion via MotionConfig, so no extra guard is needed.
  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[92svh] flex items-center overflow-hidden bg-brown-dark pt-18"
    >
      {/* Warm pool of light behind the copy, so the flat brown reads as lit. */}
      <div
        aria-hidden="true"
        className="absolute -top-1/4 left-[-10%] w-[70vw] h-[70vw] max-w-225 max-h-225 rounded-full pointer-events-none
                   bg-[radial-gradient(circle,rgba(184,150,58,0.14),transparent_65%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-1/3 right-0 w-[55vw] h-[55vw] max-w-175 max-h-175 rounded-full pointer-events-none
                   bg-[radial-gradient(circle,rgba(46,122,143,0.18),transparent_65%)] blur-3xl"
      />
      <div className="grain" aria-hidden="true" />

      <Container className="relative py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-20 items-center">
          <motion.div style={{ y: copyY, opacity: fade }}>
            <Stagger immediate stagger={0.09} delay={0.15}>
              <Reveal className="mb-6">
                <Eyebrow variant="light">Cohort 2 · October 2026</Eyebrow>
              </Reveal>

              <Reveal>
                <h1 className="font-display text-display-xl font-semibold text-cream text-balance">
                  Train to Become Nigeria&apos;s Leading{" "}
                  <em className="italic text-gold-light">Clinical Skin Expert</em>
                </h1>
              </Reveal>

              <Reveal className="mt-5">
                <p className="text-lead text-cream/70 max-w-xl text-pretty">
                  A structured training for licensed pharmacists ready to practise evidence-based
                  skin care grounded in the Barrier-First Framework.
                </p>
              </Reveal>

              <Reveal className="mt-10">
                <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4">
                  <Button variant="primary" size="lg" href={site.applyUrl}>
                    Apply for Cohort 2
                  </Button>
                  <Button variant="ghost" size="lg" href="#curriculum">
                    See Curriculum
                  </Button>
                </div>
              </Reveal>

              <Reveal className="mt-10">
                <ul className="flex flex-wrap gap-x-7 gap-y-3">
                  {heroTrustSignals.map((signal) => (
                    <li key={signal} className="flex items-center gap-2.5 text-sm text-cream/65">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gold shrink-0"
                        aria-hidden="true"
                      >
                        <path d="m5 13 4 4L19 7" />
                      </svg>
                      {signal}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </Stagger>
          </motion.div>

          {/* Portrait column. Hidden below lg — it carries no information, and a
              tall empty frame on mobile only pushes the CTA off screen. */}
          <motion.div
            data-motion=""
            className="relative hidden lg:block"
            style={{ y: portraitY }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          >
            <div
              className="relative aspect-4/5 rounded-2xl overflow-hidden
                         bg-linear-to-br from-brown/50 via-brown-dark to-navy-dark
                         ring-1 ring-inset ring-cream/12 shadow-xl"
            >
              <div className="grain" aria-hidden="true" />
              <BarrierDiagram className="absolute inset-0 h-full" />
            </div>

            <motion.div
              data-motion=""
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
              className="absolute -bottom-7 -left-9 rounded-xl px-7 py-5
                         bg-brown-deep/95 backdrop-blur-sm border border-gold/25 shadow-xl"
            >
              <p className="font-mono tabular text-3xl font-medium text-gold leading-none">4</p>
              <p className="mt-1.5 text-2xs font-semibold uppercase tracking-[0.18em] text-cream/60">
                Live Training Days
              </p>
            </motion.div>

            <div
              aria-hidden="true"
              className="absolute -left-5 top-10 bottom-10 w-px bg-linear-to-b from-transparent via-gold/50 to-transparent"
            />
          </motion.div>
        </div>
      </Container>

      {/* Softens the hard edge into the next section. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-b from-transparent to-cream-dark/95 pointer-events-none"
      />
    </section>
  );
}
