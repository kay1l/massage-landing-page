"use client";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-[#FAF8F6] text-[#5C4A42] scroll-mt-20"
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-4xl font-light text-center mb-4">
          About Us
        </h2>

        <div className="w-24 h-[3px] bg-teal-500 mx-auto rounded-full mb-6" />

        <div className="border-l-4 border-teal-300 pl-6 text-lg leading-relaxed tracking-wide space-y-4">
          <p>
            At <span className="font-medium">Arturo Siete Massage</span>, we believe in the healing power of touch. Our licensed therapists are passionate about helping clients achieve well-being through personalized treatments.
          </p>
          <p>
            Located on the beautiful island of <span className="font-medium">Negros</span>, our massage studio is a peaceful sanctuary designed for your relaxation and renewal.
          </p>
        </div>
      </div>
    </section>
  );
}
