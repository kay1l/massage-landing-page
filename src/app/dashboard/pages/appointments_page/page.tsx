"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
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
import LoadingScreen from "@/custom_components/LoadingScreen";

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
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "upcoming":
      return <Badge className="bg-[#FA812F]/90 text-white">Upcoming</Badge>;
    case "completed":
      return <Badge className="bg-green-600/90 text-white">Completed</Badge>;
    case "cancelled":
      return <Badge className="bg-red-500/90 text-white">Cancelled</Badge>;
    default:
      return null;
  }
};

export default function AppointmentsPage() {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredAppointments = appointments.filter((a) => {
    const matchSearch =
      a.type.toLowerCase().includes(search.toLowerCase()) ||
      a.therapist.toLowerCase().includes(search.toLowerCase());
    const matchStatus =
      filterStatus === "all" ? true : a.status === filterStatus;
    return matchSearch && matchStatus;
  });
const [isLoading, setIsLoading] = useState(true);
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
      }, []);
    
      if (isLoading) return <LoadingScreen />;
  return (
    <div className="min-h-screen bg-[#FEF3E2] text-[#5C4A42] pt-32">
      <DashboardHeader />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#5C4A42]">
          My Appointments
        </h1>

        <Card className="shadow-lg border-none">
          <CardHeader className="gap-4">
            <CardTitle className="text-xl text-[#5C4A42] mb-4">
              Appointments Overview
            </CardTitle>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Input
                type="text"
                placeholder="Search by type or therapist..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full sm:w-64"
              />
              <Select value={filterStatus} onValueChange={setFilterStatus}>
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
            {filteredAppointments.length === 0 ? (
              <p className="text-center text-sm text-gray-500 py-4">
                No matching appointments found.
              </p>
            ) : (
              <div className="w-full min-w-[600px]">
                <table className="w-full text-sm text-left text-[#5C4A42]">
                  <thead className="bg-[#FEE8CC] text-xs uppercase tracking-wider">
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
                  <tbody className="divide-y divide-[#EFD7BC] bg-white">
                    {filteredAppointments.map((a) => (
                      <tr
                        key={a.id}
                        className="hover:bg-[#FFF8F2] transition-colors"
                      >
                        <td className="px-4 py-4 font-medium">{a.type}</td>
                        <td className="px-4 py-4">{a.date}</td>
                        <td className="px-4 py-4">{a.time}</td>
                        <td className="px-4 py-4">{a.therapist}</td>
                        <td className="px-4 py-4">{getStatusBadge(a.status)}</td>
                        <td className="px-4 py-4 text-center">
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
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <DashboardFooter />
    </div>
  );
}
