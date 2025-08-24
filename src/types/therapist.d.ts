export interface Specialty {
  title: string;
  description: string;
}

export interface TherapistPayload {
  name: string;
  email: string;
  contact: string;
  address: string;
  specialties: Specialty[];
}
  
export interface TherapistApiResponse {
  status: boolean;
  message: string;
  }


  export interface Therapist {
    id: number;
    name: string;
    email: string;
    address: string;
    lat: string | null;
    lng: string | null;
    user_type_id: number;
    contact: string;
    created_at: string; 
    specialties: Specialty[];
  }
  
  export interface TherapistResponse {
    status: boolean;
    users: Therapist[];
  }