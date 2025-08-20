"use client";

import { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit, Search, Trash2 } from "lucide-react";
import DashboardHeader from "@/custom_components/dashboard_section/Header";
import DashboardSidebar from "@/custom_components/dashboard_section/dashboard_sidebar";
import DashboardFooter from "@/custom_components/dashboard_section/Footer";

type Service = {
  id: number;
  name: string;
  price: number;
  duration: string;
  description: string;
};

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([
    {
      id: 1,
      name: "Swedish Massage",
      price: 1200,
      duration: "60 mins",
      description: "A relaxing full-body massage using long, flowing strokes.",
    },
    {
      id: 2,
      name: "Aromatherapy",
      price: 1500,
      duration: "90 mins",
      description:
        "Massage combined with essential oils to enhance relaxation.",
    },
    {
      id: 3,
      name: "Deep Tissue",
      price: 1800,
      duration: "60 mins",
      description:
        "Targets deeper layers of muscles to relieve tension and pain.",
    },
  ]);

  const [newService, setNewService] = useState({
    name: "",
    price: "",
    duration: "",
    description: "",
  });

  const [search, setSearch] = useState("");

  const handleAddService = () => {
    if (!newService.name || !newService.price || !newService.duration) return;

    const newEntry: Service = {
      id: services.length + 1,
      name: newService.name,
      price: parseFloat(newService.price),
      duration: newService.duration,
      description: newService.description,
    };

    setServices([...services, newEntry]);
    setNewService({ name: "", price: "", duration: "", description: "" });
  };

  const filteredServices = useMemo(
    () =>
      services.filter((s) =>
        s.name.toLowerCase().includes(search.toLowerCase())
      ),
    [services, search]
  );

  return (
    <div className="bg-[#FEF3E2] min-h-screen">
      <DashboardHeader />
      <DashboardSidebar />

      {/* Page Content */}
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
              {(
                services.reduce((sum, s) => sum + s.price, 0) / services.length
              ).toFixed(0)}
            </h2>
          </Card>
          <Card className="flex-1 p-3 rounded-lg shadow-sm border">
            <p className="text-xs text-gray-500">Popular Duration</p>
            <h2 className="text-base font-semibold">60 mins</h2>
          </Card>
        </div>

        <Card className="rounded-2xl shadow-lg border border-gray-200 bg-white">
          <CardHeader className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center border-b pb-4">
            <CardTitle className="text-xl font-semibold">
              Available Services
            </CardTitle>

            {/* Actions Row */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              {/* Search */}
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search service..."
                  className="pl-9"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              {/* Add Service Dialog */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="rounded-xl bg-[#FA812F] hover:bg-[#e76b1c]">
                    + Add Service
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Add New Service</DialogTitle>
                    <DialogDescription>
                      Fill out the form below to add a new service.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Service Name</Label>
                      <Input
                        id="name"
                        placeholder="e.g. Hot Stone Massage"
                        value={newService.name}
                        onChange={(e) =>
                          setNewService({ ...newService, name: e.target.value })
                        }
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="price">Price (₱)</Label>
                      <Input
                        id="price"
                        type="number"
                        placeholder="e.g. 2000"
                        value={newService.price}
                        onChange={(e) =>
                          setNewService({
                            ...newService,
                            price: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="duration">Duration</Label>
                      <Input
                        id="duration"
                        placeholder="e.g. 60 mins"
                        value={newService.duration}
                        onChange={(e) =>
                          setNewService({
                            ...newService,
                            duration: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="description">Description</Label>
                      <Input
                        id="description"
                        placeholder="e.g. Relieves muscle stiffness"
                        value={newService.description}
                        onChange={(e) =>
                          setNewService({
                            ...newService,
                            description: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <Button
                    onClick={handleAddService}
                    className="w-full rounded-xl bg-[#FA812F] hover:bg-[#e76b1c]"
                  >
                    Save Service
                  </Button>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>

          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="w-[40px]">#</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredServices.length > 0 ? (
                    filteredServices.map((service) => (
                      <TableRow key={service.id} className="hover:bg-gray-50">
                        <TableCell>{service.id}</TableCell>
                        <TableCell className="font-medium text-gray-800">
                          {service.name}
                        </TableCell>
                        <TableCell>{service.description}</TableCell>
                        <TableCell>₱{service.price}</TableCell>
                        <TableCell>{service.duration}</TableCell>
                        <TableCell className="text-right space-x-2">
                          <Button
                            size="icon"
                            variant="outline"
                            className="rounded-xl"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            size="icon"
                            variant="destructive"
                            className="rounded-xl"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={6}
                        className="text-center py-6 text-gray-500"
                      >
                        No services found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </main>

      <DashboardFooter />
    </div>
  );
}
