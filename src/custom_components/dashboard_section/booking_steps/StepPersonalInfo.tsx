"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface Props {
  name: string;
  setName: (val: string) => void;
  contact: string;
  setContact: (val: string) => void;
  address: string;
  setAddress: (val: string) => void;
  landmark: string;
  setLandmark: (val: string) => void;
  notes: string;
  setNotes: (val: string) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export default function Step3PersonalInfo({
  name,
  setName,
  contact,
  setContact,
  address,
  setAddress,
  landmark,
  setLandmark,
  notes,
  setNotes,
  nextStep,
  prevStep,
}: Props) {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#FA812F] mb-6">
        Personal Information
      </h2>

      <div className="mb-6">
        <label className="block text-base font-medium mb-2">Full Name</label>
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
        <label className="block text-base font-medium mb-2">Address</label>
        <Textarea
          placeholder="Full Address"
          className="min-h-[100px] px-4 py-3 text-base rounded-xl border-[#E4CBB5]"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label className="block text-base font-medium mb-2">Landmark</label>
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
  );
}
