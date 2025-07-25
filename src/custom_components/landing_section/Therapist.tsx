// "use client";

// import TherapistCard, { Therapist } from "@/custom_components/TherapistCard";
// import { useState } from "react";

// const therapists: Therapist[] = [
//   {
//     id: 1,
//     name: "Maria",
//     image: "/images/therapist_images/woman.png",
//     rating: 4.8,
//     description:
//       "Specializes in Swedish and Aromatherapy massage. 8+ years of experience.",
//   },
//   {
//     id: 2,
//     name: "James",
//     image: "/images/therapist_images/boy.png",
//     rating: 4.5,
//     description: "Deep tissue expert with strong therapeutic touch.",
//   },
//   {
//     id: 3,
//     name: "Kyle",
//     image: "/images/therapist_images/man.png",
//     rating: 1.3,
//     description: "Trigger point specialist with gentle technique.",
//   },
//   {
//     id: 4,
//     name: "Marvin",
//     image: "/images/therapist_images/woman1.png",
//     rating: 5.0,
//     description: "Excellent in therapeutic and relaxation massage.",
//   },
//   {
//     id: 5,
//     name: "Nino",
//     image: "/images/therapist_images/woman2.png",
//     rating: 3.0,
//     description: "Experienced in deep tissue and hot stone therapy.",
//   },
//   {
//     id: 6,
//     name: "Tyron",
//     image: "/images/therapist_images/man1.png",
//     rating: 2.5,
//     description: "Specialist in sports recovery massage.",
//   },
//   {
//     id: 7,
//     name: "KC",
//     image: "/images/therapist_images/woman1.png",
//     rating: 2.5,
//     description: "Focused on prenatal and stress-relief sessions.",
//   },
//   {
//     id: 8,
//     name: "Mia",
//     image: "/images/therapist_images/woman.png",
//     rating: 3.5,
//     description: "Relaxation therapist with soft technique.",
//   },
// ];

// const ITEM_PER_PAGE = 3;

// export default function TherapistsSection() {
//   const [currentPage, setCurrentPage] = useState(0);
//   const totalPages = Math.ceil(therapists.length / ITEM_PER_PAGE);

//   const paginatedTherapist = therapists.slice(
//     currentPage * ITEM_PER_PAGE,
//     currentPage * ITEM_PER_PAGE + ITEM_PER_PAGE
//   );

//   return (
//     <section
//       id="therapists"
//       className="py-24 px-6 bg-[#FEF3E2] text-[#5C4A42] scroll-mt-20"
//     >
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-[#FA812F] text-center mb-2">
//           Meet Our Therapists
//         </h2>
//         <p className="text-center text-[#7A6A64] mb-6">
//           Compassionate, professional, and ready to help you heal.
//         </p>
//         <div className="w-24 h-[3px] bg-[#F3C623] mx-auto rounded-full mb-8" />

//         {/* ✅ Mobile View with Pagination */}
//         <div className="sm:hidden space-y-6">
//           <div className="grid grid-cols-1 gap-4">
//             {paginatedTherapist.map((therapist) => (
//               <div
//                 key={therapist.id}
//               >
//                 <TherapistCard therapist={therapist} />
//               </div>
//             ))}
//           </div>

//           <div className="flex justify-center items-center gap-4 mt-6">
//             <button
//               onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
//               disabled={currentPage === 0}
//               className="text-[#FA812F] disabled:text-gray-400 text-lg font-bold"
//               aria-label="Previous Page"
//             >
//               ←
//             </button>

//             {Array.from({ length: totalPages }).map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setCurrentPage(i)}
//                 className={`w-3 h-3 rounded-full transition-all focus:outline-none ring-2 ring-transparent focus:ring-[#FA812F] ${
//                   currentPage === i ? "bg-[#FA812F] scale-125" : "bg-gray-300"
//                 }`}
//                 aria-label={`Go to page ${i + 1}`}
//               />
//             ))}

//             <button
//               onClick={() =>
//                 setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
//               }
//               disabled={currentPage === totalPages - 1}
//               className="text-[#FA812F] disabled:text-gray-400 text-lg font-bold"
//               aria-label="Next Page"
//             >
//               →
//             </button>
//           </div>
//         </div>

//         {/* ✅ Desktop/Tablet Grid */}
//         <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
//           {therapists.map((therapist) => (
//             <div
//               key={therapist.id}
//             >
//               <TherapistCard therapist={therapist} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

export default function TherapistsSection() {
  return (
    <section className="py-16 px-4 bg-[#FEF3E2] text-[#5C4A42]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#FA812F] text-center mb-4">
          Trained Professionals You Can Trust
        </h2>

        <div className="w-24 h-[3px] bg-[#F3C623] mx-auto rounded-full mb-8" />

        <div className="border-l-4 border-[#F3C623] pl-6 text-lg leading-relaxed tracking-wide space-y-5">
          <p>
            Our therapists are certified experts with years of hands-on experience across a wide range of massage disciplines.
            Each has undergone extensive training in techniques such as Swedish, Deep Tissue, Shiatsu, and Reflexology.
          </p>

          <p>
            Many of them are graduates from DOH-accredited institutions and hold internationally recognized certifications.
            Their approach combines technical skill with a genuine passion for helping clients relax, heal, and feel their best.
          </p>

          <p>
            Whether you're looking for stress relief or therapeutic treatment, rest assured you're in the hands of trusted professionals
            who are committed to your well-being, comfort, and privacy.
          </p>
        </div>
      </div>
    </section>
  );
}
