"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Avinash Kr",
    role: "Co-Founder at xyz",
    message:
      "Like this video and ask your questions in comment section, don't forget to Subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop.",
    imageUrl: "/images/therapist_images/man.png",
  },
  {
    name: "Bharat Kunal",
    role: "Manager at xyz",
    message:
      "Like this video and ask your questions in comment section, don't forget to Subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop.",
    imageUrl: "/images/therapist_images/man1.png",
  },
  {
    name: "Prabhakar D",
    role: "Founder / CEO at xyz",
    message:
      "Like this video and ask your questions in comment section, don't forget to Subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop.",
    imageUrl: "/images/therapist_images/boy.png",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#FEF3E2]" id="testimonials">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-[#FA812F] mb-4 tracking-tight drop-shadow-sm">
          TESTIMONIALS
        </h2>
        <p className="text-[#5C4A42] text-lg mb-12">
          Hear what our satisfied clients have to say.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-white p-10 pt-20 rounded-3xl shadow-xl relative text-left border-4 border-[#FFB22C]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Avatar */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <Image
                  src={t.imageUrl}
                  alt={t.name}
                  width={100}
                  height={100}
                  className="rounded-full border-4 border-[#F3C623] shadow-lg"
                />
              </div>

              {/* Message */}
              <p className="text-[#5C4A42] italic mb-6 text-base leading-relaxed relative z-10">
                <span className="text-[#FA812F] text-3xl font-serif mr-1">“</span>
                {t.message}
                <span className="text-[#FA812F] text-3xl font-serif ml-1">”</span>
              </p>

              {/* Name and Role */}
              <h3 className="font-bold text-xl text-[#3B2E2A]">{t.name}</h3>
              <p className="text-sm text-[#7A6A64]">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
