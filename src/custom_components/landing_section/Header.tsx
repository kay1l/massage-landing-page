"use client"

// components/Header.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/images/massage.png" alt="Logo" className="h-10" />
          <div className="text-lg font-semibold text-[#5C4A42]">
          ARTURO SIETE <br />
            <span className="text-sm font-light tracking-widest text-[#AD8E80]">
              MASSAGE
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 items-center text-[#5C4A42] text-sm font-medium">
          <Link href="#services" className="hover:text-teal-600 transition">
            Services
          </Link>
          <Link href="#about" className="hover:text-teal-600 transition">
            About
          </Link>
          <Link href="#rates" className="hover:text-teal-600 transition">
            Rates
          </Link>
          <Link href="#contact" className="hover:text-teal-600 transition">
            Contact
          </Link>
          <Button className="bg-teal-500 text-white hover:bg-teal-600 rounded-full px-5 py-2">
            Book Now
          </Button>
        </nav>
      </div>
    </header>
  );
}
