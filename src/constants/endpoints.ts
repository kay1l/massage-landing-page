export const ENDPOINTS = {
    BOOKINGS: {
      CREATE: "/bookings",
      LIST: "/appointments",
      SHOW: (id: number | string) => `/bookings/${id}`,
      UPDATE: (id: number | string) => `/bookings/${id}`,
      DELETE: (id: number | string) => `/bookings/${id}`,
    },
    SERVICES: {
       LIST: "/getAllServices",
      CREATE: "/createService",
      UPDATE: "/updateService",
    },
    AUTH: {
      LOGIN: "/login",
      REGISTER: "/register",
      LOGOUT: "/logout",
    },
    PROFILE: {
      UPDATE: "updateRecord",
    }
  };
  