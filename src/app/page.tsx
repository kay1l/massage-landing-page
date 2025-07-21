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
import ScrollToTopButton from "@/custom_components/ScrollToTopButton";
import Footer from "@/custom_components/landing_section/Footer";
import { motion } from "framer-motion";
import Testimonials from "@/custom_components/landing_section/Testimonials";

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
    <main >
      <ScrollToTopButton />
      <Header />
  
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Hero />
      </motion.div>
  
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <ServicesSection />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <RatesSection />
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
  );
}
