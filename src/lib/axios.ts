import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "/api/proxy",
  timeout: 10000,
  headers: {
    // "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Example: attach auth token if logged in
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error) => {
    const message =
      error.response?.data?.message || "An unexpected error occurred";
    return Promise.reject(new Error(message));
  }
);

export default apiClient;
