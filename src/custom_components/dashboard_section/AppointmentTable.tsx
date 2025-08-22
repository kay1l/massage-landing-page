"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarClock, XCircle } from "lucide-react";
import { CalendarWithTime } from "@/components/calendar-20"; // ✅ reuse your existing component
import { AppointmentStatus, BookingResponse } from "@/types/booking";

function getStatusBadge(status: AppointmentStatus) {
  const baseClass =
    "text-white px-1.5 py-0.5 rounded-md text-[9px] sm:text-[10px] sm:px-2 sm:py-0.5 whitespace-nowrap";

  switch (status) {
    case "Pending":
      return <Badge className={`${baseClass} bg-[#FA812F]/90`}>Upcoming</Badge>;
    case "Completed":
      return (
        <Badge className={`${baseClass} bg-green-600/90`}>Completed</Badge>
      );
    case "Cancelled":
      return <Badge className={`${baseClass} bg-red-500/90`}>Cancelled</Badge>;
    case "Rejected":
      return <Badge className={`${baseClass} bg-red-500/90`}>Rejected</Badge>;
  }
}

interface AppointmentsTableProps {
  data: BookingResponse[];
}

export default function AppointmentsTable({ data }: AppointmentsTableProps) {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | AppointmentStatus>(
    "all"
  );

  const [selectedAppointment, setSelectedAppointment] =
    useState<BookingResponse | null>(null);
  const [modalType, setModalType] = useState<"reschedule" | "cancel" | null>(
    null
  );

  // ✅ reschedule state
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);

  const openModal = (
    appointment: BookingResponse,
    type: "reschedule" | "cancel"
  ) => {
    setSelectedAppointment(appointment);
    setModalType(type);
  };

  const closeModal = () => {
    setSelectedAppointment(null);
    setModalType(null);
    setSelectedDate(undefined);
    setSelectedTime(null);
  };

  const handleRescheduleConfirm = () => {
    console.log("Rescheduling:", {
      id: selectedAppointment?.id,
      newDate: selectedDate,
      newTime: selectedTime,
    });
    setShowConfirm(true);
  };

  return (
    <>
      {/* Main Modal */}
      <Dialog
        open={!!selectedAppointment && !showConfirm}
        onOpenChange={closeModal}
      >
        <DialogContent className="sm:max-w-2xl w-full p-8">
          <DialogHeader>
            <DialogTitle className="text-[#FA812F]">
              {modalType === "reschedule"
                ? "Reschedule Appointment"
                : "Cancel Appointment"}
            </DialogTitle>
            <DialogDescription>
              {modalType === "reschedule"
                ? `Choose a new date and time for your appointment.`
                : `Are you sure you want to cancel this appointment?`}
            </DialogDescription>
          </DialogHeader>

          {modalType === "reschedule" ? (
            <>
              {/* Calendar & Time Picker */}
              <CalendarWithTime
                date={selectedDate}
                setDate={setSelectedDate}
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
              />

              <div className="flex gap-3 mt-6">
                <Button
                  onClick={closeModal}
                  variant="outline"
                  className="w-1/2 h-11 border-[#FA812F] text-[#5C4A42]"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleRescheduleConfirm}
                  className="w-1/2 h-11 bg-[#FA812F] hover:bg-[#f5933c]"
                  disabled={!selectedDate || !selectedTime}
                >
                  Confirm
                </Button>
              </div>
            </>
          ) : (
            <DialogFooter className="mt-4">
              <Button variant="ghost" onClick={closeModal}>
                Close
              </Button>
              <Button
                variant="destructive"
                onClick={() => {
                  console.log("Cancelling:", selectedAppointment?.id);
                  closeModal();
                }}
              >
                Cancel Appointment
              </Button>
            </DialogFooter>
          )}
        </DialogContent>
      </Dialog>

      {/* Success Confirmation */}
      <Dialog open={showConfirm} onOpenChange={setShowConfirm}>
        <DialogContent className="sm:max-w-md text-center">
          <DialogHeader>
            <DialogTitle className="text-green-600">
              ✅ Schedule Updated
            </DialogTitle>
            <DialogDescription>
              Appointment rescheduled to{" "}
              <strong>
                {selectedDate?.toLocaleDateString()} at {selectedTime}
              </strong>
            </DialogDescription>
          </DialogHeader>
          <Button
            onClick={() => {
              setShowConfirm(false);
              closeModal();
            }}
            className="mt-4 bg-[#FA812F] hover:bg-[#f5933c] w-full"
          >
            Done
          </Button>
        </DialogContent>
      </Dialog>

      {/* === Table === */}
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
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:w-64"
            />
            <Select
              value={filterStatus}
              onValueChange={(value) =>
                setFilterStatus(value as AppointmentStatus | "all")
              }
            >
              <SelectTrigger className="w-full sm:w-48 capitalize">
                {filterStatus}
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="Pending">Upcoming</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
                <SelectItem value="Cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>

        <CardContent className="overflow-x-auto">
          {data.length === 0 ? (
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
                {data.map((a) => (
                  <tr
                    key={a.id}
                    className="hover:bg-[#FFF8F2] transition-colors"
                  >
                    <td className="px-4 py-3 whitespace-nowrap font-medium">
                      {a.service.name}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {a.booking_date}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {a.booking_time}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">John</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <Select
                        defaultValue={a.status}
                        onValueChange={(value) => {
                          console.log("New status:", value);
                          // 👉 here you can call API or update state
                        }}
                      >
                        <SelectTrigger className="w-[140px]">
                          <SelectValue>{getStatusBadge(a.status)}</SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">
                            {getStatusBadge("Pending")}
                          </SelectItem>
                          <SelectItem value="completed">
                            {getStatusBadge("Completed")}
                          </SelectItem>
                          <SelectItem value="cancelled">
                            {getStatusBadge("Cancelled")}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </td>
                    <td className="px-4 py-3 text-center">
                      {a.status === "Pending" ? (
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
        </CardContent>
      </Card>
    </>
  );
}
