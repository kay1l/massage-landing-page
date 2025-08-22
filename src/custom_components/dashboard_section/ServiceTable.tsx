"use client";

import { useEffect, useState, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import type { Service, ServicePayload } from "@/types/service";
import { serviceServices } from "@/services/serviceTypesService";

export default function ServicesTable() {
  const [services, setServices] = useState<Service[]>([]);
  const [search, setSearch] = useState("");
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editService, setEditService] = useState<ServicePayload & { id: number }>({
    id: 0,
    name: "",
    price: "",
    description: "",
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [newService, setNewService] = useState<ServicePayload>({
    name: "",
    price: "",
    description: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Fetch services
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

  // Add service
  const handleAddService = async () => {
    if (!newService.name || !newService.price) return;
    setIsAdding(true);
    try {
      const response = await serviceServices.createService(newService);
      if (response.status) {
        setNewService({ name: "", price: "", description: "" });
        toast.success(response.message);
        const updated = await serviceServices.getServices();
        if (updated.status) setServices(updated.services);
      }
    } catch (error) {
      console.error("Failed to add service:", error);
    } finally {
      setIsAdding(false);
    }
  };

  // Update service
  const handleUpdateService = async () => {
    if (!editService.name || !editService.price) return;
    setIsUpdating(true);
    try {
      const response = await serviceServices.updateService(
        editService.id,
        editService
      );
      if (response.status) {
        setServices((prev) =>
          prev.map((s) =>
            s.id === editService.id ? { ...s, ...editService } : s
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

  // Open edit modal
  const openEditDialog = (service: Service) => {
    setEditService({
      id: service.id,
      name: service.name,
      price: service.price,
      description: service.description,
    });
    setEditDialogOpen(true);
  };

  // Filtering + search
  const filteredData = useMemo(() => {
    return services.filter((s) =>
      s.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [services, search]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      {/* Edit Dialog */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Service</DialogTitle>
            <DialogDescription>
              Update the details of your service.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label>Service Name</Label>
              <Input
                value={editService.name}
                onChange={(e) =>
                  setEditService({ ...editService, name: e.target.value })
                }
              />
            </div>
            <div className="grid gap-2">
              <Label>Price (₱)</Label>
              <Input
                type="number"
                value={editService.price}
                onChange={(e) =>
                  setEditService({ ...editService, price: e.target.value })
                }
              />
            </div>
            <div className="grid gap-2">
              <Label>Description</Label>
              <Input
                value={editService.description}
                onChange={(e) =>
                  setEditService({
                    ...editService,
                    description: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={handleUpdateService}
              className="rounded-xl bg-[#FA812F] hover:bg-[#e76b1c] flex items-center justify-center gap-2"
              disabled={isUpdating}
            >
              {isUpdating && <Loader2 className="animate-spin h-4 w-4" />}
              {isUpdating ? "Updating..." : "Update Service"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Card className="shadow-lg border-none">
      <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <CardTitle className="text-xl text-[#5C4A42]">
            Appointments Overview
          </CardTitle>
    
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
                            setNewService({ ...newService, price: e.target.value })
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
                      className="w-full rounded-xl bg-[#FA812F] hover:bg-[#e76b1c] flex items-center justify-center gap-2"
                      disabled={isAdding}
                    >
                      {isAdding && <Loader2 className="animate-spin h-4 w-4" />}
                      {isAdding ? "Saving..." : "Save Service"}
                    </Button>
                  </DialogContent>
                </Dialog>
              </CardHeader>

        <CardContent className="overflow-x-auto">
          {paginatedData.length === 0 ? (
            <p className="text-center text-sm text-gray-500 py-4">
              No services found.
            </p>
          ) : (
            <table className="min-w-full table-auto text-sm text-left text-[#5C4A42]">
              <thead className="bg-[#FEE8CC] text-xs uppercase tracking-wider text-[#5C4A42]">
                <tr>
                  <th className="px-4 py-3 font-medium">Service</th>
                  <th className="px-4 py-3 font-medium">Description</th>
                  <th className="px-4 py-3 font-medium">Price</th>
                  <th className="px-4 py-3 font-medium text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EFD7BC]">
                {paginatedData.map((service) => (
                  <tr
                    key={service.id}
                    className="hover:bg-[#FFF8F2] transition-colors"
                  >
                    <td className="px-4 py-3 whitespace-nowrap font-medium">
                      {service.name}
                    </td>
                    <td className="px-4 py-3 max-w-xs truncate">
                      {service.description}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      ₱{service.price}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex justify-center gap-2">
                        <Button
                          size="icon"
                          variant="outline"
                          className="rounded-xl text-blue-500 border-blue-300 hover:bg-blue-100"
                          onClick={() => openEditDialog(service)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="outline"
                          className="rounded-xl text-red-500 border-red-300 hover:bg-red-100"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-between items-center mt-4">
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
              >
                Prev
              </Button>
              <span className="text-sm text-gray-500">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
              >
                Next
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
}
