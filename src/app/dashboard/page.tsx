"use client";

import { Button } from "@/components/ui/button";
import DashboardFooter from "@/custom_components/dashboard_section/Footer";
import DashboardHeader from "@/custom_components/dashboard_section/Header";
import LoadingScreen from "@/custom_components/LoadingScreen";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { withAuth } from "@/hoc/withAuth";
import DashboardSidebar from "@/custom_components/dashboard_section/dashboard_sidebar";
import { Calendar, Users, DollarSign, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import RecentBookingsTable from "@/custom_components/dashboard_section/tables/RecentBookingsTable";

ChartJS.register(ArcElement, Tooltip, Legend);

const serviceData = [
  { service: "Swedish Massage", bookings: 15, fill: "#FA812F" },
  { service: "Aromatherapy", bookings: 10, fill: "#5C4A42" },
  { service: "Deep Tissue", bookings: 8, fill: "#4F46E5" },
];
const bookings = [
  {
    client: "Maria Santos",
    service: "Aromatherapy",
    date: "Aug 24, 2:00 PM",
    status: "Completed",
    badgeClass: "bg-green-100 text-green-700",
  },
  {
    client: "John Cruz",
    service: "Swedish Massage",
    date: "Aug 25, 4:00 PM",
    status: "Upcoming",
    badgeClass: "bg-yellow-100 text-yellow-700",
  },
  {
    client: "Anna Dela Cruz",
    service: "Deep Tissue",
    date: "Aug 22, 11:00 AM",
    status: "Cancelled",
    badgeClass: "bg-red-100 text-red-700",
  },
  {
    client: "Anna Dela Cruz",
    service: "Deep Tissue",
    date: "Aug 22, 11:00 AM",
    status: "Cancelled",
    badgeClass: "bg-red-100 text-red-700",
  },
  {
    client: "Anna Dela Cruz",
    service: "Deep Tissue",
    date: "Aug 22, 11:00 AM",
    status: "Cancelled",
    badgeClass: "bg-red-100 text-red-700",
  },
];

const pieChartData = {
  labels: serviceData.map((d) => d.service),
  datasets: [
    {
      data: serviceData.map((d) => d.bookings),
      backgroundColor: serviceData.map((d) => d.fill),
      borderWidth: 1,
    },
  ],
};

const pieChartOptions = {
  responsive: true,
  plugins: { legend: { position: "bottom" as const } },
};

function AdminDashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-[#FEF3E2] text-[#5C4A42] font-sans">
      <DashboardHeader />
      <DashboardSidebar />

      <main className="pt-24 px-6 min-h-[calc(100vh-160px)] relative overflow-auto">
        {/* KPIs Section */}
        <section className="mb-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="rounded-2xl shadow-md bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Bookings
                </CardTitle>
                <Calendar className="h-5 w-5 text-blue-500" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">150</p>
                <p className="text-xs text-gray-500">This year</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-md bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                <DollarSign className="h-5 w-5 text-green-600" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">₱120,000</p>
                <p className="text-xs text-gray-500">Gross earnings</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-md bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Therapists
                </CardTitle>
                <Users className="h-5 w-5 text-purple-600" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">8</p>
                <p className="text-xs text-gray-500">Currently available</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-md bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Pending Approvals
                </CardTitle>
                <Activity className="h-5 w-5 text-red-500" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">3</p>
                <p className="text-xs text-gray-500">Need action</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Bookings + Pie Chart */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Bookings Table */}
          {/* <Card className="rounded-2xl shadow-md bg-white p-4"> */}
           
            <RecentBookingsTable bookings={bookings} />
           
          {/* </Card> */}

          {/* Pie Chart */}
          <Card className="rounded-2xl shadow-md bg-white p-4 flex flex-col items-center">
            <h4 className="text-lg font-semibold  self-start">
              Service Distribution
            </h4>
            <div className="w-[300px] h-[300px]">
              <Pie
                data={pieChartData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      display: true,
                      position: "top",
                      labels: {
                        usePointStyle: true,
                        boxWidth: 12,
                        padding: 15,
                      },
                    },
                  },
                }}
              />
            </div>
          </Card>
        </section>
      </main>

      <DashboardFooter />
    </div>
  );
}

export default withAuth(AdminDashboard);
