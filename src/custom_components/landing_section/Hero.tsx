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
    <section className="relative w-full min-h-screen flex items-end justify-center text-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 h-full w-full -z-10">
        {/* ✅ Mobile Image */}
        <div className="absolute inset-0 h-full w-full block sm:hidden">
          <Image
            src="/images/massage1.jpg"
            alt="Massage Therapy Mobile"
            fill
            className="object-cover object-center brightness-75"
            priority
          />
        </div>

        {/* ✅ Desktop Image */}
        <div className="absolute inset-0 h-full w-full hidden sm:block">
          <Image
            src="/images/massage.jpg"
            alt="Massage Therapy Background"
            fill
            className="object-cover object-center brightness-75"
            priority
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FEF3E2]/80 via-[#FEF3E2]/50 to-transparent" />

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

      {/* Content */}
      <div className="relative z-20 w-full max-w-3xl px-4 sm:px-6 pb-20 text-[#5C4A42]">
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
            <span>+63 905 578 9461</span>
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
