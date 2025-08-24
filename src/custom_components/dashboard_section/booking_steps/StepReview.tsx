"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Calendar,
  Clock,
  Landmark,
  MapPin,
  Phone,
  StickyNote,
  User,
} from "lucide-react";

interface Props {
  selectedService: string;
  selectedDate: Date | undefined;
  selectedTime: string | null;
  name: string;
  contact: string;
  address: string;
  landmark: string;
  notes: string;
  prevStep: () => void;
  handleSubmit: () => void;
}

export default function Step4Review({
  selectedService,
  selectedDate,
  selectedTime,
  name,
  contact,
  address,
  landmark,
  notes,
  prevStep,
  handleSubmit,
}: Props) {
  return (
    <div className="w-full bg-white">
      <div className="relative h-40 w-full">
        <Image
          src="/images/hero-bg.jpg"
          alt="Booking Confirmation"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <h2 className="absolute bottom-4 left-6 text-2xl font-bold text-white drop-shadow-md">
          Review & Confirm
        </h2>
      </div>

      <div className="px-4 py-6 space-y-5">
        <div className="flex items-start gap-2">
          <Calendar className="text-[#FA812F] w-5 h-5 mt-1" />
          <div className="text-left">
            <p className="text-sm text-gray-500">Service</p>
            <p className="text-lg font-semibold text-gray-800">
              {selectedService === "1"
                ? "Swedish Massage"
                : selectedService === "2"
                ? "Deep Tissue Massage"
                : "Trigger-Point Massage"}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <Clock className="text-[#FA812F] w-5 h-5 mt-1" />
          <div className="text-left">
            <p className="text-sm text-gray-500">Date & Time</p>
            <p className="text-lg font-semibold text-gray-800">
              {selectedDate?.toLocaleDateString("en-US", {
                weekday: "long",
                day: "numeric",
                month: "long",
              })}{" "}
              at {selectedTime}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <User className="text-[#FA812F] w-5 h-5 mt-1" />
          <div className="text-left">
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="text-lg font-semibold text-gray-800">{name}</p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <Phone className="text-[#FA812F] w-5 h-5 mt-1" />
          <div className="text-left">
            <p className="text-sm text-gray-500">Contact Number</p>
            <p className="text-lg font-semibold text-gray-800">{contact}</p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <MapPin className="text-[#FA812F] w-5 h-5 mt-1" />
          <div className="text-left">
            <p className="text-sm text-gray-500">Address</p>
            <p className="text-lg font-semibold text-gray-800">{address}</p>
          </div>
        </div>

        {landmark && (
          <div className="flex items-start gap-2">
            <Landmark className="text-[#FA812F] w-5 h-5 mt-1" />
            <div className="text-left">
              <p className="text-sm text-gray-500">Landmark</p>
              <p className="text-lg font-semibold text-gray-800">{landmark}</p>
            </div>
          </div>
        )}

        {notes && (
          <div className="flex items-start gap-2">
            <StickyNote className="text-[#FA812F] w-5 h-5 mt-1" />
            <div className="text-left">
              <p className="text-sm text-gray-500">Notes / Preferences</p>
              <p className="text-lg font-semibold text-gray-800">{notes}</p>
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-4 px-4 pb-6">
        <Button
          onClick={prevStep}
          variant="outline"
          className="w-1/2 h-12 text-base border-[#FA812F] text-[#5C4A42]"
        >
          Back
        </Button>
        <Button
          className="w-1/2 h-12 text-base bg-[#FA812F] hover:bg-[#f5933c]"
          onClick={handleSubmit}
        >
          Confirm Booking
        </Button>
      </div>
    </div>
  );
}
