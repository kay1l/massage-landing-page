"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Header from "@/custom_components/landing_section/Header";
import Hero from "@/custom_components/landing_section/Hero";
import AboutSection from "@/custom_components/landing_section/About";
import ContactSection from "@/custom_components/landing_section/Contact";
import ServicesSection from "@/custom_components/landing_section/Services";
import LoadingScreen from "@/custom_components/LoadingScreen";
import ScrollToTopButton from "@/custom_components/ScrollToTopButton";
import Footer from "@/custom_components/landing_section/Footer";
import Testimonials from "@/custom_components/landing_section/Testimonials";
import BenefitsSection from "@/custom_components/landing_section/Benefits";
import ExperienceSection from "@/custom_components/landing_section/Experience";
import BackgroundAudio from "@/custom_components/BackgroundAudio";
import TherapistsSection from "@/custom_components/landing_section/Therapist";
import FadeOutUpSection from "@/custom_components/FadeOutUpScroll";

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
    <div className="relative overflow-hidden">
      {/* 🌄 Background */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.02 }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-[-3]"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />

      <div className="fixed top-0 left-0 w-full h-full bg-[#FEF3E2]/70 z-[-2]" />

        {/* 🌿 Bamboo Pattern Left Border (animated) */}
          <div
            className="fixed top-0 bottom-0 left-[1vw] w-6 sm:w-6 md:w-8 lg:w-8 z-[-1] animate-bamboo"
            style={{
              backgroundImage: "url('/images/bamboo-border.png')",
              backgroundRepeat: "repeat-y",
              backgroundPosition: "center",
              backgroundSize: "auto 100px",
              opacity: 0.8,
            }}
          />

          {/* 🌿 Bamboo Pattern Right Border (animated) */}
          <div
            className="fixed top-0 bottom-0 right-[1vw] w-6 sm:w-6 md:w-8 lg:w-8 z-[-1] animate-bamboo"
            style={{
              backgroundImage: "url('/images/bamboo-border.png')",
              backgroundRepeat: "repeat-y",
              backgroundPosition: "center",
              backgroundSize: "auto 100px",
              opacity: 0.8,
            }}
          />


      <main className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 py-6">
        <div className="max-w-[1200px] mx-auto rounded-xl p-6">
          <ScrollToTopButton />
          <Header />
          <BackgroundAudio />

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Hero />
          </motion.div>

          <FadeOutUpSection>
            <ServicesSection />
          </FadeOutUpSection>

          <FadeOutUpSection>
            <BenefitsSection />
          </FadeOutUpSection>

          <FadeOutUpSection>
            <ExperienceSection />
          </FadeOutUpSection>

          <FadeOutUpSection>
            <Testimonials />
          </FadeOutUpSection>

          <FadeOutUpSection>
            <TherapistsSection />
          </FadeOutUpSection>

          <FadeOutUpSection>
            <AboutSection />
          </FadeOutUpSection>

          <FadeOutUpSection>
            <ContactSection />
          </FadeOutUpSection>

          <Footer />
        </div>
      </main>
    </div>
  );
}
