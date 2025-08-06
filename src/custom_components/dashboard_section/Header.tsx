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
import { useRouter, usePathname } from "next/navigation";

const navItems = [
  { path: "/dashboard", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/dashboard/pages/booking_page", label: "Book a Massage" },
  { path: "/dashboard/pages/appointments_page", label: "Appointments" },
  { path: "/dashboard/pages/profile_page", label: "Profile" },
  { path: "/logout", label: "Logout" },
];

export default function DashboardHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  const handleNavigation = (path: string) => {
    router.push(path);
    handleClose();
  };

  const navLinkClass = (path: string) =>
    `relative flex items-center gap-1 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-[#FA812F] hover:after:w-full after:transition-all after:duration-300 ${
      pathname === path ? "text-[#FA812F] font-semibold after:w-full" : ""
    }`;

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[#FEF3E2] shadow-md border-b border-[#F3C623]">
      <div className="w-full mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          className="flex items-center space-x-3 h-[60px] overflow-hidden pl-2">
        
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="transform scale-[1.1] object-contain ml-2"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center text-[#5C4A42] text-sm font-medium tracking-wide">
          {navItems.map(({ path, label }) => (
            <button
              key={path}
              onClick={() => handleNavigation(path)}
              className={navLinkClass(path)}
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
                    src="/images/final.png"
                    alt="Logo"
                    width={100}
                    height={100}
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
                {navItems.map(({ path, label }) => (
                  <button
                    key={path}
                    onClick={() => handleNavigation(path)}
                    className={`text-left transition-all ${
                      pathname === path
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
