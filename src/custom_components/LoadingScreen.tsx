"use client";
import Image from "next/image";

export default function LoadingScreen() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#FAF8F6]">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 animate-spin">
          <Image
            src="/images/massage.png"
            alt="Loading"
            width={100}
            height={100}
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-[#5C4A42] text-lg font-medium animate-pulse">
          Loading your experience...
        </p>
      </div>
    </div>
  );
}
