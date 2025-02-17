import axios from "axios";

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST_API,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;

export const API_ENDPOINTS = {
  auth: {
    me: "/api/auth/me",
    login: "/api/auth/login",
    register: "/api/auth/register",
  },

  dashboard: {
    getAll: "/api/1/dashboard",
  },
};
