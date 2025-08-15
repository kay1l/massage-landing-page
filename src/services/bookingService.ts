import apiClient from "@/lib/axios";
import type { BookingApiResponse, BookingPayload, BookingResponse } from "@/types/booking";
import type { ApiResponse } from "@/types/api";
import { ENDPOINTS } from "@/constants/endpoints";

export const bookingServices = {
    createBooking: (payload: BookingPayload): Promise<BookingApiResponse> =>
      apiClient.post(ENDPOINTS.BOOKINGS.CREATE, payload),

    getBookings: (): Promise<BookingResponse[]> =>
      apiClient.get(ENDPOINTS.BOOKINGS.LIST),
  };