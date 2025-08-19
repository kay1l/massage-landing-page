"use client";

import { useRouter } from "next/navigation";
import { authServices } from "@/services/authService";
import { LogOut } from "lucide-react";

export default function DashboardHeader() {
  const router = useRouter();

  const handleLogout = async () => {
    const response = await authServices.logoutUser();
    if (response.status) {
      localStorage.removeItem("access_token");
      router.push("/auth/login");
    }
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[#FEF3E2]">
      <div className="w-full px-6 h-[80px] flex items-center justify-end">
        {/* Logout Icon */}
        <button
          onClick={handleLogout}
          className="p-2 rounded-full text-red-600 hover:text-red-700 hover:bg-red-100 transition"
          title="Logout"
        >
          <LogOut className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}
