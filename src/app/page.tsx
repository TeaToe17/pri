"use client";

import { useEffect } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import PracticeAreas from "@/components/practice-areas";
import Experience from "@/components/experience";
import Awards from "@/components/awards";
import Statistics from "@/components/statistics";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    // Dynamic import remains necessary for Next.js SSR
    const initLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      // V5 initializes automatically on the document body without arguments
      const locomotiveScroll = new LocomotiveScroll();
    };

    initLocomotiveScroll();
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Experience />
        <Statistics />
        <Awards />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
