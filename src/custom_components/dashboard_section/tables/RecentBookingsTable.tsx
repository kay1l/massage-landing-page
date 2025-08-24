"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface Booking {
  client: string;
  service: string;
  date: string;
  status: string;
  badgeClass: string;
}

interface RecentBookingsTableProps {
  bookings: Booking[];
}

export default function RecentBookingsTable({ bookings }: RecentBookingsTableProps) {
  return (
    <Card className="rounded-2xl shadow-md bg-white p-4">
      <h4 className="text-lg font-semibold mb-5">Recent Bookings</h4>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-[#FEE8CC]">
            <TableRow>
              <TableHead className="px-3 py-2">Client</TableHead>
              <TableHead className="px-3 py-2">Service</TableHead>
              <TableHead className="px-3 py-2">Date</TableHead>
              <TableHead className="px-3 py-2">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking, index) => (
              <TableRow key={index} className="hover:bg-[#FFF8F2]">
                <TableCell className="px-3 py-2">{booking.client}</TableCell>
                <TableCell className="px-3 py-2">{booking.service}</TableCell>
                <TableCell className="px-3 py-2">{booking.date}</TableCell>
                <TableCell className="px-3 py-2">
                  <Badge
                    className={`${booking.badgeClass} px-2 py-0.5 rounded-full text-[10px] font-medium`}
                  >
                    {booking.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
