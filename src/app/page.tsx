"use client";

import { useState } from "react";
import { OpeningLoader } from "@/components/OpeningLoader";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
// import { TestimonialsSection } from "@/sections/Testimonials";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {/* ✅ Show loader until animation finishes */}
      {!isLoaded && <OpeningLoader onFinish={() => setIsLoaded(true)} />}

      {/* ✅ Render site only after loader */}
      {isLoaded && (
        <>
          <Header />
          <HeroSection />
          <ProjectsSection />
          <TapeSection />
          {/* <TestimonialsSection /> */}
          <AboutSection />
          <ContactSection />
          <Footer />
        </>
      )}
    </>
  );
}
