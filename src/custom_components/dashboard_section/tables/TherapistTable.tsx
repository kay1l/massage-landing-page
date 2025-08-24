"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { UserCog } from "lucide-react";
// import { Therapist } from "@/types/therapist";
import AddTherapistDialog  from "@/custom_components/dashboard_section/dialog/AddTherapistDialog";
import EditTherapistDialog from "@/custom_components/dashboard_section/dialog/EditTherapistDialog";
import { Therapist, Specialty } from "@/types/therapist";
interface TherapistsTableProps {
  data: Therapist[];
}

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

export default function TherapistsTable({ data }: TherapistsTableProps) {
  const [selectedTherapist, setSelectedTherapist] = useState<Therapist | null>(null);
  const [openEdit, setOpenEdit] = useState(false);

  const handleEditClick = (therapist: Therapist) => {
    setSelectedTherapist(therapist);
    setOpenEdit(true);
  };

  return (
    <>
      {/* Edit Therapist */}
      <EditTherapistDialog
        therapist={selectedTherapist}
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        onSave={(updated) => console.log("Updated:", updated)}
      />

      {/* Table */}
      <Card className="shadow-lg border-none">
        <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <CardTitle className="text-xl text-[#5C4A42]">Therapists Overview</CardTitle>
          <AddTherapistDialog onSubmit={(newTherapist) => console.log("Added:", newTherapist)} />
        </CardHeader>

        <CardContent className="overflow-x-auto">
          {data.length === 0 ? (
            <p className="text-center text-sm text-gray-500 py-4">No therapists available.</p>
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
                  <tr key={t.id} className="hover:bg-[#FFF8F2] transition-colors">
                    <td className="px-4 py-3 whitespace-nowrap font-medium">{t.name}</td>
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
                    <td className="px-4 py-3 whitespace-nowrap">{getStatusBadge(t.status)}</td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex justify-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleEditClick(t)}
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
