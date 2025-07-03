import { OpeningLoader } from "@/components/OpeningLoader";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
export default function Home() {
  return (
    <>
    <OpeningLoader/>
    <div className="relative z-0">
      <Header/>
      <HeroSection/>
      <ProjectsSection/>
      <TapeSection/>
      {/* <TestimonialsSection/> */}
      <AboutSection/>
      <ContactSection/>
      <Footer/>
    </div>
    </>
  );
}
