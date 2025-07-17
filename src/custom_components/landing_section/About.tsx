"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="relative py-24 px-6 bg-[#FAF8F6] text-[#5C4A42] scroll-mt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Optional decorative background */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-teal-100 rounded-full blur-xl opacity-30" />

      <div className="max-w-3xl mx-auto space-y-6 relative z-10">
        <h2 className="text-4xl font-semibold text-center mb-2">
          About Us
        </h2>
        <div className="w-24 h-[3px] bg-teal-500 mx-auto rounded-full mb-6" />

        <div className="border-l-4 border-teal-300 pl-6 text-lg leading-relaxed tracking-wide space-y-4">
          <p>
            At <span className="font-medium">Arturo Siete Massage</span>, we believe in the healing power of touch. Our licensed therapists are passionate about helping clients achieve well-being through personalized treatments.
          </p>
          <p>
            Located on the beautiful island of <span className="font-medium">Negros</span>, our massage studio is a peaceful sanctuary designed for your relaxation and renewal.
          </p>
        </div>

        <blockquote className="italic text-center text-brown-600 text-lg mt-10">
          “Our hands listen to your body’s needs — and bring it back to balance.”
        </blockquote>
      </div>
    </motion.section>
  );
}
