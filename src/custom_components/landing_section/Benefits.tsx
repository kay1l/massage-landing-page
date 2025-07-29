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
      className="relative bg-[#FEF3E2] text-[#5C4A42] pt-0 pb-20 px-6 scroll-mt-20 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      viewport={{ once: true }}
    >
      {/* 🌊 Animated Triple Wave */}
      <div className="w-full overflow-hidden leading-none relative z-0">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-[100px]"
          preserveAspectRatio="none"
        >
          {/* Wave 1 - Foreground */}
          <path fill="#FA812F" opacity="1">
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
                M0,160 C360,280 1080,40 1440,160 L1440,320 L0,320 Z;
                M0,140 C360,100 1080,220 1440,140 L1440,320 L0,320 Z;
                M0,160 C360,280 1080,40 1440,160 L1440,320 L0,320 Z"
            />
          </path>

          {/* Wave 2 - Mid layer */}
          <path fill="#FFBD59" fillOpacity="0.7">
            <animate
              attributeName="d"
              dur="7s"
              repeatCount="indefinite"
              values="
                M0,180 C300,250 1140,70 1440,180 L1440,320 L0,320 Z;
                M0,160 C300,140 1140,260 1440,160 L1440,320 L0,320 Z;
                M0,180 C300,250 1140,70 1440,180 L1440,320 L0,320 Z"
            />
          </path>

          {/* Wave 3 - Background layer */}
          <path fill="#FFF2CC" fillOpacity="0.6">
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="
                M0,190 C400,220 1040,80 1440,190 L1440,320 L0,320 Z;
                M0,170 C400,180 1040,240 1440,170 L1440,320 L0,320 Z;
                M0,190 C400,220 1040,80 1440,190 L1440,320 L0,320 Z"
            />
          </path>
        </svg>
      </div>

      {/* 💬 Section Content */}
      <div className="max-w-4xl mx-auto text-center space-y-6 mt-2 z-10 relative">
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
