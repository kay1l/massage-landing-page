"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useEffect, useState } from "react";

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
    image: "/images/services_images/deep-tissue.jpeg",
  },
  {
    title: "Trigger-Point Massage",
    description:
      "Focused therapy that targets tight muscle knots to relieve pain and restore mobility.",
    image: "/images/services_images/trigger-point.jpeg",
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
    }, 2000); 
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <section
      id="services"
      className="py-24 px-6 bg-white text-[#5C4A42] scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-5">
          Our Signature Services
        </h2>
        <div className="w-24 h-[3px] bg-teal-500 mx-auto rounded-full mb-6" />
        <div ref={sliderRef} className="keen-slider">
          {services.map((service, idx) => (
            <div key={idx} className="keen-slider__slide">
              <Card className="h-full overflow-hidden rounded-2xl bg-gradient-to-b from-[#FAF8F6] to-white shadow-lg hover:shadow-xl hover:scale-[1.03] transition-transform duration-300 border border-teal-100">
                <CardHeader className="p-0">
                  <div className="relative w-full h-52 bg-gray-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain rounded-t-2xl"
                      priority={idx === 0}
                    />
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <CardTitle className="text-lg sm:text-xl font-semibold mb-2 text-[#3B2E2A]">
                    {service.title}
                  </CardTitle>
                  <p className="text-sm text-[#6B5F57] leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
