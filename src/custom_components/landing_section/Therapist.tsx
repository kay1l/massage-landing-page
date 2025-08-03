

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
