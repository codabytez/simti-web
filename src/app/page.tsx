import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { FellowsProgramme } from "@/components/sections/FellowsProgramme";
import { Curriculum } from "@/components/sections/Curriculum";
import { Testimonials } from "@/components/sections/Testimonials";
import { StatsBar } from "@/components/sections/StatsBar";
import { WhoIsItFor } from "@/components/sections/WhoIsItFor";
import { ApplicationCTA } from "@/components/sections/ApplicationCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Problem />
        <Solution />
        <FellowsProgramme />
        <Curriculum />
        <Testimonials />
        <StatsBar />
        <WhoIsItFor />
        <ApplicationCTA />
      </main>
      <Footer />
    </>
  );
}
