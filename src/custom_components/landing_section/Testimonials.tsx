"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Avinash Kr",
    role: "Co-Founder at xyz",
    message:
      "The massage experience was calming and professional. I left feeling fully relaxed and recharged. Highly recommended!",
    imageUrl: "/images/therapist_images/man.png",
  },
  {
    name: "Bharat Kunal",
    role: "Manager at xyz",
    message:
      "A beautiful, relaxing space with skilled therapists. The attention to detail made it an exceptional experience.",
    imageUrl: "/images/therapist_images/man1.png",
  },
  {
    name: "Prabhakar D",
    role: "Founder / CEO at xyz",
    message:
      "Amazing ambiance and soothing hands! Definitely a place I’ll keep coming back to for stress relief.",
    imageUrl: "/images/therapist_images/boy.png",
  },
  {
    name: "Jane Doe",
    role: "Wellness Coach",
    message:
      "Incredible service and attention. I felt at ease from the moment I walked in.",
    imageUrl: "/images/therapist_images/woman.png",
  },
  {
    name: "John Smith",
    role: "Athlete",
    message:
      "Hands-down the best massage therapy I’ve experienced. Total reset!",
    imageUrl: "/images/therapist_images/man.png",
  },
  {
    name: "Grace L.",
    role: "Yoga Instructor",
    message:
      "Their professionalism and calming energy is unmatched. Highly recommended!",
    imageUrl: "/images/therapist_images/woman1.png",
  },
  {
    name: "Emily Chen",
    role: "Corporate Wellness Director",
    message:
      "The attention to both body and mind made this experience truly special. I recommend it to all my employees!",
    imageUrl: "/images/therapist_images/woman2.png",
  },
  {
    name: "Rahul Mehta",
    role: "Entrepreneur",
    message:
      "After just one session, I felt my back pain ease significantly. Exceptional skill and care.",
    imageUrl: "/images/therapist_images/man.png",
  },
  {
    name: "Sarah Lopez",
    role: "Fitness Coach",
    message:
      "The therapists here understand the body like no other. Great for recovery and relaxation.",
    imageUrl: "/images/therapist_images/woman.png",
  },
  {
    name: "Daniel Reyes",
    role: "Software Engineer",
    message:
      "Working long hours at a desk takes a toll — these massages are my go-to stress relief!",
    imageUrl: "/images/therapist_images/boy.png",
  },
  {
    name: "Monica A.",
    role: "Mom of Two",
    message:
      "A peaceful break from my busy routine. I always walk out feeling like a new person.",
    imageUrl: "/images/therapist_images/woman1.png",
  },
  {
    name: "Leo Tanaka",
    role: "Professional Dancer",
    message:
      "Their deep tissue technique is perfect after rehearsals. Friendly, clean, and super effective.",
    imageUrl: "/images/therapist_images/man.png",
  },
];

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  // Handle responsive items per page
  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 640 ? 3 : 6); // sm breakpoint
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const paginatedTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <section className="py-20 px-4 sm:px-6 md:px-10 bg-[#FEF3E2]" id="testimonials">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FA812F] mb-4 tracking-tight drop-shadow-sm">
          TESTIMONIALS
        </h2>
        <p className="text-[#5C4A42] text-base sm:text-lg mb-10">
          Hear what our satisfied clients have to say.
        </p>

        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {paginatedTestimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 pt-16 rounded-3xl shadow-lg relative text-left border border-[#FFB22C]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <Image
                  src={t.imageUrl}
                  alt={t.name}
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-[#F3C623] shadow-md"
                />
              </div>
              <p className="text-[#5C4A42] italic mb-6 text-sm sm:text-base leading-relaxed text-center">
                <span className="text-[#FA812F] text-2xl font-serif mr-1">“</span>
                {t.message}
                <span className="text-[#FA812F] text-2xl font-serif ml-1">”</span>
              </p>
              <h3 className="font-semibold text-lg text-center text-[#3B2E2A]">{t.name}</h3>
              <p className="text-xs text-center text-[#7A6A64]">{t.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
            className="text-[#FA812F] disabled:text-gray-400 text-lg font-bold"
            aria-label="Previous Page"
          >
            ←
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-3 h-3 rounded-full transition-all focus:outline-none ring-2 ring-transparent focus:ring-[#FA812F] ${
                currentPage === i ? "bg-[#FA812F] scale-125" : "bg-gray-300"
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
            }
            disabled={currentPage === totalPages - 1}
            className="text-[#FA812F] disabled:text-gray-400 text-lg font-bold"
            aria-label="Next Page"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
