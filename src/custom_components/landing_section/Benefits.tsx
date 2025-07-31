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

export default function TherapistsSection() {
  return (
    <motion.section
      className="relative bg-[#FEF3E2] text-[#5C4A42] pt-0 pb-20 px-6 scroll-mt-20 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      {/* 🌊 Animated Triple Wave */}
      {/* <div className="w-full overflow-hidden leading-none relative z-0">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-[100px]"
          preserveAspectRatio="none"
        >
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
      </div> */}

<div className="w-full overflow-hidden leading-none relative z-0">
  <svg
    viewBox="0 0 1440 320"
    className="w-full h-[100px]"
    preserveAspectRatio="none"
  >
    {/* Wave 1 - Foreground (Your Gold) */}
    <path fill="#F3C623" opacity="1">
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

    {/* Wave 2 - Mid Layer (Light Gold) */}
    <path fill="#F5DEB3" fillOpacity="0.7">
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

    {/* Wave 3 - Background (Cream) */}
    <path fill="#FFF8DC" fillOpacity="0.6">
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


      {/* 🌟 Combined Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mt-16 px-4 z-10 relative">
        {/* ✅ Benefits Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-[#FA812F] mt-5">
            Why Book With Us?
          </h2>
          <div className="w-20 h-1 bg-[#F3C623] mt-9 mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="text-[#FA812F] w-6 h-6 mt-1" />
                <p className="text-base font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 🧑‍⚕️ Therapist Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#FA812F] mb-4">
          A Trust-worthy well trained professionals
          </h2>
          <div className="w-20 h-1 bg-[#F3C623] mb-6" />
          <div className="space-y-4 leading-relaxed text-base tracking-wide">
            <p>
              Our therapists are certified experts with years of hands on experience across a wide range of massage disciplines.
              Each has undergone extensive training in techniques such as Swedish, Deep Tissue, Trigger-Point, and Reflexology.
            </p>
            <p>
            Their approach blends technical precision with a warm, caring presence. Whether for relaxation or recovery, you're in expert hands—committed to your health, comfort, and privacy.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
