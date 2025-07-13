"use client";

import { DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Therapist } from "./TherapistCard";
import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TherapistModal({ therapist }: { therapist: Therapist }) {
  return (
    <DialogContent className="bg-white max-w-lg p-6 rounded-xl shadow-xl">
      <div className="flex flex-col items-center text-center">
        <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden shadow-md">
          <Image
            src={therapist.image}
            alt={therapist.name}
            fill
            className="object-cover"
          />
        </div>

        <DialogTitle className="text-2xl font-bold">{therapist.name}</DialogTitle>

        <div className="flex items-center justify-center mt-2 mb-4 text-yellow-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < Math.round(therapist.rating) ? "fill-yellow-500" : "fill-muted"
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-500">({therapist.rating})</span>
        </div>

        <p className="text-gray-700 text-sm leading-relaxed mb-6">
          {therapist.description}
        </p>

        <Button className="rounded-full px-6 bg-teal-600 hover:bg-teal-700 text-white text-sm">
          Book Session
        </Button>
      </div>
    </DialogContent>
  );
}
