"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardHeader from "@/custom_components/dashboard_section/Header";
import DashboardFooter from "@/custom_components/dashboard_section/Footer";
import DashboardSidebar from "@/custom_components/dashboard_section/dashboard_sidebar";
import TherapistsTable from "@/custom_components/dashboard_section/TherapistTable"; 
import { Therapist, Specialty } from "@/types/therapist";
import { withAuth } from "@/hoc/withAuth";

function TherapistsPage() {
  const [therapists, setTherapists] = useState<Therapist[]>([]);
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    async function fetchTherapists() {
      try {
        // TODO: replace with API call
        const mockData: Therapist[] = [
            {
              id: 1,
              name: "Sarah Cruz",
              address: "Bacong, Dumaguete",
              email: "sarah@gmail.com",
              specialties: [
                {
                  name: "Swedish Massage",
                  description: "A relaxing full-body massage using long strokes and kneading."
                },
                {
                  name: "Aromatherapy",
                  description: "Massage with essential oils to improve mood and relaxation."
                }
              ],
              contact: "0917-123-4567",
              status: "Active",
            },
            {
              id: 2,
              name: "Michael Tan",
              address: "Buntis, Dumaguete",
              email: "michael@gmail.com",
              specialties: [
                {
                  name: "Deep Tissue",
                  description: "Targets deeper layers of muscles and connective tissue."
                },
                {
                  name: "Sports Therapy",
                  description: "Helps prevent and treat sports-related injuries."
                }
              ],
              contact: "0927-555-2345",
              status: "Inactive",
            },
            {
              id: 3,
              name: "Anna Lopez",
              address: "Linao Ormoc City",
              email: "anna@gmail.com",
              specialties: [
                {
                  name: "Aromatherapy",
                  description: "Massage therapy using essential oils to promote relaxation and wellness."
                },
                {
                  name: "Prenatal Massage",
                  description: "Gentle massage designed for pregnancy comfort and relaxation."
                }
              ],
              contact: "0999-888-7777",
              status: "Active",
            },
          ];
          

        setTherapists(mockData);
      } catch (error) {
        console.error("Error fetching therapists:", error);
      } finally {
        setLoadingState(false);
      }
    }

    fetchTherapists();
  }, []);

  const summary = {
    total: therapists.length,
    active: therapists.filter((t) => t.status === "Active").length,
    inactive: therapists.filter((t) => t.status === "Inactive").length,
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
        {loadingState ? (
          <p className="text-center text-sm text-gray-500 py-4">
            Loading therapists...
          </p>
        ) : therapists.length === 0 ? (
          <p className="text-center text-sm text-gray-500 py-4">
            No therapists found.
          </p>
        ) : (
          <TherapistsTable data={therapists} />
        )}
      </div>

      <DashboardFooter />
    </div>
  );
}

export default withAuth(TherapistsPage);
