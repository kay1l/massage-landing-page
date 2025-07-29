"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import DashboardHeader from "@/custom_components/dashboard_section/Header";
import DashboardFooter from "@/custom_components/dashboard_section/Footer";

const appointments = [
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
    status: i % 3 === 0 ? "completed" : i % 3 === 1 ? "cancelled" : "upcoming",
  })),
];

const getStatusBadge = (status: string) => {
  const baseClass =
    "text-white px-2 py-0.5 rounded text-[10px] sm:text-xs sm:px-3 sm:py-1 whitespace-nowrap";

  switch (status) {
    case "upcoming":
      return <Badge className={`${baseClass} bg-[#FA812F]/90`}>Upcoming</Badge>;
    case "completed":
      return (
        <Badge className={`${baseClass} bg-green-600/90`}>Completed</Badge>
      );
    case "cancelled":
      return <Badge className={`${baseClass} bg-red-500/90`}>Cancelled</Badge>;
    default:
      return null;
  }
};

export default function AppointmentsPage() {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredAppointments = appointments.filter((a) => {
    const matchSearch =
      a.type.toLowerCase().includes(search.toLowerCase()) ||
      a.therapist.toLowerCase().includes(search.toLowerCase());
    const matchStatus =
      filterStatus === "all" ? true : a.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const totalPages = Math.ceil(filteredAppointments.length / itemsPerPage);
  const paginatedData = filteredAppointments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
                  setFilterStatus(value);
                  setCurrentPage(1);
                }}
              >
                <SelectTrigger className="w-full sm:w-48">
                  <span className="capitalize">{filterStatus}</span>
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
                    <th className="px-4 py-3 font-medium text-center">
                      Action
                    </th>
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
                          <Button
                            variant="outline"
                            className="text-red-500 border-red-300 hover:bg-red-100"
                          >
                            Cancel
                          </Button>
                        ) : (
                          "-"
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {/* Pagination */}
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
      </div>

      <DashboardFooter />
    </div>
  );
}
