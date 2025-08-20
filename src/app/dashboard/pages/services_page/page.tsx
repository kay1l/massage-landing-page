"use client";

import { useState, useEffect } from "react";
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
import { Edit, Trash2, Loader2 } from "lucide-react";
import DashboardHeader from "@/custom_components/dashboard_section/Header";
import DashboardSidebar from "@/custom_components/dashboard_section/dashboard_sidebar";
import DashboardFooter from "@/custom_components/dashboard_section/Footer";
import type { Service, ServicePayload } from "@/types/service";
import { serviceServices } from "@/services/serviceTypesService";
import { toast } from "sonner";

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [newService, setNewService] = useState<ServicePayload>({
    name: "",
    price: "",
    description: "",
  });

  const [editService, setEditService] = useState<ServicePayload & { id: number }>({
    id: 0,
    name: "",
    price: "",
    description: "",
  });
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  // Loading states
  const [isAdding, setIsAdding] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  // Fetch services from API
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

  const handleAddService = async () => {
    if (!newService.name || !newService.price) return;
    setIsAdding(true);
    try {
      const response = await serviceServices.createService(newService);
      if (response.status) {
        setNewService({ name: "", price: "", description: "" });
        toast.success(response.message);
        // Refresh services list after add
        const updated = await serviceServices.getServices();
        if (updated.status) setServices(updated.services);
      }
    } catch (error) {
      console.error("Failed to add service:", error);
    } finally {
      setIsAdding(false);
    }
  };

  const handleUpdateService = async () => {
    if (!editService.name || !editService.price) return;
    setIsUpdating(true);
    try {
      const response = await serviceServices.updateService(editService.id, editService);
      if (response.status) {
        // Update the state directly
        setServices((prev) =>
          prev.map((s) =>
            s.id === editService.id
              ? { ...s, name: editService.name, price: editService.price, description: editService.description }
              : s
          )
        );
        toast.success(response.message);
        setEditDialogOpen(false);
      }
    } catch (error) {
      console.error("Failed to update service:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  const openEditDialog = (service: Service) => {
    setEditService({ id: service.id, name: service.name, price: service.price, description: service.description });
    setEditDialogOpen(true);
  };

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
          <CardHeader className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center border-b pb-4">
            <CardTitle className="text-xl font-semibold">Available Services</CardTitle>

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
                      onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="price">Price (₱)</Label>
                    <Input
                      id="price"
                      type="number"
                      placeholder="e.g. 2000"
                      value={newService.price}
                      onChange={(e) => setNewService({ ...newService, price: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Input
                      id="description"
                      placeholder="e.g. Relieves muscle stiffness"
                      value={newService.description}
                      onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                    />
                  </div>
                </div>
                <Button
                  onClick={handleAddService}
                  className="w-full rounded-xl bg-[#FA812F] hover:bg-[#e76b1c] flex items-center justify-center gap-2"
                  disabled={isAdding}
                >
                  {isAdding && <Loader2 className="animate-spin h-4 w-4" />}
                  {isAdding ? "Saving..." : "Save Service"}
                </Button>
              </DialogContent>
            </Dialog>
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
                  {services.length > 0 ? (
                    services.map((service) => (
                      <TableRow key={service.id} className="hover:bg-gray-50">
                        <TableCell>{service.id}</TableCell>
                        <TableCell className="font-medium text-gray-800">{service.name}</TableCell>
                        <TableCell>{service.description}</TableCell>
                        <TableCell>₱{service.price}</TableCell>
                        <TableCell>60 mins</TableCell>
                        <TableCell className="text-right space-x-2">
                          <Button
                            size="icon"
                            variant="outline"
                            className="rounded-xl"
                            onClick={() => openEditDialog(service)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="destructive" className="rounded-xl">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-6 text-gray-500">
                        No services found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Edit Service Dialog */}
        <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Service</DialogTitle>
              <DialogDescription>Update the details of your service.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="edit-name">Service Name</Label>
                <Input
                  id="edit-name"
                  value={editService.name}
                  onChange={(e) => setEditService({ ...editService, name: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-price">Price (₱)</Label>
                <Input
                  id="edit-price"
                  type="number"
                  value={editService.price}
                  onChange={(e) => setEditService({ ...editService, price: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-description">Description</Label>
                <Input
                  id="edit-description"
                  value={editService.description}
                  onChange={(e) => setEditService({ ...editService, description: e.target.value })}
                />
              </div>
            </div>
            <Button
              onClick={handleUpdateService}
              className="w-full rounded-xl bg-[#FA812F] hover:bg-[#e76b1c] flex items-center justify-center gap-2"
              disabled={isUpdating}
            >
              {isUpdating && <Loader2 className="animate-spin h-4 w-4" />}
              {isUpdating ? "Updating..." : "Update Service"}
            </Button>
          </DialogContent>
        </Dialog>
      </main>

      <DashboardFooter />
    </div>
  );
}
