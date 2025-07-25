"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

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

    handleClose(); 
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[#FEF3E2] shadow-md border-b border-[#F3C623]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("body")}
          className="flex items-center space-x-3"
        >
          <Image src="/images/massage.png" alt="Logo" width={40} height={40} />
          <div className="text-lg font-bold text-[#5C4A42] leading-tight text-left">
            SHAISHA'S LIESURE HUB
            <div className="text-xs font-light tracking-widest text-[#FFB22C]">
              MASSAGE
            </div>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center text-[#5C4A42] text-sm font-medium">
          <button
            onClick={() => scrollToSection("#services")}
            className="hover:text-[#FA812F] transition"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("#reviews")}
            className="hover:text-[#FA812F] transition"
          >
            Reviews
          </button>
          <button
            onClick={() => scrollToSection("#about")}
            className="hover:text-[#FA812F] transition"
          >
            About
          </button>
       
          <button
            onClick={() => scrollToSection("#contact")}
            className="hover:text-[#FA812F] transition"
          >
            Contact
          </button>
          <Button
            onClick={() => scrollToSection("#contact")}
            className="bg-[#F3C623] hover:bg-[#FA812F] text-white rounded-full px-5 py-2 transition"
          >
            Book Now
          </Button>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-[#5C4A42]" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#FEF3E2] p-6 flex flex-col">
              <SheetHeader className="flex flex-col items-start space-y-3">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/images/massage.png"
                    alt="Logo"
                    width={40}
                    height={40}
                  />
                  <div className="text-lg font-bold text-[#5C4A42] leading-tight text-left">
                    SHAISHA'S LEISURE HUB
                    <div className="text-xs font-light tracking-widest text-[#FFB22C]">
                      MASSAGE
                    </div>
                  </div>
                </div>
              </SheetHeader>
              <nav className="flex flex-col gap-6 mt-10 text-[#5C4A42] text-base font-medium">
                <button
                  onClick={() => scrollToSection("#services")}
                  className="text-left hover:text-[#FA812F] transition"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("#reviews")}
                  className="text-left hover:text-[#FA812F] transition"
                >
                  Reviews
                </button>
                <button
                  onClick={() => scrollToSection("#about")}
                  className="text-left hover:text-[#FA812F] transition"
                >
                  About
                </button>
               
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="text-left hover:text-[#FA812F] transition"
                >
                  Contact
                </button>
                <Button
                  onClick={() => scrollToSection("#contact")}
                  className="bg-[#F3C623] hover:bg-[#FA812F] text-white rounded-full w-full transition"
                >
                  Book Now
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
