export interface BookingPayload {
    booking_date_time: string; 
    full_name: string;
    contact_number: string;
    address: string;
    landmark?: string;
    notes_or_preferences?: string;
    service_id: number;
  }
  
  export interface BookingResponse {
  booking_date_time: string;
  full_name: string;
  contact_number: string;
  address: string;
  landmark?: string;
  notes_or_preferences?: string;
  service_id: number;
  updated_at: string;
  created_at: string;
  id: number;
  }

  export interface BookingApiResponse {
    success: boolean,
    message:string,
    data: BookingResponse
  }
  