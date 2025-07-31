"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="relative py-24 px-6 bg-[#FEF3E2] text-[#5C4A42] scroll-mt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Optional decorative background */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-[#FFB22C] rounded-full blur-xl opacity-30" />

      <div className="max-w-3xl mx-auto space-y-6 relative z-10">
        <h2 className="text-4xl font-semibold text-center mb-2">About Us</h2>
        <div className="w-24 h-[3px] bg-[#F3C623] mx-auto rounded-full mb-6" />

        <div className="border-l-4 border-[#F3C623] pl-6 text-lg leading-relaxed tracking-wide space-y-4">
          <p>
            At <span className="font-medium">Shaisha's Leisure Hub</span>, we believe in the healing power of touch. Our professional therapists are passionate about helping clients achieve well-being through personalized treatments.
          </p>
          <p>
            Based in the beautiful city of <span className="font-medium">Dumaguete, Negros Oriental</span>, we bring the spa experience to your doorstep—offering home massage services that prioritize your comfort, privacy, and convenience.
          </p>
        </div>

        <blockquote className="italic text-center text-[#FA812F] text-lg mt-10">
          “Our hands listen to your body’s needs — and bring it back to balance.”
        </blockquote>
      </div>
    </motion.section>
  );
}
