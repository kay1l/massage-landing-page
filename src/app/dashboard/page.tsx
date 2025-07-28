"use client";

import { Button } from "@/components/ui/button";
import DashboardHeader from "@/custom_components/dashboard_section/Header";
import Footer from "@/custom_components/landing_section/Footer";
import Image from "next/image";

export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-[#FEF3E2] text-[#5C4A42] font-sans">
      <DashboardHeader />

      <main className="pt-24 px-6 flex flex-col items-center justify-center min-h-[calc(100vh-160px)] text-center relative overflow-hidden">
 
        <Image
          src="/images/wave.png" 
          alt="Relax Icon"
          width={120}
          height={120}
          className="mb-6 drop-shadow-md animate-wave"
        />

        {/* Welcome Message */}
        <h2 className="text-3xl font-bold mb-2 animate-fade-in-up">Welcome back, Kyle!</h2>
        <p className="text-base text-gray-600 max-w-md animate-fade-in-up delay-200">
          Ready to relax and unwind? Your next massage is just a click away.
        </p>

        {/* CTA Button */}
        <Button
          className="mt-6 bg-[#FA812F] hover:bg-[#f5933c] text-white px-6 py-3 rounded-full shadow-md transition duration-300 animate-fade-in-up delay-300"
          onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
        >
          Book Your Massage Now
        </Button>
      </main>

      <Footer />
    </div>
  );
}
