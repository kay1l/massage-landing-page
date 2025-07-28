"use client";

import { useState, useEffect } from "react";
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
import { useRouter } from "next/navigation";

// Dashboard-specific navigation items
const navItems = [
  { id: "#home", label: "Home" },
  { id: "#services", label: "Services" },
  { id: "#book", label: "Book a Massage" },
  { id: "#appointments", label: "Appointments" },
  { id: "#profile", label: "Profile" },
  { id: "#logout", label: "Logout" },
];

export default function DashboardHeader() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

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

    setActiveSection(id);
    handleClose();
  };

  // Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 90;

      navItems.forEach(({ id }) => {
        const el = document.querySelector(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          const bottom = top + el.clientHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = (id: string) =>
    `relative flex items-center gap-1 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-[#FA812F] hover:after:w-full after:transition-all after:duration-300 ${
      activeSection === id ? "text-[#FA812F] font-semibold after:w-full" : ""
    }`;

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[#FEF3E2] shadow-md border-b border-[#F3C623]">
      <div className="w-full mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("#home")}
          className="flex items-center space-x-3"
        >
          <Image src="/images/massage.png" alt="Logo" width={50} height={50} />
          <div className="leading-tight text-left">
            <h1 className="text-xl font-extrabold text-[#5C4A42] tracking-tight">
              SHAISHA’S
            </h1>
            <h2 className="text-lg font-medium text-[#5C4A42]">LEISURE HUB</h2>
            <div className="text-xs font-light tracking-wider text-[#FFB22C]">
              MASSAGE
            </div>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center text-[#5C4A42] text-sm font-medium tracking-wide">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={navLinkClass(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-[#5C4A42]" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#FEF3E2] p-6 flex flex-col"
            >
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
                {navItems.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`text-left transition-all ${
                      activeSection === id
                        ? "text-[#FA812F] font-semibold"
                        : "hover:text-[#FA812F]"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
