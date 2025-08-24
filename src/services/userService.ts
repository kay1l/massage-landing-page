import apiClient from "@/lib/axios";
import { ENDPOINTS } from "@/constants/endpoints";
import { UserApiResponse, UserPayload } from "@/types/user";
import { TherapistPayload, TherapistApiResponse, TherapistResponse } from "@/types/therapist";
export const UserServices = {

  updateProfile: (payload: UserPayload): Promise<UserApiResponse> =>
    apiClient.post(ENDPOINTS.PROFILE.UPDATE,payload),


  // Therapist Service
  createTherapist: (payload: TherapistPayload): Promise<TherapistApiResponse> =>
    apiClient.post(ENDPOINTS.USER.CREATE, payload),
  // End Therapist Service

  getTherapists: (): Promise<TherapistResponse> =>
    apiClient.get(ENDPOINTS.USER.GET),
};