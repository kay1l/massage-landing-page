"use client";

import { useRouter } from "next/navigation";
import { authServices } from "@/services/authService";
import { LogOut, User } from "lucide-react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// shadcn/ui components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DashboardHeader() {
  const router = useRouter();
  const { user } = useSelector((state: RootState) => state.user);

  const handleLogout = async () => {
    const response = await authServices.logoutUser();
    if (response.status) {
      localStorage.removeItem("access_token");
      router.push("/auth/login");
    }
  };

  const handleProfile = () => {
    router.push("/dashboard/pages/profile_page");
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[#FEF3E2] shadow-sm">
      <div className="w-full px-6 h-[80px] flex items-center justify-between">
        {/* Left Section (optional branding/title) */}
        <div className="text-lg font-semibold text-[#5C4A42]"></div>

        {/* Right Section - User Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-3 focus:outline-none">
              <Image
                src={user?.avatar || '/images/therapist_images/man.png'}
                alt={user.name}
                width={40}
                height={40}
                className="rounded-full border border-gray-200 object-cover"
              />
              <span className="font-medium text-[#5C4A42] hidden sm:inline">
                {user.name}
              </span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-48 bg-white rounded-xl shadow-md"
            align="end"
          >
            <DropdownMenuLabel className="text-sm font-medium">
              My Account
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleProfile}
              className="flex items-center gap-2 cursor-pointer"
            >
              <User className="w-4 h-4 text-[#FA812F]" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-600 cursor-pointer focus:text-red-700"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
