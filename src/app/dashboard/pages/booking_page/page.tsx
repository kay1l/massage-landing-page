"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import DashboardHeader from "@/custom_components/dashboard_section/Header";
import { bookingServices } from "@/services/bookingService";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";


import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

import { CalendarWithTime } from "@/components/calendar-20";
import StepWizard from "@/custom_components/dashboard_section/Wizard";
import DashboardFooter from "@/custom_components/dashboard_section/Footer";
import LoadingScreen from "@/custom_components/LoadingScreen";
import { BookingPayload } from "@/types/booking";
import {
  Calendar,
  Clock,
  Landmark,
  MapPin,
  Phone,
  StickyNote,
  User,
} from "lucide-react";
import Image from "next/image";
import { withAuth } from "@/hoc/withAuth";
import DashboardSidebar from "@/custom_components/dashboard_section/dashboard_sidebar";

function BookingPage() {
  const router = useRouter();
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

  const { user } = useSelector((state: RootState) => state.user);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async () => {
    if (
      !selectedService ||
      !selectedDate ||
      !selectedTime ||
      !name ||
      !contact ||
      !address
    ) {
      alert("Please fill in all required fields");
      return;
    }

    const datePart = selectedDate.toLocaleDateString("en-CA");
    const bookingDateTime = `${datePart} ${selectedTime}:00`;

    try {
      const payload: BookingPayload = {
        service_id: Number(selectedService),
        booking_date_time: bookingDateTime,
        full_name: name,
        contact_number: contact,
        address,
        landmark: landmark || undefined,
        notes_or_preferences: notes || undefined,
      };
    
      const response = await bookingServices.createBooking(payload);
    
      if (response) {
        router.push("/dashboard")
        toast.success("Booking successfully created!");

      } else {
        toast.error("Booking failed to create");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to create booking", {
        description: "Something went wrong. Please try again.",
      });
    }
    
  };

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-[#FEF3E2] text-[#5C4A42] pt-40">
      <DashboardHeader />
      <DashboardSidebar />
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
                Choose a Service
              </h2>
              <Select onValueChange={setSelectedService}>
                <SelectTrigger className="w-full  text-base px-4 rounded-lg border-[#E4CBB5]">
                  <SelectValue placeholder="Select a massage type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Swedish Massage</SelectItem>
                  <SelectItem value="2">Deep Tissue Massage</SelectItem>
                  <SelectItem value="3">Trigger-Point Massage</SelectItem>
                </SelectContent>
              </Select>
              <Button
                onClick={nextStep}
                className="mt-8 w-full h-12 text-base bg-[#FA812F] hover:bg-[#f5933c]"
                disabled={!selectedService}
              >
                Next
              </Button>
            </>
          )}

          {/* Step 2 */}
          {step === 2 && (
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
          )}

          {/* Step 3 */}
          {step === 3 && (
            <>
              <h2 className="text-2xl font-bold text-[#FA812F] mb-6">
                Personal Information
              </h2>

              <div className="mb-6">
                <label className="block text-base font-medium mb-2">
                  Full Name
                </label>
                <Input
                  placeholder="Your Full Name"
                  className="h-12 px-4 text-base rounded-xl border-[#E4CBB5]"
                  value={user?.name}
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
                  value={user?.contact || '09999852039'}
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
                  onClick={nextStep}
                  disabled={!name || !contact || !address}
                >
                  Next
                </Button>
              </div>
            </>
          )}

        {/* Step 4 */}
{step === 4 && (
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

    <div className="px-4 py-6 space-y-5"> {/* reduced padding */}
      <div className="flex items-start gap-2"> {/* reduce gap */}
        <Calendar className="text-[#FA812F] w-5 h-5 mt-1" />
        <div className="text-left"> {/* align text left */}
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
)}

        </div>
      </div>
      <DashboardFooter />
    </div>
  );
}
export default withAuth(BookingPage);