"use client";

import { useState, useEffect } from "react";
import Header from "@/custom_components/landing_section/Header";
import Hero from "@/custom_components/landing_section/Hero";
import AboutSection from "@/custom_components/landing_section/About";
import ContactSection from "@/custom_components/landing_section/Contact";
import ServicesSection from "@/custom_components/landing_section/Services";
import TherapistsSection from "@/app/therapist";
import LoadingScreen from "@/custom_components/LoadingScreen";
import ScrollToTopButton from "@/custom_components/ScrollToTopButton";
import Footer from "@/custom_components/landing_section/Footer";
import Testimonials from "@/custom_components/landing_section/Testimonials";
import BenefitsSection from "@/custom_components/landing_section/Benefits";
import ExperienceSection from "@/custom_components/landing_section/Experience";
import { motion } from "framer-motion";
import BackgroundAudio from "@/custom_components/BackgroundAudio";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="relative">
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.02 }}
        transition={{ duration: 20, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-[-2]"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} // replace if needed
      />

      {/* Soft overlay to reduce distraction */}
      <div className="fixed top-0 left-0 w-full h-full bg-[#FEF3E2]/70 z-[-1]" />

      <main className="relative z-10">
        <ScrollToTopButton />
        <Header />
        <BackgroundAudio />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Hero />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <ServicesSection />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <BenefitsSection />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <ExperienceSection />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Testimonials />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <TherapistsSection />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <AboutSection />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <ContactSection />
        </motion.div>

        <Footer />
      </main>
    </div>
  );
}
