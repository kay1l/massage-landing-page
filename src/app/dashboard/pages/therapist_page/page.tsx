"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardHeader from "@/custom_components/dashboard_section/Header";
import DashboardFooter from "@/custom_components/dashboard_section/Footer";
import DashboardSidebar from "@/custom_components/dashboard_section/dashboard_sidebar";
import TherapistsTable from "@/custom_components/dashboard_section/tables/TherapistTable";
import { Therapist } from "@/types/therapist";
import { withAuth } from "@/hoc/withAuth";
import { UserServices } from "@/services/userService";

function TherapistsPage() {
  const [therapists, setTherapists] = useState<Therapist[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTherapists();
  }, []);

  const fetchTherapists = async () => {
    try {
      setLoading(true);
      const response = await UserServices.getTherapists();

      if (response.status) {
        setTherapists(response.users);
      } else {
        console.error("Failed to load therapists");
        setTherapists([]);
      }
    } catch (error) {
      console.error("Error fetching therapists:", error);
      setTherapists([]);
    } finally {
      setLoading(false);
    }
  };

  
  const summary = {
    total: therapists.length,
    active: 5, 
    inactive: 2, 
  };

  return (
    <div className="min-h-screen bg-[#FEF3E2] text-[#5C4A42] pt-15">
      <DashboardHeader />
      <DashboardSidebar />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#5C4A42]">
          Therapist Management
        </h1>

        {/* Summary Section */}
        <div className="flex flex-wrap justify-between gap-2 sm:gap-3 mb-6">
          <Card className="w-[32%] min-w-[100px] flex-1 bg-white border border-[#F3C623] shadow-sm text-center px-2 py-3">
            <CardHeader className="p-1">
              <CardTitle className="text-[#FA812F] text-sm sm:text-base">
                Total Therapists
              </CardTitle>
            </CardHeader>
            <CardContent className="p-1">
              <p className="text-xl sm:text-2xl font-bold">{summary.total}</p>
            </CardContent>
          </Card>

          <Card className="w-[32%] min-w-[100px] flex-1 bg-white border border-[#F3C623] shadow-sm text-center px-2 py-3">
            <CardHeader className="p-1">
              <CardTitle className="text-green-600 text-sm sm:text-base">
                Active
              </CardTitle>
            </CardHeader>
            <CardContent className="p-1">
              <p className="text-xl sm:text-2xl font-bold">{summary.active}</p>
            </CardContent>
          </Card>

          <Card className="w-[32%] min-w-[100px] flex-1 bg-white border border-[#F3C623] shadow-sm text-center px-2 py-3">
            <CardHeader className="p-1">
              <CardTitle className="text-red-500 text-sm sm:text-base">
                Inactive
              </CardTitle>
            </CardHeader>
            <CardContent className="p-1">
              <p className="text-xl sm:text-2xl font-bold">{summary.inactive}</p>
            </CardContent>
          </Card>
        </div>

        {/* Table Section */}
        {loading ? (
          <p className="text-center text-sm text-gray-500 py-4">Loading therapists...</p>
        ) : therapists.length === 0 ? (
          <p className="text-center text-sm text-gray-500 py-4">No therapists found.</p>
        ) : (
          <TherapistsTable data={therapists} onSuccess={fetchTherapists} />
        )}
      </div>

      <DashboardFooter />
    </div>
  );
}

export default withAuth(TherapistsPage);
