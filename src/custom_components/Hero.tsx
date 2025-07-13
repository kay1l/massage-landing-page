"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Hero Background"
        fill
        priority
        className="object-cover object-center -z-10"
      />

      {/* Soft transparent white overlay for readability */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] z-10" />

      <div className="relative z-20 max-w-1xl px-6 mt-3">
        <img
          src="/images/massage.png"
          alt="Holden Beach Massage"
          className="mx-auto mb-6 h-20"
        />
        <h1 className="text-4xl md:text-5xl font-semi-bold text-[#5C4A42] mb-4 drop-shadow-sm">
          Relax, Rejuvenate, Restore
        </h1>
        <div className="w-24 h-[3px] bg-teal-500 mx-auto mb-4 rounded-full" />
        <p className="text-md md:text-lg text-[#5C4A42] tracking-wide uppercase mb-8 drop-shadow-sm">
          Therapeutic Massage on the Island of Dumaguete
        </p>
        <Button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 text-md rounded-full shadow-md">
          Get in Touch
        </Button>
      </div>
    </section>
  );
}
