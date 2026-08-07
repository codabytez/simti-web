import { Container, Footer, Navbar } from "@/components/layout";
import { Button } from "@/components/ui";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <>
      <Navbar />
      {/* `relative` matters: the grain overlay is absolutely positioned, and
          without a positioned ancestor it resolved against the viewport. */}
      <main
        id="main-content"
        className="relative isolate overflow-hidden flex min-h-screen items-center bg-brown-dark pt-18"
      >
        <div className="grain" aria-hidden="true" />
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[45vw] max-w-225
                     rounded-full pointer-events-none blur-3xl
                     bg-[radial-gradient(ellipse,rgba(184,150,58,0.12),transparent_70%)]"
        />

        <Container className="relative py-32 text-center">
          <p className="font-mono tabular text-sm font-medium uppercase tracking-[0.3em] text-gold-light">
            404
          </p>
          <h1 className="mt-6 font-display text-display-lg font-semibold text-cream text-balance mx-auto max-w-2xl">
            This page doesn&apos;t exist.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-lead text-cream/60 text-pretty">
            The page you&apos;re looking for may have moved, or never existed.
          </p>
          <div className="mt-11 flex flex-wrap justify-center gap-4">
            <Button variant="primary" href="/">
              Back to Home
            </Button>
            <Button variant="ghost" href={site.applyUrl}>
              Apply for the Cohort
            </Button>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
