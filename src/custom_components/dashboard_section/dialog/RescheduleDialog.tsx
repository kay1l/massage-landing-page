"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {CalendarWithTime} from "@/components/calendar-20";

interface RescheduleDialogProps {
  isOpen: boolean;
  onClose: () => void;
  appointment?: {
    id: number;
    service: string;
  };
}

export default function RescheduleDialog({
  isOpen,
  onClose,
  appointment,
}: RescheduleDialogProps) {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);    
  const [showConfirm, setShowConfirm] = useState(false);

  const handleConfirm = () => {
    // 👉 API call or state update logic goes here
    console.log("Updating schedule:", {
      id: appointment?.id,
      service: appointment?.service,
      newDate: selectedDate,
      newTime: selectedTime,
    });

    setShowConfirm(true);
  };

  return (
    <>
      {/* Reschedule Dialog */}
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-[#FA812F]">
              Reschedule Appointment
            </DialogTitle>
            <DialogDescription>
              Choose a new date and time for{" "}
              <strong>{appointment?.service}</strong>.
            </DialogDescription>
          </DialogHeader>

          {/* Calendar & Time Picker */}
          <CalendarWithTime
            date={selectedDate}
            setDate={setSelectedDate}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
          />

          <div className="flex gap-3 mt-6">
            <Button
              onClick={onClose}
              variant="outline"
              className="w-1/2 h-11 border-[#FA812F] text-[#5C4A42]"
            >
              Cancel
            </Button>
            <Button
              onClick={handleConfirm}
              className="w-1/2 h-11 bg-[#FA812F] hover:bg-[#f5933c]"
              disabled={!selectedDate || !selectedTime}
            >
              Confirm
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirm} onOpenChange={setShowConfirm}>
        <DialogContent className="sm:max-w-md text-center">
          <DialogHeader>
            <DialogTitle className="text-green-600">
              ✅ Schedule Updated
            </DialogTitle>
            <DialogDescription>
              Appointment successfully rescheduled to{" "}
              <strong>
                {selectedDate?.toLocaleDateString()} at {selectedTime}
              </strong>
            </DialogDescription>
          </DialogHeader>
          <Button
            onClick={() => {
              setShowConfirm(false);
              onClose();
            }}
            className="mt-4 bg-[#FA812F] hover:bg-[#f5933c] w-full"
          >
            Done
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
