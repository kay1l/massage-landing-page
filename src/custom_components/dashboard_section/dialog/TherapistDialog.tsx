"use client";

import { useState, useEffect } from "react";
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
import { Therapist } from "@/types/therapist";
import { UserServices } from "@/services/userService";

interface TherapistDialogProps {
  open: boolean;
  onClose: () => void;
  onAssign: (therapist: Therapist) => void;
}

export function TherapistDialog({
  open,
  onClose,
  onAssign,
}: TherapistDialogProps) {
  const [therapists, setTherapists] = useState<Therapist[]>([]);
  const [selected, setSelected] = useState<Therapist | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch therapists from API on mount
  useEffect(() => {
    if (!open) return; // only fetch when dialog opens
    const fetchTherapists = async () => {
      try {
        setLoading(true);
        const response = await UserServices.getTherapists();
        if (response.status) {
          setTherapists(response.users); // API returns { status, users }
          setError(null);
        } else {
          setTherapists([]);
          setError("Failed to load therapists");
        }
      } catch (err: any) {
        setTherapists([]);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchTherapists();
  }, [open]); // refetch every time dialog opens

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
              {loading && <p className="text-center py-4 text-gray-500">Loading...</p>}
              {error && <p className="text-center py-4 text-red-500">{error}</p>}
              {!loading && !error && therapists.length === 0 && (
                <p className="text-center py-4 text-gray-500">No therapists found.</p>
              )}
              {!loading &&
                therapists.map((t) => (
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
                      <AvatarImage src={ ""} />
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

              {/* Scrollable specialties */}
              <div className="flex-1 overflow-auto px-5 py-4">
                <div className="space-y-4">
                  {selected.specialties.map((s, idx) => (
                    <div
                      key={idx}
                      className="p-4 border rounded-lg bg-white shadow-sm"
                    >
                      <h3 className="font-semibold text-sm text-[#FA812F]">
                        {s.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
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
