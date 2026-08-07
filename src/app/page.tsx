import { Footer, Navbar } from "@/components/layout";
import {
  ApplicationCTA,
  Curriculum,
  Hero,
  Problem,
  Programme,
  Solution,
  StatsBar,
  Testimonials,
  WhoIsItFor,
} from "@/components/sections";
import { showTestimonials } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Problem />
        <Solution />
        <Programme />
        <Curriculum />
        {showTestimonials && <Testimonials />}
        <StatsBar />
        <WhoIsItFor />
        <ApplicationCTA />
      </main>
      <Footer />
    </>
  );
}
