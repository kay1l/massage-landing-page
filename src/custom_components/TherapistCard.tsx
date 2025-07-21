"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import TherapistModal from "@/custom_components/TherapistModal";

export type Therapist = {
  id: number;
  name: string;
  image: string;
  rating: number;
  description: string;
};

export default function TherapistCard({ therapist }: { therapist: Therapist }) {
  return (
    <Card className="flex flex-col justify-between min-h-[240px] sm:min-h-[300px] lg:min-h-[340px] shadow-md transform transition-transform duration-300 hover:scale-105 border-[#FA812F]">
      <CardHeader className="p-0">
        <div className="relative w-full h-40 bg-[#FEF3E2]">
          <Image
            src={therapist.image}
            alt={therapist.name}
            fill
            className="object-contain rounded-t-xl"
          />
        </div>
      </CardHeader>

      <CardContent className="flex flex-col flex-grow p-4 sm:p-5 lg:p-6 ">
        <CardTitle className="text-center text-lg font-bold mb-2 text-[#5C4A42]">
          {therapist.name}
        </CardTitle>

        <div className="flex justify-center items-center mb-4 text-[#F3C623]">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < Math.round(therapist.rating)
                  ? "fill-[#F3C623]"
                  : "fill-muted"
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-500">({therapist.rating})</span>
        </div>

        <div className="text-sm text-center text-muted-foreground line-clamp-2">
          {therapist.description}
        </div>
      </CardContent>

      <CardFooter className="flex justify-center px-4 pb-4 sm:px-6 sm:pb-6 mt-auto ">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="rounded-full text-sm font-medium text-white bg-[#FA812F] border-none hover:bg-[#f46d10] w-full max-w-[160px]"
            >
              View Details
            </Button>
          </DialogTrigger>
          <TherapistModal therapist={therapist} />
        </Dialog>
      </CardFooter>
    </Card>
  );
}