"use client";
import Image from "next/image";

export default function LoadingScreen() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#FAF8F6]">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-60 h-60 animate-pulse ">
          <Image
            src="/images/final.png"
            alt="Loading"
            width={140}
            height={140}
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
