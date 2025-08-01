"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import DashboardHeader from "@/custom_components/dashboard_section/Header";
import DashboardFooter from "@/custom_components/dashboard_section/Footer";
import AppointmentsTable, { Appointment, AppointmentStatus } from "@/custom_components/dashboard_section/AppointmentTable";

const appointments: Appointment[] = [
  {
    id: 1,
    type: "Swedish Massage",
    date: "2025-08-01",
    time: "3:00 PM",
    therapist: "Jane Doe",
    status: "upcoming",
  },
  {
    id: 2,
    type: "Hot Stone Massage",
    date: "2025-07-15",
    time: "1:30 PM",
    therapist: "Anna Cruz",
    status: "completed",
  },
  {
    id: 3,
    type: "Deep Tissue Massage",
    date: "2025-07-10",
    time: "10:00 AM",
    therapist: "Mike Santos",
    status: "cancelled",
  },
  ...Array.from({ length: 20 }, (_, i) => ({
    id: i + 4,
    type: "Aromatherapy",
    date: "2025-08-02",
    time: "2:00 PM",
    therapist: "Ella Rose",
    status: (["completed", "cancelled", "upcoming"][i % 3]) as AppointmentStatus,
  })),
];


export default function AppointmentsPage() {
  const summary = {
    upcoming: appointments.filter((a) => a.status === "upcoming").length,
    completed: appointments.filter((a) => a.status === "completed").length,
    cancelled: appointments.filter((a) => a.status === "cancelled").length,
  };

  return (
    <div className="min-h-screen bg-[#FEF3E2] text-[#5C4A42] pt-32">
      <DashboardHeader />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#5C4A42]">
          My Appointments
        </h1>
        
        {/* Summary Section */}
        <div className="flex flex-wrap justify-between gap-2 sm:gap-3 mb-6">
          <Card className="w-[32%] min-w-[100px] flex-1 bg-white border border-[#F3C623] shadow-sm text-center px-2 py-3">
            <CardHeader className="p-1">
              <CardTitle className="text-[#FA812F] text-sm sm:text-base">
                Upcoming
              </CardTitle>
            </CardHeader>
            <CardContent className="p-1">
              <p className="text-xl sm:text-2xl font-bold">
                {summary.upcoming}
              </p>
            </CardContent>
          </Card>

          <Card className="w-[32%] min-w-[100px] flex-1 bg-white border border-[#F3C623] shadow-sm text-center px-2 py-3">
            <CardHeader className="p-1">
              <CardTitle className="text-green-600 text-sm sm:text-base">
                Completed
              </CardTitle>
            </CardHeader>
            <CardContent className="p-1">
              <p className="text-xl sm:text-2xl font-bold">
                {summary.completed}
              </p>
            </CardContent>
          </Card>

          <Card className="w-[32%] min-w-[100px] flex-1 bg-white border border-[#F3C623] shadow-sm text-center px-2 py-3">
            <CardHeader className="p-1">
              <CardTitle className="text-red-500 text-sm sm:text-base">
                Cancelled
              </CardTitle>
            </CardHeader>
            <CardContent className="p-1">
              <p className="text-xl sm:text-2xl font-bold">
                {summary.cancelled}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Table Card */}
       <AppointmentsTable data={appointments} />
      </div>

      <DashboardFooter />
    </div>
  );
}
