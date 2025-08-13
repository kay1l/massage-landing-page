import apiClient from "@/lib/axios";
import type { BookingPayload,Booking } from "@/types/booking";
import type { ApiResponse } from "@/types/api";
import { ENDPOINTS } from "@/constants/endpoints";

export const bookingServices = {
    createBooking: (payload: BookingPayload) => 
        apiClient.post<ApiResponse<Booking>>(ENDPOINTS.BOOKINGS.CREATE, payload)
};