"use client";

import { useState, useMemo } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarClock, XCircle } from "lucide-react";

// ✅ Define strict status type
export type AppointmentStatus = "upcoming" | "completed" | "cancelled";

export interface Appointment {
  id: number;
  type: string;
  date: string;
  time: string;
  therapist: string;
  status: AppointmentStatus;
}

function getStatusBadge(status: AppointmentStatus) {
  const baseClass =
    "text-white px-1.5 py-0.5 rounded-md text-[9px] sm:text-[10px] sm:px-2 sm:py-0.5 whitespace-nowrap";

  switch (status) {
    case "upcoming":
      return <Badge className={`${baseClass} bg-[#FA812F]/90`}>Upcoming</Badge>;
    case "completed":
      return (
        <Badge className={`${baseClass} bg-green-600/90`}>Completed</Badge>
      );
    case "cancelled":
      return <Badge className={`${baseClass} bg-red-500/90`}>Cancelled</Badge>;
  }
}

interface AppointmentsTableProps {
  data: Appointment[];
}

export default function AppointmentsTable({ data }: AppointmentsTableProps) {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | AppointmentStatus>(
    "all"
  );
  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null);
  const [modalType, setModalType] = useState<"reschedule" | "cancel" | null>(
    null
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredData = useMemo(() => {
    return data.filter((a) => {
      const matchesStatus = filterStatus === "all" || a.status === filterStatus;
      const matchesSearch =
        a.type.toLowerCase().includes(search.toLowerCase()) ||
        a.therapist.toLowerCase().includes(search.toLowerCase());
      return matchesStatus && matchesSearch;
    });
  }, [data, search, filterStatus]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const openModal = (
    appointment: Appointment,
    type: "reschedule" | "cancel"
  ) => {
    setSelectedAppointment(appointment);
    setModalType(type);
  };

  const closeModal = () => {
    setSelectedAppointment(null);
    setModalType(null);
  };
  return (
    <>
      <Dialog open={!!selectedAppointment} onOpenChange={closeModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {modalType === "reschedule"
                ? "Reschedule Appointment"
                : "Cancel Appointment"}
            </DialogTitle>
            <DialogDescription>
              {modalType === "reschedule"
                ? `You're about to reschedule your appointment with ${selectedAppointment?.therapist}.`
                : `Are you sure you want to cancel your appointment with ${selectedAppointment?.therapist}?`}
            </DialogDescription>
          </DialogHeader>

          {/* Modal Body */}
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Type: <strong>{selectedAppointment?.type}</strong>
            </p>
            <p className="text-sm text-muted-foreground">
              Date & Time:{" "}
              <strong>
                {selectedAppointment?.date} at {selectedAppointment?.time}
              </strong>
            </p>
          </div>

          <DialogFooter className="mt-4">
            <Button variant="ghost" onClick={closeModal}>
              Close
            </Button>
            <Button variant="destructive">
              {modalType === "reschedule" ? "Reschedule" : "Cancel"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Card className="shadow-lg border-none">
        <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <CardTitle className="text-xl text-[#5C4A42]">
            Appointments Overview
          </CardTitle>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Input
              type="text"
              placeholder="Search by type or therapist..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full sm:w-64"
            />
            <Select
              value={filterStatus}
              onValueChange={(value) => {
                setFilterStatus(value as AppointmentStatus | "all");
                setCurrentPage(1);
              }}
            >
              <SelectTrigger className="w-full  sm:w-48 capitalize">
                {filterStatus}
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>

        <CardContent className="overflow-x-auto">
          {paginatedData.length === 0 ? (
            <p className="text-center text-sm text-gray-500 py-4">
              No matching appointments found.
            </p>
          ) : (
            <table className="min-w-full table-auto text-sm text-left text-[#5C4A42]">
              <thead className="bg-[#FEE8CC] text-xs uppercase tracking-wider text-[#5C4A42]">
                <tr>
                  <th className="px-4 py-3 font-medium">Massage Type</th>
                  <th className="px-4 py-3 font-medium">Date</th>
                  <th className="px-4 py-3 font-medium">Time</th>
                  <th className="px-4 py-3 font-medium">Therapist</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EFD7BC]">
                {paginatedData.map((a) => (
                  <tr
                    key={a.id}
                    className="hover:bg-[#FFF8F2] transition-colors"
                  >
                    <td className="px-4 py-3 whitespace-nowrap font-medium">
                      {a.type}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">{a.date}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{a.time}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {a.therapist}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center">
                        {getStatusBadge(a.status)}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center">
                      {a.status === "upcoming" ? (
                        <div className="flex justify-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => openModal(a, "reschedule")}
                            className="text-blue-500 border-blue-300 hover:bg-blue-100"
                          >
                            <CalendarClock className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => openModal(a, "cancel")}
                            className="text-red-500 border-red-300 hover:bg-red-100"
                          >
                            <XCircle className="w-4 h-4" />
                          </Button>
                        </div>
                      ) : (
                        "-"
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {totalPages > 1 && (
            <div className="flex justify-between items-center mt-6">
              <Button
                variant="ghost"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
              >
                Previous
              </Button>
              <span className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                variant="ghost"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
              >
                Next
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
}
