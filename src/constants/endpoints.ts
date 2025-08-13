export const ENDPOINTS = {
    BOOKINGS: {
      CREATE: "/bookings",
    //   LIST: "/bookings",
      SHOW: (id: number | string) => `/bookings/${id}`,
      UPDATE: (id: number | string) => `/bookings/${id}`,
      DELETE: (id: number | string) => `/bookings/${id}`,
    },
    SERVICES: {
      LIST: "/services",
      SHOW: (id: number | string) => `/services/${id}`,
    },
    AUTH: {
      LOGIN: "/auth/login",
      REGISTER: "/auth/register",
      LOGOUT: "/auth/logout",
    },
  };
  