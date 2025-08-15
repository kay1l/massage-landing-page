import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "http://api.shaishasleisurehub.com/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  // (error) => Promise.reject(error)
  (error) => {
    console.log('error: ', error);
  }
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log('AxiosResponse', response);

    return response.data?.data ? response.data?.data : response.data;
  },
  (error: AxiosError<any>) => {
    const status = error.response?.status;
    const message =
      error.response?.data?.message || "An unexpected error occurred";

    if (status === 401) {
      // Clear stored token
      localStorage.removeItem("access_token");
      // Optional: redirect to login
      if (typeof window !== "undefined") {
        window.location.href = "/auth/login";
      }
    }else{
      return Promise.reject(new Error(message));
    }

    
  }
);

export default apiClient;
