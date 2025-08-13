export interface BookingPayload {
    booking_date_time: string; 
    full_name: string;
    contact_number: string;
    address: string;
    landmark?: string;
    notes_or_preferences?: string;
    service_id: number;
  }
  
  export interface Booking {
    id: number;
    booking_date_time: string;
    full_name: string;
    contact_number: string;
    address: string;
    landmark?: string;
    notes_or_preferences?: string;
    service_id: number;
    created_at: string;
    updated_at: string;
  }
  