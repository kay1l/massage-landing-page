"use client";

import TherapistCard, { Therapist } from "@/custom_components/TherapistCard";
import { useState } from "react";

const therapists: Therapist[] = [
  {
    id: 1,
    name: "Maria Santos",
    image: "/images/therapist_images/woman.png",
    rating: 4.8,
    description:
      "Specializes in Swedish and Aromatherapy massage. 8+ years of experience.",
  },
  {
    id: 2,
    name: "James Cruz",
    image: "/images/therapist_images/boy.png",
    rating: 4.5,
    description: "Deep tissue expert with strong therapeutic touch.",
  },
  {
    id: 3,
    name: "Kyle Gomez",
    image: "/images/therapist_images/man.png",
    rating: 1.3,
    description: "Deep tissue expert with strong therapeutic touch.",
  },
  {
    id: 4,
    name: "Marvin Montalban",
    image: "/images/therapist_images/woman1.png",
    rating: 5.0,
    description: "Deep tissue expert with strong therapeutic touch.",
  },
  {
    id: 5,
    name: "Nino Bucol",
    image: "/images/therapist_images/woman2.png",
    rating: 3.0,
    description: "Deep tissue expert with strong therapeutic touch.",
  },
  {
    id: 6,
    name: "Tyron Gomez",
    image: "/images/therapist_images/man1.png",
    rating: 2.5,
    description: "Deep tissue expert with strong therapeutic touch.",
  },
  {
    id: 7,
    name: "KC Gonzaga",
    image: "/images/therapist_images/woman1.png",
    rating: 2.5,
    description: "Deep tissue expert with strong therapeutic touch.",
  },
  {
    id: 8,
    name: "Mia Bacbac",
    image: "/images/therapist_images/woman.png",
    rating: 3.5,
    description: "Deep tissue expert with strong therapeutic touch.",
  },
];

const ITEM_PER_PAGE = 4;

export default function TherapistsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(therapists.length / ITEM_PER_PAGE);

  const paginatedTherapist = therapists.slice(
    currentPage * ITEM_PER_PAGE,
    currentPage * ITEM_PER_PAGE + ITEM_PER_PAGE
  );

  return (
    <section id="therapists" className="py-24 px-6 bg-[#FAF8F6] text-[#5C4A42]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-5">
          Meet Our Therapists
        </h2>
        <div className="w-24 h-[3px] bg-teal-500 mx-auto rounded-full mb-8" />

        {/* ✅ Mobile View with Pagination */}
        <div className="sm:hidden space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {paginatedTherapist.map((therapists) => (
              <TherapistCard key={therapists.id} therapist={therapists} />
            ))}
          </div>

          <div className="flex justify-center items-center gap-3 mt-6">
            {/* Left arrow */}
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
              disabled={currentPage === 0}
              className="text-teal-600 disabled:text-gray-300"
              aria-label="Previous Page"
            >
              ←
            </button>

            {/* Dots */}
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentPage === i ? "bg-teal-600" : "bg-gray-300"
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}

            {/* Right arrow */}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
              }
              disabled={currentPage === totalPages - 1}
              className="text-teal-600 disabled:text-gray-300"
              aria-label="Next Page"
            >
              →
            </button>
          </div>
        </div>

        {/* ✅ Desktop/Tablet Grid */}
        <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {therapists.map((therapist) => (
            <TherapistCard key={therapist.id} therapist={therapist} />
          ))}
        </div>
      </div>
    </section>
  );
}
