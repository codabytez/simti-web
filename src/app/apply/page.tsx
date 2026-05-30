import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ApplyForm } from "@/components/sections/ApplyForm";

export const metadata: Metadata = {
  title: "Apply — SIMTI Fellows Programme",
  description:
    "Apply to become a SIMTI Certified Fellow. A structured clinical skin fellowship for licensed pharmacists in Nigeria.",
};

export default function ApplyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-cream min-h-screen">
        {/* Page header */}
        <div className="relative bg-brown-dark pt-44 pb-28">
          <div className="absolute inset-0 opacity-[0.12] bg-[url('/noise.svg')] pointer-events-none" />
          <Container className="relative z-10">
            <Eyebrow variant="light">Fellows Programme · 2026 Cohort</Eyebrow>
            <h1 className="font-display text-4xl lg:text-6xl font-semibold text-cream leading-tight max-w-2xl mt-2">
              Apply for the Fellowship
            </h1>
            <p className="text-cream/70 mt-4 max-w-xl leading-relaxed">
              Complete the form below. Applications are reviewed on a rolling basis — places are
              limited and awarded on merit.
            </p>
          </Container>
        </div>

        {/* Form */}
        <Container className="py-16 lg:py-24">
          <div className="max-w-2xl">
            <ApplyForm />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
