"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

import DashboardHeader from "@/custom_components/dashboard_section/Header";
import DashboardSidebar from "@/custom_components/dashboard_section/dashboard_sidebar";
import DashboardFooter from "@/custom_components/dashboard_section/Footer";

import type { Service, ServicePayload } from "@/types/service";
import { serviceServices } from "@/services/serviceTypesService";
import { toast } from "sonner";
import ServicesTable from "@/custom_components/dashboard_section/ServiceTable";

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [newService, setNewService] = useState<ServicePayload>({
    name: "",
    price: "",
    description: "",
  });

  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await serviceServices.getServices();
        if (response.status) setServices(response.services);
      } catch (error) {
        console.error("Failed to fetch services:", error);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="bg-[#FEF3E2] min-h-screen">
      <DashboardHeader />
      <DashboardSidebar />

      <main className="flex-grow pt-28 px-6 md:px-10 lg:px-16 space-y-6 max-w-7xl w-full mx-auto">
        {/* Quick Stats */}
        <div className="flex gap-3 w-full">
          <Card className="flex-1 p-3 rounded-lg shadow-sm border">
            <p className="text-xs text-gray-500">Total Services</p>
            <h2 className="text-base font-semibold">{services.length}</h2>
          </Card>
          <Card className="flex-1 p-3 rounded-lg shadow-sm border">
            <p className="text-xs text-gray-500">Average Price</p>
            <h2 className="text-base font-semibold">
              ₱
              {services.length > 0
                ? (
                    services.reduce((sum, s) => sum + parseFloat(s.price), 0) /
                    services.length
                  ).toFixed(0)
                : 0}
            </h2>
          </Card>
          <Card className="flex-1 p-3 rounded-lg shadow-sm border">
            <p className="text-xs text-gray-500">Popular Duration</p>
            <h2 className="text-base font-semibold">60 mins</h2>
          </Card>
        </div>

        <Card className="rounded-2xl shadow-lg border border-gray-200 bg-white">
          <CardContent>
            <div className="overflow-x-auto">
              <ServicesTable />
            </div>
          </CardContent>
        </Card>
      </main>

      <DashboardFooter />
    </div>
  );
}
