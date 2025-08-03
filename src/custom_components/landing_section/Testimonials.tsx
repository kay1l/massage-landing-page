"use client";

import Image from "next/image";
import { useMemo } from "react";
import { Star } from "lucide-react"; // ✅ Star icon

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
  
];

function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function Testimonials() {
  const [col1, col2, col3, mobileCol] = useMemo(() => {
    const duplicated = testimonials.concat(testimonials);
    const shuffled = shuffleArray(duplicated);
    const len = Math.ceil(shuffled.length / 3);
    return [
      shuffled.slice(0, len),
      shuffled.slice(len, len * 2),
      shuffled.slice(len * 2),
      shuffled,
    ];
  }, []);

  const renderColumn = (
    items: typeof testimonials,
    speed: number,
    key: string
  ) => (
    <div className="relative w-full overflow-hidden h-[700px]" key={key}>
      <div
        className="flex flex-col animate-scroll"
        style={{
          animationDuration: `${speed}s`,
          animationDelay: `${Math.random() * 5}s`,
          animationDirection: key === "col2" ? "normal" : "reverse",
        }}
      >
        {items.concat(items).map((t, index) => (
          <div
            key={`${t.name}-${index}`}
            className="bg-white p-6 pt-16 mb-12 rounded-3xl shadow-lg relative text-left border border-[#FFB22C] min-w-[250px]"
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
             {/* ⭐ Star Rating */}
             <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-[#5C4A42] italic mb-4 text-sm sm:text-base leading-relaxed text-center">
              <span className="text-[#FA812F] text-2xl font-serif mr-1">“</span>
              {t.message}
              <span className="text-[#FA812F] text-2xl font-serif ml-1">”</span>
            </p>

           

            <h3 className="font-semibold text-lg text-center text-[#3B2E2A]">
              {t.name}
            </h3>

          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      className="py-20 px-4 sm:px-6 md:px-10 bg-[#FEF3E2] relative overflow-hidden"
      id="reviews"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FA812F] mb-4 tracking-tight drop-shadow-sm">
          REVIEWS
        </h2>
        <p className="text-[#5C4A42] text-base sm:text-lg mb-10">
          Hear what our satisfied clients have to say.
        </p>

        <div className="relative z-0">
          {/* Desktop view */}
          <div className="hidden lg:grid grid-cols-3 gap-6 sm:gap-10">
            {renderColumn(col1, 30, "col1")}
            {renderColumn(col2, 38, "col2")}
            {renderColumn(col3, 35, "col3")}
          </div>

          {/* Mobile view */}
          <div className="lg:hidden">{renderColumn(mobileCol, 60, "mobile")}</div>
        </div>
      </div>
    </section>
  );
}
