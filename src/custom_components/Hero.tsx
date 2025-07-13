"use client"


import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center text-center" style={{
      backgroundImage: "url('/hero-bg.jpg')" 
    }}>
      <div className="absolute inset-0 bg-white bg-opacity-60 backdrop-blur-sm z-10"></div>
      <div className="relative z-20 max-w-3xl px-6">
        <img
          src="/images/massage.png" 
          alt="Holden Beach Massage"
          className="mx-auto mb-6 h-20"
        />
        <h1 className="text-4xl md:text-5xl font-light text-[#5C4A42] mb-4">
          Relax, Rejuvenate, Restore
        </h1>
        <div className="w-24 h-[3px] bg-teal-500 mx-auto mb-4 rounded-full" />
        <p className="text-md md:text-lg text-[#5C4A42] tracking-wide uppercase mb-8">
        Therapeutic Massage on the Island of Dumaguete
        </p>
        <Button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 text-md rounded-full">
          Get in Touch
        </Button>
      </div>
    </section>
  );
}
