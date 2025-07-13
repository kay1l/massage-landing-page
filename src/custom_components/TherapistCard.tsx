"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <Card className="bg-white shadow-md rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative w-full h-40 bg-gray-100">
          <Image
            src={therapist.image}
            alt={therapist.name}
            fill
            className="object-contain rounded-t-xl"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className=" flex justify-center text-lg font-bold mb-2">
          {therapist.name}
        </CardTitle>

        <div className="flex justify-center items-center mb-4 text-yellow-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < Math.round(therapist.rating)
                  ? "fill-yellow-500"
                  : "fill-muted"
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-500">
            ({therapist.rating})
          </span>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <div className="flex justify-center">
              <Button
                variant="outline"
                className="rounded-full text-sm font-medium text-teal-600 border-teal-500 hover:bg-teal-50"
              >
                View Details
              </Button>
            </div>
          </DialogTrigger>
          <TherapistModal therapist={therapist} />
        </Dialog>
      </CardContent>
    </Card>
  );
}
