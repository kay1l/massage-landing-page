export interface User {
    id: number;
    name: string;
    email: string;
    address: string;
    lat: string | null;
    lng: string | null;
    user_type_id: number;
    contact: string;
    created_at: string; 
}

export interface UserApiResponse {
    status: boolean;
    message: string;
    user : User;
}

export interface UserPayload {
    name: string;
    email: string;
    contact: string;
    address: string;
}