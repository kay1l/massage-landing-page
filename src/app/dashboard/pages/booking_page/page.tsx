"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { withAuth } from "@/hoc/withAuth";

import DashboardHeader from "@/custom_components/dashboard_section/Header";
import DashboardSidebar from "@/custom_components/dashboard_section/dashboard_sidebar";
import StepWizard from "@/custom_components/dashboard_section/Wizard";
import DashboardFooter from "@/custom_components/dashboard_section/Footer";
import LoadingScreen from "@/custom_components/LoadingScreen";

import { bookingServices } from "@/services/bookingService";
import { serviceServices } from "@/services/serviceTypesService";
import { Service } from "@/types/service";
import { BookingPayload } from "@/types/booking";

import Step1Service from "@/custom_components/dashboard_section/booking_steps/ServiceStep";
import Step2Schedule from "@/custom_components/dashboard_section/booking_steps/StepSchedule";
import Step3PersonalInfo from "@/custom_components/dashboard_section/booking_steps/StepPersonalInfo";
import Step4Review from "@/custom_components/dashboard_section/booking_steps/StepReview";

function BookingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const { user } = useSelector((state: RootState) => state.user);

  // booking states
  const [services, setServices] = useState<Service[]>([]);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState(user?.name || "");
  const [notes, setNotes] = useState("");
  const [address, setAddress] = useState(user?.address || "");
  const [landmark, setLandmark] = useState("");
  const [contact, setContact] = useState(user?.contact || "");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await serviceServices.getServices();
        if (response.status) setServices(response.services);
      } catch (error) {
        console.error("Failed to fetch services:", error);
      }
    };
    fetchServices();
  }, []);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async () => {
    if (!selectedService || !selectedDate || !selectedTime || !name || !contact || !address) {
      toast.warning("Please fill in all required fields");
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
        router.push("/dashboard/pages/appointments_page");
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
      <StepWizard steps={["Personal Info", "Location", "Schedule", "Payment"]} step={step} />

      <div className="flex justify-center px-4 pb-16">
        <div className="w-full max-w-3xl bg-white p-10 rounded-2xl shadow-md">
          {step === 1 && (
            <Step1Service
              services={services}
              selectedService={selectedService}
              setSelectedService={setSelectedService}
              nextStep={nextStep}
            />
          )}

          {step === 2 && (
            <Step2Schedule
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}

          {step === 3 && (
            <Step3PersonalInfo
              name={name}
              setName={setName}
              contact={contact}
              setContact={setContact}
              address={address}
              setAddress={setAddress}
              landmark={landmark}
              setLandmark={setLandmark}
              notes={notes}
              setNotes={setNotes}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}

          {step === 4 && (
            <Step4Review
              selectedService={selectedService}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              name={name}
              contact={contact}
              address={address}
              landmark={landmark}
              notes={notes}
              prevStep={prevStep}
              handleSubmit={handleSubmit}
            />
          )}
        </div>
      </div>

      <DashboardFooter />
    </div>
  );
}

export default withAuth(BookingPage);
