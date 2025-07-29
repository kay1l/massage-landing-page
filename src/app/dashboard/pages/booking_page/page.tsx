"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import DashboardHeader from "@/custom_components/dashboard_section/Header";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { CalendarWithTime } from "@/components/calendar-20";
import StepWizard from "@/custom_components/dashboard_section/Wizard";
import DashboardFooter from "@/custom_components/dashboard_section/Footer";
import LoadingScreen from "@/custom_components/LoadingScreen";

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

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
     const [isLoading, setIsLoading] = useState(true);
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
      }, []);
    
      if (isLoading) return <LoadingScreen />;
  return (
    <div className="min-h-screen bg-[#FEF3E2] text-[#5C4A42] pt-40">
      <DashboardHeader />

      <StepWizard
        steps={["Personal Info", "Location", "Schedule", "Payment"]}
        step={step}
      />

      <div className="flex justify-center px-4 pb-16">
        <div className="w-full max-w-3xl bg-white p-10 rounded-2xl shadow-md">
          {/* Step 1 */}
          {step === 1 && (
            <>
              <h2 className="text-2xl font-bold text-[#FA812F] mb-6">
                Step 1: Choose a Service
              </h2>
              <Select onValueChange={setSelectedService}>
                <SelectTrigger className="w-full h-12 text-base px-4 rounded-xl border-[#E4CBB5]">
                  <SelectValue placeholder="Select a massage type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="swedish">Swedish Massage</SelectItem>
                  <SelectItem value="deep-tissue">Deep Tissue Massage</SelectItem>
                  <SelectItem value="hot-stone">Hot Stone Massage</SelectItem>
                </SelectContent>
              </Select>
              <Button
                onClick={nextStep}
                className="mt-8 w-full h-12 text-base bg-[#FA812F] hover:bg-[#f5933c]"
              >
                Next
              </Button>
            </>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <>
              <h2 className="text-2xl font-bold text-[#FA812F] mb-6">
                Step 2: Select a Date and Time
              </h2>
              <CalendarWithTime
                date={selectedDate}
                setDate={setSelectedDate}
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
              />
              <div className="flex gap-3 mt-8">
                <Button onClick={prevStep} variant="outline" className="w-1/2 h-12 text-base border-[#FA812F] text-[#5C4A42]">
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
          )}

          {/* Step 3 */}
          {step === 3 && (
            <>
              <h2 className="text-2xl font-bold text-[#FA812F] mb-6">
                Step 3: Your Information
              </h2>

              <div className="mb-6">
                <label className="block text-base font-medium mb-2">
                  Full Name
                </label>
                <Input
                  placeholder="Your Full Name"
                  className="h-12 px-4 text-base rounded-xl border-[#E4CBB5]"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <label className="block text-base font-medium mb-2">
                  Contact Number
                </label>
                <Input
                  placeholder="Contact Number"
                  className="h-12 px-4 text-base rounded-xl border-[#E4CBB5]"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <label className="block text-base font-medium mb-2">
                  Address
                </label>
                <Textarea
                  placeholder="Full Address"
                  className="min-h-[100px] px-4 py-3 text-base rounded-xl border-[#E4CBB5]"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <label className="block text-base font-medium mb-2">
                  Landmark
                </label>
                <Input
                  placeholder="Landmark / Directions"
                  className="h-12 px-4 text-base rounded-xl border-[#E4CBB5]"
                  value={landmark}
                  onChange={(e) => setLandmark(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <label className="block text-base font-medium mb-2">
                  Notes or Preferences
                </label>
                <Textarea
                  placeholder="Additional notes or preferences"
                  className="min-h-[100px] px-4 py-3 text-base rounded-xl border-[#E4CBB5]"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              <div className="flex gap-3 mt-8">
                <Button
                  onClick={prevStep}
                  variant="outline"
                  className="w-1/2 h-12 text-base border-[#FA812F] text-[#5C4A42]"
                >
                  Back
                </Button>
                <Button
                  className="w-1/2 h-12 text-base bg-[#FA812F] hover:bg-[#f5933c]"
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
      <DashboardFooter />
    </div>
  );
}
