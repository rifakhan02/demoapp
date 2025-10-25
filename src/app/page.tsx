"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";
import Projects from "@/components/Projects";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <hr className="border-gray-800 opacity-80 pt-4 mb-6" />
      <About />
      <hr className="border-gray-800 opacity-80 pt-4 mb-6" />
      <Education />
      <hr className="border-gray-800 opacity-80 pt-4 mb-6" />
      <Skills />
      <Certificates />
      <hr className="border-gray-800 opacity-80 pt-4 mb-6" />
      <Projects />
      <hr className="border-gray-800 opacity-80 pt-4 mb-6" />
      <Connect />
      <hr className="border-gray-800 opacity-80 pt-4 mb-6" />
      <Footer />
    </div>
  );
}
