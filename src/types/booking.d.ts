export interface BookingPayload {
    booking_date_time: string; 
    full_name: string;
    contact_number: string;
    address: string;
    landmark?: string;
    notes_or_preferences?: string;
    service_id: number;
  }
  
  export type AppointmentStatus = "Pending" | "Completed" | "Cancelled" | "Rejected";
  export interface BookingResponse {
    booking_date: string;
    booking_time: string,
    full_name: string;
    contact_number: string;
    address: string;
    landmark?: string;
    notes_or_preferences?: string;
    updated_at: string;
    created_at: string;
    id: number;
    user_id: number | NULL;
    service: Service;
    status: AppointmentStatus;
  }

  export interface Service {
    id: number,
    name: string
  }

  export interface BookingApiResponse {
    success: boolean,
    message:string,
    data: BookingResponse
  }
  