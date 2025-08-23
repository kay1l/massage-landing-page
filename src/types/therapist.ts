export interface Specialty {
    name: string;
    description: string;
  }
  
  export interface Therapist {
    id: number;
    name: string;
    specialties: Specialty[];
    contact: string;
    email: string;
    address: string;
    status: "Active" | "Inactive";
  }