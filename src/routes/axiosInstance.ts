import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api/auth",
  timeout: 1000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized access - Redirecting to login");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
