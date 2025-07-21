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
    <section className="py-20 bg-white" id="testimonials">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-teal-500 mb-2">TESTIMONIALS</h2>
        <p className="text-gray-600 mb-12">
          Subscribe Easy Tutorials YouTube channel to watch more videos.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-8 rounded-2xl shadow-lg relative pt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <Image
                  src={t.imageUrl}
                  alt={t.name}
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-white shadow-md"
                />
              </div>
              <p className="text-gray-700 italic mb-6 text-sm leading-relaxed">
                <span className="text-teal-500 text-2xl font-serif mr-1">“</span>
                {t.message}
                <span className="text-teal-500 text-2xl font-serif ml-1">”</span>
              </p>
              <h3 className="font-bold text-gray-900 text-lg">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
