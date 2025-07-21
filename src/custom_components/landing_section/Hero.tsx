"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (!element) return;

    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Massage Therapy Background"
        fill
        className="object-cover object-center -z-10"
        priority
      />

      {/* Soft Light Beige Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FEF3E2]/80 via-white/50 to-transparent backdrop-blur-sm z-10" />

      <div className="relative z-20 max-w-3xl px-6 text-[#5C4A42] mt-3">
        {/* Logo */}
        <Image
          src="/images/massage.png"
          alt="Holden Beach Massage"
          width={100}
          height={100}
          className="mx-auto mb-6 drop-shadow-lg rounded-full border-4 border-[#F3C623]"
        />

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl uppercase font-extrabold mb-3 drop-shadow-md tracking-tight leading-tight text-[#FFB22C]">
          Professional Home Service Massage
        </h1>

        {/* Subheadline */}
        <p className="text-base md:text-xl tracking-widest italic mb-8 text-[#5C4A42]">
          Relax <span className="text-[#F3C623] font-semibold">/</span> Rejuvenate{" "}
          <span className="text-[#F3C623] font-semibold">/</span> Restore in your own home
        </p>

        {/* Info Line */}
        <div className="flex items-center justify-center gap-4 text-sm text-[#5C4A42] mb-6">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#FA812F]" />
            <span>Dumaguete City</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-[#FA812F]" />
            <span>+63 912 345 6789</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="grid grid-cols-2 gap-4 justify-center mb-6">
          <Button
            onClick={() => scrollToSection("#contact")}
            className="bg-[#F3C623] hover:bg-[#FA812F] text-white px-6 py-3 text-md rounded-full shadow-lg transition"
          >
            Book a Session
          </Button>

          <Button
            variant="outline"
            onClick={() => scrollToSection("#services")}
            className="border-[#F3C623] text-[#F3C623] hover:bg-[#FEF3E2] px-6 py-3 text-md rounded-full shadow-md transition"
          >
            View Services
          </Button>
        </div>
      </div>
    </section>
  );
}
