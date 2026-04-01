"use client";

import { LanguageProvider } from "@/contexts/LanguageContext";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Languages from "@/components/sections/Languages";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <ScrollProgressBar />
      <main className="relative">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Languages />
        <Education />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
