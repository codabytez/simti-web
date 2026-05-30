import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="bg-brown-dark min-h-screen flex items-center pt-18">
        <div className="absolute inset-0 opacity-[0.12] bg-[url('/noise.svg')] pointer-events-none" />
        <Container className="relative z-10 py-32 text-center">
          <Eyebrow variant="light" className="justify-center">
            404
          </Eyebrow>
          <h1 className="font-display text-5xl lg:text-7xl font-semibold text-cream leading-tight mb-6 max-w-2xl mx-auto">
            This page doesn&apos;t exist.
          </h1>
          <p className="text-cream/60 text-lg mb-10 max-w-md mx-auto leading-relaxed">
            The page you&apos;re looking for may have moved or never existed.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="primary" href="/">
              Back to Home
            </Button>
            <Button variant="ghost" href="/apply">
              Apply for the Fellowship
            </Button>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
