"use client";

import { Button } from "@/components/ui/button";
import { CalendarWithTime } from "@/components/calendar-20";

interface Props {
  selectedDate: Date | undefined;
  setSelectedDate: (val: Date | undefined) => void;
  selectedTime: string | null;
  setSelectedTime: (val: string | null) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export default function Step2Schedule({
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  nextStep,
  prevStep,
}: Props) {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#FA812F] mb-6">
        Select a Date and Time
      </h2>
      <CalendarWithTime
        date={selectedDate}
        setDate={setSelectedDate}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
      />
      <div className="flex gap-3 mt-8">
        <Button
          onClick={prevStep}
          variant="outline"
          className="w-1/2 h-12 text-base border-[#FA812F] text-[#5C4A42]"
        >
          Back
        </Button>
        <Button
          onClick={nextStep}
          className="w-1/2 h-12 text-base bg-[#FA812F] hover:bg-[#f5933c]"
          disabled={!selectedDate || !selectedTime}
        >
          Next
        </Button>
      </div>
    </>
  );
}
