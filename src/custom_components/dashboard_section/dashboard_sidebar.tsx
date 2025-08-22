"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Home,
  Bath,
  Calendar,
  ClipboardList,
  User,
  Menu,
  X,
  FlowerIcon,
  Users2,
} from "lucide-react";

const navItems = [
  { path: "/dashboard", label: "Home", icon: Home },
  { path: "/dashboard/pages/services_page", label: "Services", icon: Bath },
  { path: "/dashboard/pages/booking_page", label: "Book a Massage", icon: Calendar },
  { path: "/dashboard/pages/appointments_page", label: "Appointments", icon: ClipboardList },
  // { path: "/dashboard/pages/profile_page", label: "Profile", icon: User },
  { path: "/dashboard/pages/therapist_page", label: "Therapists", icon: Users2 },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger (always visible) */}
      <button
        className="fixed top-4 left-4 z-50 bg-[#FA812F] text-white p-2 rounded-lg shadow-lg"
        onClick={() => setOpen(true)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Overlay (when sidebar is open, dims background) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 w-64 h-screen bg-gradient-to-b from-[#FEF9F4] to-[#FEF3E2] border-r border-[#F3C623]/40 shadow-md flex flex-col rounded-tr-2xl transition-transform duration-300",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Brand Section */}
        <div className="flex items-center justify-between px-6 py-6 ">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Shaishas Hub"
              width={60}
              height={60}
              className="rounded-lg object-contain"
            />
            <span className="font-medium text-base tracking-wide text-[#5C4A42]">
              Shaishas Leisure Hub
            </span>
          </div>

          {/* Close button (inside sidebar, always visible) */}
          <button
            className="text-[#FA812F] p-2 rounded-lg"
            onClick={() => setOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Nav Items */}
        <div className="flex flex-col gap-2 p-4 flex-1">
          {navItems.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              href={path}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                pathname === path
                  ? "bg-[#FA812F] text-white font-medium shadow-lg"
                  : "text-[#5C4A42] hover:bg-[#FA812F]/10 hover:text-[#FA812F]"
              )}
            >
              <Icon
                className={cn(
                  "h-5 w-5 transition-colors duration-200",
                  pathname === path ? "text-white" : "text-[#FA812F]"
                )}
              />
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
}
