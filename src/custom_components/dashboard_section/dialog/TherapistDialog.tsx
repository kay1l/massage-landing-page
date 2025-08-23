"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export interface Specialty {
  name: string;
  description: string;
}

export interface Therapist {
  id: string;
  name: string;
  email: string;
  phone: string;
  specialties: Specialty[];
  avatar?: string;
}

interface TherapistDialogProps {
  open: boolean;
  onClose: () => void;
  onAssign: (therapist: Therapist) => void;
}

const sampleTherapists: Therapist[] = [
  {
    id: "1",
    name: "Anna Santos",
    email: "anna@example.com",
    phone: "+63 912 345 6789",
    specialties: [
      {
        name: "Swedish Massage",
        description:
          "Gentle massage focused on relaxation and improving blood circulation.",
      },
      {
        name: "Deep Tissue",
        description:
          "Targets deeper layers of muscles and connective tissue to relieve chronic tension.",
      },
      {
        name: "Aromatherapy",
        description:
          "Massage using essential oils to enhance mood, reduce stress, and improve wellbeing.",
      },
    ],
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "2",
    name: "Marco Dela Cruz",
    email: "marco@example.com",
    phone: "+63 933 222 1111",
    specialties: [
      {
        name: "Thai Massage",
        description:
          "Involves assisted yoga postures and stretching for improved flexibility.",
      },
      {
        name: "Sports Massage",
        description:
          "Designed for athletes, focusing on preventing injuries and enhancing recovery.",
      },
    ],
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: "3",
    name: "Sophia Reyes",
    email: "sophia@example.com",
    phone: "+63 977 111 2233",
    specialties: [
      {
        name: "Shiatsu",
        description:
          "Japanese massage technique using finger pressure on energy pathways.",
      },
      {
        name: "Prenatal Massage",
        description:
          "Tailored for pregnant women to reduce stress and relieve pregnancy discomforts.",
      },
    ],
    avatar: "https://i.pravatar.cc/150?img=10",
  },
];

export function TherapistDialog({
  open,
  onClose,
  onAssign,
}: TherapistDialogProps) {
  const [selected, setSelected] = useState<Therapist | null>(null);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl h-[520px] p-0 flex rounded-xl overflow-hidden">
        {/* LEFT SIDE - Therapist List */}
        <div className="w-1/3 border-r bg-gray-50">
          <DialogHeader className="p-3 border-b">
            <DialogTitle className="text-sm font-semibold text-[#FA812F]">
              Select Therapist
            </DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-[calc(520px-48px)] px-2">
            <div className="space-y-3 py-2">
              {sampleTherapists.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelected(t)}
                  className={cn(
                    "flex flex-col items-center p-3 rounded-lg transition w-full text-center",
                    selected?.id === t.id
                      ? "bg-orange-100 border border-orange-300"
                      : "hover:bg-gray-100 bg-white"
                  )}
                >
                  <Avatar className="w-14 h-14">
                    <AvatarImage src={t.avatar} />
                    <AvatarFallback>{t.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="mt-2">
                    <p className="text-sm font-medium">{t.name}</p>
                  </div>
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* RIGHT SIDE - Specialties */}
        <div className="flex-1 flex flex-col">
          {selected ? (
            <>
              {/* Header */}
              <div className="p-4 border-b text-center">
                <h2 className="text-base font-semibold text-[#5C4A42]">
                  Specialties
                </h2>
              </div>

              {/* Scrollable specialties with auto overflow */}
              <div className="flex-1 overflow-auto px-5 py-4">
                <div className="space-y-4">
                  {selected.specialties.map((s, idx) => (
                    <div
                      key={idx}
                      className="p-4 border rounded-lg bg-white shadow-sm"
                    >
                      <h3 className="font-semibold text-sm text-[#FA812F]">
                        {s.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer fixed */}
              <DialogFooter className="p-4 border-t shrink-0">
                <Button
                  onClick={() => {
                    onAssign(selected);
                    onClose();
                  }}
                  className="bg-[#FA812F] hover:bg-[#f5933c] w-full"
                >
                  Assign Therapist
                </Button>
              </DialogFooter>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500 text-sm">
              Select a therapist from the list
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
