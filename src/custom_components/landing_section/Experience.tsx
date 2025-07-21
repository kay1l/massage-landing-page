// components/landing_section/ExperienceSection.tsx
"use client";

import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      className="bg-[#FEF3E2] text-[#5C4A42] py-20 px-6 scroll-mt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-4xl font-bold">Your Experience</h2>
        <p className="text-lg leading-relaxed">
          Booking a massage is as simple as one click. No need to step out — just choose your desired service, fill in your details, and confirm. For your protection, we don’t allow choosing a specific therapist. This ensures safety and fairness across our team.
        </p>
        <p className="text-lg leading-relaxed">
          Once booked, our licensed therapist will travel to your location, bringing everything needed for a relaxing, professional massage experience — right at the comfort of your home.
        </p>
      </div>
    </motion.section>
  );
}
