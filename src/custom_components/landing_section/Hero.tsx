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
    <section className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/images/hero-bg.jpg"
          alt="Massage Therapy Background"
          fill
          className="object-cover object-center -z-10"
          priority
        />
        {/* Decorative Bottom SVG Divider */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#FEF3E2"
            d="M0,32L80,42.7C160,53,320,75,480,101.3C640,128,800,160,960,154.7C1120,149,1280,107,1360,85.3L1440,64V160H0Z"
          />
        </svg>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FEF3E2]/80 via-white/50 to-transparent backdrop-blur-sm z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-3xl w-full px-4 sm:px-6 py-10 text-[#5C4A42]">
        {/* Logo */}
        <Image
          src="/images/massage.png"
          alt="Holden Beach Massage"
          width={150}
          height={150}
          className="mx-auto mb-6 drop-shadow-lg rounded-full border-4 border-[#F3C623]"
        />

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl uppercase font-extrabold mb-4 drop-shadow-md tracking-tight leading-tight text-[#FFB22C]">
          Professional Home Service Massage
        </h1>

        {/* Subheadline */}
        <p className="text-sm sm:text-base md:text-lg tracking-wide italic mb-6 text-[#5C4A42]">
          Relax <span className="text-[#F3C623] font-semibold">/</span> Rejuvenate{" "}
          <span className="text-[#F3C623] font-semibold">/</span> Restore in your own home
        </p>

        {/* Location & Phone */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm text-[#5C4A42] mb-6">
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
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6 px-4">
          <Button
            onClick={() => scrollToSection("#contact")}
            className="bg-[#F3C623] hover:bg-[#FA812F] text-white px-6 py-3 text-md rounded-full shadow-lg transition w-full sm:w-auto"
          >
            Book a Session
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection("#services")}
            className="border-[#F3C623] text-[#F3C623] hover:bg-[#FEF3E2] px-6 py-3 text-md rounded-full shadow-md transition w-full sm:w-auto"
          >
            View Services
          </Button>
        </div>
      </div>
    </section>
  );
}
