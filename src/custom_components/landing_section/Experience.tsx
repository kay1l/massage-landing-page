"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Truck, ShieldCheck } from "lucide-react";

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
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-4xl mb-4 text-[#FA812F] font-bold">
            Experience the Luxury Touch of Our Therapist
          </h2>
          <div className="w-24 h-[3px] bg-[#F3C623] mx-auto rounded-full" />
        </div>

        {/* Description + Image side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Description */}
          <div className="space-y-4 text-[16px] sm:text-base leading-relaxed">
            <p>
              Booking a massage is as simple as one click. No need to step out
              just choose your desired service, fill in your details, and
              confirm. For your protection, we don’t allow choosing a specific
              therapist. This ensures safety and fairness across our team.
            </p>
            <p>
              Once booked, our professional therapist will travel to your
              location, bringing everything needed for a relaxing, professional
              massage experience right at the comfort of your home.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="/images/experience-massage.jpg"
              alt="In-home massage experience"
              width={500}
              height={350}
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* Responsive Feature Icons */}
        <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
          <Feature
            icon={
              <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 text-[#FA812F]" />
            }
            title="Safe & Secure"
            desc="No specific therapist selection for mutual safety and fairness."
          />
          <Feature
            icon={
              <Truck className="w-10 h-10 sm:w-12 sm:h-12 text-[#F3C623]" />
            }
            title="We Come to You"
            desc="Our professional therapist arrives at your home, fully equipped."
          />
          <Feature
            icon={
              <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-[#FFB22C]" />
            }
            title="Spa-Quality Relaxation"
            desc="Get a full professional massage without leaving your house."
          />
        </div>
      </div>
    </motion.section>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col items-center text-center max-w-[280px] space-y-2 px-2">
      <div>{icon}</div>
      <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
      <div className="w-20 h-[2px] bg-[#F3C623] mx-auto rounded-full mb-1" />
      <p className="text-base sm:text-[17px] leading-normal">{desc}</p>
    </div>
  );
}
