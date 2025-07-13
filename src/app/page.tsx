"use client";

import { useState, useEffect } from "react";
import Header from "@/custom_components/landing_section/Header";
import Hero from "@/custom_components/landing_section/Hero";
import AboutSection from "@/custom_components/landing_section/About";
import ContactSection from "@/custom_components/landing_section/Contact";
import RatesSection from "@/custom_components/landing_section/Rates";
import ServicesSection from "@/custom_components/landing_section/Services";
import TherapistsSection from "@/app/therapist";
import LoadingScreen from "@/custom_components/LoadingScreen";

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
    <main>
      <Header />
      <Hero />
      <ServicesSection />
      <AboutSection />
      <TherapistsSection />
      <RatesSection />
      <ContactSection />
    </main>
  );
}
