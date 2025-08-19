"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import DashboardHeader from "@/custom_components/dashboard_section/Header";
import DashboardFooter from "@/custom_components/dashboard_section/Footer";
import AppointmentsTable, { } from "@/custom_components/dashboard_section/AppointmentTable";
import { bookingServices } from "@/services/bookingService";
import { BookingResponse } from "@/types/booking";
import { withAuth } from "@/hoc/withAuth";
import DashboardSidebar from "@/custom_components/dashboard_section/dashboard_sidebar";


function AppointmentsPage() {
  const [ appointments, setAppointments ] = useState<BookingResponse[]>([]);
  const [ loadingState, setLoadingState ] = useState(true);
  useEffect(() => {
    async function fetchBookings() {
      const response = await bookingServices.getBookings();
      console.log('response: ', response);
      setAppointments(response);
      setLoadingState(false)
    }

    fetchBookings();
  
  }, []);

  const summary = {
    upcoming: 0,
    completed: 0,
    cancelled: 0,
  };

  return (
    <div className="min-h-screen bg-[#FEF3E2] text-[#5C4A42] pt-32">
      <DashboardHeader />
      <DashboardSidebar />
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
        { loadingState ? <p className="text-center text-sm text-gray-500 py-4">
              No matching appointments found.
            </p>
            : <AppointmentsTable data={appointments} />
        }
       
      </div>

      <DashboardFooter />
    </div>
  );
}
export default withAuth(AppointmentsPage);