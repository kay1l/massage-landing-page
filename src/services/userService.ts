import apiClient from "@/lib/axios";
import { ENDPOINTS } from "@/constants/endpoints";
import { UserApiResponse, UserPayload } from "@/types/user";

export const UserServices = {

  updateProfile: (payload: UserPayload): Promise<UserApiResponse> =>
    apiClient.post(ENDPOINTS.PROFILE.UPDATE,payload),
};