"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import DashboardHeader from "@/custom_components/dashboard_section/Header";

import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import  { CalendarWithTime } from "@/components/calendar-20";

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [contact, setContact] = useState("");

  const steps = ["Service", "Date", "Info"];
  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  return (
    <div className="min-h-screen bg-[#FEF3E2] text-[#5C4A42] pt-40">
      <DashboardHeader />

      {/* Step Wizard */}
      <div className="flex justify-center py-8">
        <div className="flex items-center space-x-6">
          {steps.map((label, index) => {
            const current = index + 1;
            const isActive = step === current;
            const isCompleted = step > current;

            return (
              <div key={index} className="flex items-center">
                <div
                  className={cn(
                    "w-12 h-12 flex items-center justify-center rounded-full text-sm font-bold border transition-all",
                    isActive
                      ? "bg-[#FA812F] text-white border-[#FA812F]"
                      : isCompleted
                      ? "bg-[#5C4A42] text-white border-[#5C4A42]"
                      : "bg-white text-[#5C4A42] border-[#5C4A42]"
                  )}
                >
                  {current}
                </div>
                {index < steps.length - 1 && (
                  <div className="h-1 w-16 bg-[#5C4A42] mx-2 rounded-full"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Form Container */}
      <div className="flex justify-center px-4 pb-16">
        <div className="w-full max-w-3xl bg-white p-10 rounded-xl shadow-md">
          {step === 1 && (
            <>
              <h2 className="text-xl font-semibold mb-4">Step 1: Choose a Service</h2>
              <Select onValueChange={setSelectedService}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a massage type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="swedish">Swedish Massage</SelectItem>
                  <SelectItem value="deep-tissue">Deep Tissue Massage</SelectItem>
                  <SelectItem value="hot-stone">Hot Stone Massage</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={nextStep} className="mt-6 w-full bg-[#FA812F] hover:bg-[#f5933c]">
                Next
              </Button>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="text-xl font-semibold mb-4">Step 2: Select a Date and Time</h2>
              <CalendarWithTime
                date={selectedDate}
                setDate={setSelectedDate}
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
              />
              <div className="flex gap-2 mt-6">
                <Button onClick={prevStep} variant="outline" className="w-1/2">
                  Back
                </Button>
                <Button
                  onClick={nextStep}
                  className="w-1/2 bg-[#FA812F] hover:bg-[#f5933c]"
                  disabled={!selectedDate || !selectedTime}
                >
                  Next
                </Button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="text-xl font-semibold mb-4">Step 3: Your Information</h2>
              <Input
                placeholder="Your Full Name"
                className="mb-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                placeholder="Contact Number"
                className="mb-3"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
              <Textarea
                placeholder="Full Address"
                className="mb-3"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <Input
                placeholder="Landmark / Directions"
                className="mb-3"
                value={landmark}
                onChange={(e) => setLandmark(e.target.value)}
              />
              <Textarea
                placeholder="Additional notes or preferences"
                className="mb-3"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
              <div className="flex gap-2 mt-6">
                <Button onClick={prevStep} variant="outline" className="w-1/2">
                  Back
                </Button>
                <Button
                  className="w-1/2 bg-[#FA812F] hover:bg-[#f5933c]"
                  onClick={() => alert("Booking submitted!")}
                  disabled={!name || !contact || !address}
                >
                  Submit
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
