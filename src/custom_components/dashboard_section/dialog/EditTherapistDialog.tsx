"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { Therapist, Specialty } from "@/types/therapist";

interface EditTherapistDialogProps {
  therapist: Therapist | null;
  open: boolean;
  onClose: () => void;
  onSave: (therapist: Therapist) => void;
}

export default function EditTherapistDialog({
  therapist,
  open,
  onClose,
  onSave,
}: EditTherapistDialogProps) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [specialties, setSpecialties] = useState<Specialty[]>([]);

  useEffect(() => {
    if (therapist) {
      setName(therapist.name);
      setContact(therapist.contact);
      setEmail(therapist.email);
      setAddress(therapist.address);
      setSpecialties(therapist.specialties);
    }
  }, [therapist]);

  const updateSpecialty = (index: number, field: keyof Specialty, value: string) => {
    const updated = [...specialties];
    updated[index][field] = value;
    setSpecialties(updated);
  };

  const removeSpecialtyField = (index: number) => {
    setSpecialties(specialties.filter((_, i) => i !== index));
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Therapist</DialogTitle>
          <DialogDescription>Update the therapist details below.</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <Input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
          <Input placeholder="Contact Number" value={contact} onChange={(e) => setContact(e.target.value)} />
          <Input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />

          {/* Specialties */}
          <div className="space-y-2">
            <p className="text-sm font-medium">Specialties</p>
            {specialties.map((s, index) => (
              <div key={index} className="relative p-4 border rounded-md bg-gray-50 space-y-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute -top-2 -right-2 text-red-500 hover:bg-red-100 rounded-full p-1 shadow-md"
                  onClick={() => removeSpecialtyField(index)}
                >
                  <X />
                </Button>

                <Input
                  placeholder="Title"
                  value={s.name}
                  onChange={(e) => updateSpecialty(index, "name", e.target.value)}
                />
                <Input
                  placeholder="Description"
                  value={s.description}
                  onChange={(e) => updateSpecialty(index, "description", e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>

        <DialogFooter className="mt-4">
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button
            className="rounded-xl bg-[#FA812F] hover:bg-[#e76b1c]"
            onClick={() => {
              if (therapist) {
                onSave({
                  ...therapist,
                  name,
                  contact,
                  email,
                  address,
                  specialties,
                });
              }
              onClose();
            }}
          >
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
