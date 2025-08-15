import apiClient from "@/lib/axios";
import type { ApiResponse } from "@/types/api";
import { ENDPOINTS } from "@/constants/endpoints";
import { AuthResponse, LoginPayload, RegisterPayload } from "@/types/auth";

export const authServices = {
    registerUser: (payload: RegisterPayload): Promise<AuthResponse> =>
      apiClient.post(ENDPOINTS.AUTH.REGISTER, payload),

    loginUser: (payload: LoginPayload): Promise<AuthResponse> =>
        apiClient.post(ENDPOINTS.AUTH.LOGIN, payload),

    logoutUser: (): Promise<AuthResponse> =>
        apiClient.post(ENDPOINTS.AUTH.LOGOUT),
    

  };

  