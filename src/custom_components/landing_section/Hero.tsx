"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaPhoneAlt, FaSpa } from "react-icons/fa";

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

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-transparent backdrop-blur-sm z-10" />

      <div className="relative z-20 max-w-3xl px-6 text-[#5C4A42] mt-3">
        {/* Logo */}
        <Image
          src="/images/massage.png"
          alt="Holden Beach Massage"
          width={100}
          height={100}
          className="mx-auto mb-6 drop-shadow-lg"
        />

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3 drop-shadow-sm tracking-tight leading-tight">
          Professional Home Service Massage
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl uppercase tracking-wider text-[#5C4A42] mb-6 drop-shadow-sm">
          Relax/Rejuvenate/Restor in your own home
        </p>

        {/* Info line */}
        <div className="flex items-center justify-center gap-4 text-sm text-[#5C4A42] mb-6">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <span>Dumaguete City</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <span>+63 912 345 6789</span>
          </div>
        </div>

        {/* Call to action buttons */}
        <div className="grid grid-cols-2 gap-4 justify-center mb-6">
  <Button
    onClick={() => scrollToSection("#contact")}
    className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 text-md rounded-full shadow-lg transition"
  >
    Book a Session
  </Button>

  <Button
    variant="outline"
    onClick={() => scrollToSection("#services")}
    className="border-teal-500 text-teal-600 hover:bg-teal-50 px-6 py-3 text-md rounded-full shadow-md transition"
  >
    View Services
  </Button>
</div>

      
      </div>
    </section>
  );
}
