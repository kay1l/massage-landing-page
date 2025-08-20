// types/service.ts
export interface Service {
    id: number;
    name: string;
    description: string;
    price: string; 
  }
  
  export interface ServiceApiResponse {
    status: boolean;
    services: Service[];
  }
  export interface createServiceApiResponse {
    status: boolean;
    message: string;
  }

  export interface updateServiceApiResponse {
    status: boolean;
    message: string;
  }
  
  export interface ServicePayload {
    name: string;
    description: string;
    price: string;
  }
  