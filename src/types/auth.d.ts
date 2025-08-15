export interface RegisterPayload {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  }
  export interface LoginPayload {
    email: string;
    password: string;
  }
  export interface User {
    id: number;
    name: string;
    email: string;
    created_at: string;
    updated_at: string;
  }
  
  export interface AuthResponse {
    status: boolean;
    message: string;
    access_token: string;
    token_type: "Bearer";
    user: User;
  }
  
  export interface LogoutResponse {
    status: boolean;
    message: string;
  }
  