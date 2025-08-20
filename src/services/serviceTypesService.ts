import apiClient from "@/lib/axios";
import type { createServiceApiResponse, ServiceApiResponse, ServicePayload, updateServiceApiResponse } from "@/types/service";
import { ENDPOINTS } from "@/constants/endpoints";

export const serviceServices = {
  createService: (payload: ServicePayload): Promise<createServiceApiResponse> =>
    apiClient.post(ENDPOINTS.SERVICES.CREATE, payload),

  getServices: (): Promise<ServiceApiResponse> =>
    apiClient.get(ENDPOINTS.SERVICES.LIST),

  updateService: (id: number, payload: ServicePayload): Promise<updateServiceApiResponse> =>
    apiClient.post(ENDPOINTS.SERVICES.UPDATE, payload),
};