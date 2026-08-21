"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Publication from "@/components/Publication";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PixelGrid from "@/components/PixelGrid";

const CRTEffect = dynamic(() => import("@/components/CRTEffect"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <PixelGrid />
      <CRTEffect />
      <Navbar />
      <main className="relative z-10 flex-1">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Publication />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
