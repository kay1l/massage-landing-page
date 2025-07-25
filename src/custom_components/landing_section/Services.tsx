"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useEffect } from "react";
import { FaSpa } from "react-icons/fa";

const services = [
  {
    title: "Swedish Massage",
    description:
      "Relaxing full-body massage that improves circulation and promotes calm.",
    image: "/images/services_images/swedish.jpeg",
  },
  {
    title: "Deep Tissue Massage",
    description:
      "Targets chronic tension deep in muscles and connective tissues.",
    image: "/images/services_images/deep.jpeg",
  },
  {
    title: "Trigger-Point Massage",
    description:
      "Focused therapy that targets tight muscle knots to relieve pain and restore mobility.",
    image: "/images/services_images/trigger.jpg",
  },
  {
    title: "Aromatherapy",
    description:
      "Essential oils enhance your relaxation and sensory experience.",
    image: "/images/services_images/aromatherapy.jpeg",
  },
];

export default function ServicesSection() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    renderMode: "performance",
    slides: {
      perView: 1,
      spacing: 24,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 24 },
      },
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 4000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <section
      id="services"
      className="py-24 px-6 bg-[#FEF3E2] text-[#5C4A42] scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-[#3B2E2A] tracking-tight">
          Our Signature Services
        </h2>
        <p className="text-center text-[#7A6A64] mb-6 text-lg tracking-wide">
          Discover our relaxing and therapeutic massage options.
        </p>
        <div className="w-24 h-[3px] bg-[#FA812F] mx-auto rounded-full mb-10" />

        <div ref={sliderRef} className="keen-slider">
          {services.map((service, idx) => (
            <div key={idx} className="keen-slider__slide">
              <div className="relative h-[420px] rounded-2xl overflow-hidden group shadow-xl hover:scale-[1.02] transition-transform duration-300 border border-[#FFB22C]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 bg-black/10 z-10" />
                
                <div className="absolute bottom-0 left-0 right-0 z-20 p-5 backdrop-blur-md bg-white/40 text-[#3B2E2A]">
                  <h3 className="text-lg font-semibold flex items-center gap-2 mb-1">
                    <FaSpa className="text-[#FA812F] w-5 h-5" />
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#5C4A42] leading-snug">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
