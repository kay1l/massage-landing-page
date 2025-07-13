"use client";

import TherapistCard, { Therapist } from "@/custom_components/TherapistCard";

const therapists: Therapist[] = [
  {
    id: 1,
    name: "Maria Santos",
    image: "/images/therapist_images/woman.png",
    rating: 4.8,
    description: "Specializes in Swedish and Aromatherapy massage. 8+ years of experience.",
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

export default function TherapistsSection() {
  return (
    <section id="therapists" className="py-24 px-6 bg-[#FAF8F6] text-[#5C4A42]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-5">Meet Our Therapists</h2>
        <div className="w-24 h-[3px] bg-teal-500 mx-auto rounded-full mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {therapists.map((therapist) => (
            <TherapistCard key={therapist.id} therapist={therapist} />
          ))}
        </div>
      </div>
    </section>
  );
}
