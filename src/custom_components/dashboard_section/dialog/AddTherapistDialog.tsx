"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Specialty, TherapistPayload } from "@/types/therapist";
import { toast } from "sonner";
import { UserServices } from "@/services/userService";

interface AddTherapistDialogProps {

  onSuccess: () => void; // optional callback after success
}

export default function AddTherapistDialog({ onSuccess }: AddTherapistDialogProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [specialties, setSpecialties] = useState<Specialty[]>([
    { title: "", description: "" },
  ]);

  const resetForm = () => {
    setName("");
    setContact("");
    setEmail("");
    setAddress("");
    setSpecialties([{ title: "", description: "" }]);
  };

  const addSpecialtyField = () => {
    if (specialties.length < 2) {
      setSpecialties([...specialties, { title: "", description: "" }]);
    }
  };

  const updateSpecialty = (index: number, field: keyof Specialty, value: string) => {
    const updated = [...specialties];
    updated[index][field] = value;
    setSpecialties(updated);
  };

  const handleSubmit = async () => {
    const payload: TherapistPayload = {
      name,
      contact,
      email,
      address,
      specialties,
    };
    console.log("Submitting payload:", payload);

    try {
      setLoading(true);
      const response = await UserServices.createTherapist(payload);

      if (response.status) {
        toast.success(response.message || "Therapist created successfully");
        resetForm();
        setOpen(false);
        onSuccess(); 
      } else {
        toast.error(response.message || "Failed to create therapist");
      }
    } catch (error) {
      toast.error("Error creating therapist");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="rounded-xl bg-[#FA812F] hover:bg-[#e76b1c]"
          onClick={resetForm}
        >
          + Add Therapist
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Therapist</DialogTitle>
          <DialogDescription>
            Fill in the details to add a new therapist.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <Input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
          <Input placeholder="Contact Number" value={contact} onChange={(e) => setContact(e.target.value)} />
          <Input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />

          {/* Specialties */}
          <div className="space-y-2">
            <p className="text-sm font-medium">Specialties (max 2)</p>
            {specialties.map((s, index) => (
              <div key={index} className="p-3 border rounded-md bg-gray-50 space-y-2">
                <Input
                  placeholder="Title"
                  value={s.title}
                  onChange={(e) => updateSpecialty(index, "title", e.target.value)}
                />
                <Input
                  placeholder="Description"
                  value={s.description}
                  onChange={(e) => updateSpecialty(index, "description", e.target.value)}
                />
              </div>
            ))}
            {specialties.length < 2 && (
              <Button
                type="button"
                variant="outline"
                onClick={addSpecialtyField}
                className="w-full"
              >
                + Add Specialty
              </Button>
            )}
          </div>
        </div>

        <DialogFooter className="mt-4">
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            disabled={loading}
            className="rounded-xl bg-[#FA812F] hover:bg-[#e76b1c]"
            onClick={handleSubmit}
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
