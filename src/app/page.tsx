"use client"


import Header from "@/custom_components/Header";
import Hero from "@/custom_components/Hero";
import AboutSection from "@/custom_components/landing_section/About";
import ContactSection from "@/custom_components/landing_section/Contact";
import RatesSection from "@/custom_components/landing_section/Rates";
import ServicesSection from "@/custom_components/landing_section/Services";
import TherapistsSection from "@/app/therapist";

export default function Home() {
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
