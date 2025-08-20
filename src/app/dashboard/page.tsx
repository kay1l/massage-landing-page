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
import { Calendar, CheckCircle, Clock, Heart } from "lucide-react";

// ✅ Chart.js imports
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Sample Data
const bookingData = [
  { month: "Jan", bookings: 3 },
  { month: "Feb", bookings: 5 },
  { month: "Mar", bookings: 2 },
  { month: "Apr", bookings: 6 },
  { month: "May", bookings: 4 },
  { month: "Jun", bookings: 7 },
];

const serviceData = [
  { service: "Swedish Massage", bookings: 7, fill: "#FA812F" }, // Orange
  { service: "Aromatherapy", bookings: 5, fill: "#5C4A42" },   // Brown
  { service: "Deep Tissue", bookings: 3, fill: "#4F46E5" },    // Indigo
];

// Chart.js Dataset Configs
const lineChartData = {
  labels: bookingData.map((d) => d.month),
  datasets: [
    {
      label: "Bookings",
      data: bookingData.map((d) => d.bookings),
      borderColor: "#FA812F",
      backgroundColor: "rgba(250, 129, 47, 0.2)",
      tension: 0.3,
      fill: true,
    },
  ],
};

const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 1,
      },
    },
  },
};

const barChartData = {
  labels: serviceData.map((d) => d.service),
  datasets: [
    {
      label: "Bookings",
      data: serviceData.map((d) => d.bookings),
      backgroundColor: serviceData.map((d) => d.fill),
      borderRadius: 8,
      barThickness: 80,      // fixed bar width in px
    maxBarThickness: 80,
    },
  ],
};

const barChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 1,
      },
    },
  },
};

function UserDashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingScreen />;

  const handleClick = () => {
    router.push("/dashboard/pages/booking_page");
  };

  return (
    <div className="min-h-screen bg-[#FEF3E2] text-[#5C4A42] font-sans">
      <DashboardHeader />
      <DashboardSidebar />

      <main className="pt-24 px-6 min-h-[calc(100vh-160px)] relative overflow-hidden">
        {/* Insights Section */}
        <section className="mb-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="rounded-2xl shadow-md bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Upcoming Booking
                </CardTitle>
                <Calendar className="h-5 w-5 text-blue-500" />
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold">Aug 25, 2:00 PM</p>
                <p className="text-xs text-gray-500">
                  Aromatherapy Massage
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-md bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Completed Sessions
                </CardTitle>
                <CheckCircle className="h-5 w-5 text-green-500" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">12</p>
                <p className="text-xs text-gray-500">Great consistency!</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-md bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Hours
                </CardTitle>
                <Clock className="h-5 w-5 text-yellow-500" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">18 hrs</p>
                <p className="text-xs text-gray-500">Across all sessions</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-md bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Favorite Service
                </CardTitle>
                <Heart className="h-5 w-5 text-pink-500" />
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">Swedish Massage</p>
                <p className="text-xs text-gray-500">Booked 7 times</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Analytics Section */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Line Chart */}
            <Card className="rounded-2xl shadow-md bg-white p-6">
              <h4 className="text-md font-semibold mb-4">
                Bookings Over Time
              </h4>
              <Line data={lineChartData} options={lineChartOptions} />
            </Card>

            {/* Bar Chart */}
            <Card className="rounded-2xl shadow-md bg-white p-6">
              <h4 className="text-md font-semibold mb-4">
                Service Breakdown
              </h4>
              <Bar data={barChartData} options={barChartOptions} />
            </Card>
          </div>
        </section>
      </main>

      <DashboardFooter />
    </div>
  );
}

export default withAuth(UserDashboard);
