"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Service } from "@/types/service";

interface Props {
  services: Service[];
  selectedService: string;
  setSelectedService: (val: string) => void;
  nextStep: () => void;
}

export default function Step1Service({
  services,
  selectedService,
  setSelectedService,
  nextStep,
}: Props) {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#FA812F] mb-6">Choose a Service</h2>
      <Select onValueChange={setSelectedService} value={selectedService}>
        <SelectTrigger className="w-full text-base px-4 rounded-lg border-[#E4CBB5]">
          <SelectValue placeholder="Select a massage type" />
        </SelectTrigger>
        <SelectContent>
          {services.map((service) => (
            <SelectItem key={service.id} value={service.id.toString()}>
              {service.name}
            </SelectItem>
          ))}
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
  );
}
