"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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
import { Badge } from "@/components/ui/badge";
import { UserCog } from "lucide-react";
import { Input } from "@/components/ui/input";

// ----------------------
// Therapist Types
// ----------------------
export interface Specialty {
  name: string;
  description: string;
}

export interface Therapist {
  id: number;
  name: string;
  specialties: Specialty[];
  contact: string;
  email: string;
  address: string;
  status: "Active" | "Inactive";
}

interface TherapistsTableProps {
  data: Therapist[];
}

// ----------------------
// Status Badge Renderer
// ----------------------
function getStatusBadge(status: "Active" | "Inactive") {
  const baseClass =
    "text-white px-1.5 py-0.5 rounded-md text-[9px] sm:text-[10px] sm:px-2 sm:py-0.5 whitespace-nowrap";

  switch (status) {
    case "Active":
      return <Badge className={`${baseClass} bg-green-600/90`}>Active</Badge>;
    case "Inactive":
      return <Badge className={`${baseClass} bg-red-500/90`}>Inactive</Badge>;
  }
}

// ----------------------
// TherapistsTable Component
// ----------------------
export default function TherapistsTable({ data }: TherapistsTableProps) {
  const [selectedTherapist, setSelectedTherapist] = useState<Therapist | null>(
    null
  );

  // Add therapist dialog state
  const [openAdd, setOpenAdd] = useState(false);

  // Form states
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [specialties, setSpecialties] = useState<Specialty[]>([
    { name: "", description: "" },
  ]);

  // Add new specialty field (max 2)
  const addSpecialtyField = () => {
    if (specialties.length < 2) {
      setSpecialties([...specialties, { name: "", description: "" }]);
    }
  };

  // Update specialty value
  const updateSpecialty = (
    index: number,
    field: keyof Specialty,
    value: string
  ) => {
    const updated = [...specialties];
    updated[index][field] = value;
    setSpecialties(updated);
  };

  return (
    <>
      {/* View Details Dialog */}
      <Dialog
        open={!!selectedTherapist}
        onOpenChange={() => setSelectedTherapist(null)}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Therapist Details</DialogTitle>
            <DialogDescription>
              Quick overview of the therapist profile
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Name: <strong>{selectedTherapist?.name}</strong>
            </p>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Specialties:</p>
              {selectedTherapist?.specialties.map((s, i) => (
                <div
                  key={i}
                  className="p-2 border rounded-md bg-gray-50 text-xs space-y-1"
                >
                  <p>
                    <strong>{s.name}</strong>
                  </p>
                  <p className="text-muted-foreground">{s.description}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Contact: <strong>{selectedTherapist?.contact}</strong>
            </p>
            <p className="text-sm text-muted-foreground">
              Address: <strong>{selectedTherapist?.address}</strong>
            </p>
            <p className="text-sm text-muted-foreground">
              Status: {getStatusBadge(selectedTherapist?.status as any)}
            </p>
          </div>

          <DialogFooter className="mt-4">
            <Button variant="ghost" onClick={() => setSelectedTherapist(null)}>
              Close
            </Button>
            <Button variant="default">Edit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Table */}
      <Card className="shadow-lg border-none">
        <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <CardTitle className="text-xl text-[#5C4A42]">
            Therapists Overview
          </CardTitle>

          {/* Add Therapist Dialog */}
          <Dialog open={openAdd} onOpenChange={setOpenAdd}>
            <DialogTrigger asChild>
              <Button className="rounded-xl bg-[#FA812F] hover:bg-[#e76b1c]">
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
                <Input
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  placeholder="Contact Number"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
                <Input
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />

                {/* Specialties Dynamic Fields */}
                <div className="space-y-2">
                  <p className="text-sm font-medium">Specialties (max 2)</p>
                  {specialties.map((s, index) => (
                    <div
                      key={index}
                      className="p-3 border rounded-md bg-gray-50 space-y-2"
                    >
                      <Input
                        placeholder="Title"
                        value={s.name}
                        onChange={(e) =>
                          updateSpecialty(index, "name", e.target.value)
                        }
                      />
                      <Input
                        placeholder="Description"
                        value={s.description}
                        onChange={(e) =>
                          updateSpecialty(index, "description", e.target.value)
                        }
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
                <Button variant="ghost" onClick={() => setOpenAdd(false)}>
                  Cancel
                </Button>
                <Button
                  variant="default"
                  onClick={() => {
                    // Handle save here
                    console.log({ name, contact, address, specialties });
                    setOpenAdd(false);
                  }}
                >
                  Submit
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardHeader>

        <CardContent className="overflow-x-auto">
          {data.length === 0 ? (
            <p className="text-center text-sm text-gray-500 py-4">
              No therapists available.
            </p>
          ) : (
            <table className="min-w-full table-auto text-sm text-left text-[#5C4A42]">
              <thead className="bg-[#FEE8CC] text-xs uppercase tracking-wider text-[#5C4A42]">
                <tr>
                  <th className="px-4 py-3 font-medium">Name</th>
                  <th className="px-4 py-3 font-medium">Specialties</th>
                  <th className="px-4 py-3 font-medium">Contact</th>
                  <th className="px-4 py-3 font-medium">Email</th>
                  <th className="px-4 py-3 font-medium">Address</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EFD7BC]">
                {data.map((t) => (
                  <tr
                    key={t.id}
                    className="hover:bg-[#FFF8F2] transition-colors"
                  >
                    <td className="px-4 py-3 whitespace-nowrap font-medium">
                      {t.name}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex flex-wrap gap-1">
                        {t.specialties.map((s, i) => (
                          <Badge
                            key={i}
                            className="bg-[#FA812F] text-white rounded-md px-1.5 py-0.5 text-[10px] font-medium"
                          >
                            {s.name}
                          </Badge>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">{t.contact}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{t.email}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{t.address}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {getStatusBadge(t.status)}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex justify-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => setSelectedTherapist(t)}
                          className="text-blue-500 border-blue-300 hover:bg-blue-100"
                        >
                          <UserCog className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </CardContent>
      </Card>
    </>
  );
}
