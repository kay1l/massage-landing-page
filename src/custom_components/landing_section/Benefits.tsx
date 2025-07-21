// components/landing_section/BenefitsSection.tsx
"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Professional licensed therapists",
  "Tailored treatments to your needs",
  "Home comfort & convenience",
  "Improved sleep & reduced stress",
  "No need to travel or wait",
];

export default function BenefitsSection() {
  return (
    <motion.section
      id="benefits"
      className="bg-[#FEF3E2] text-[#5C4A42] py-20 px-6 scroll-mt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-4xl font-bold mb-4">Why Book With Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="text-[#FA812F] w-6 h-6 mt-1" />
              <p className="text-lg font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
