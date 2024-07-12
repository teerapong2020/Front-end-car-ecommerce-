import axios from "axios";
import { BASE_URL } from "./constants";

// create an axios instance
const axiosInstance = axios.create({
  // set base url, timeout of 10s, header type
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// axiosInstance.interceptors.request.use(function (config) {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// }, function (error) {
//   return Promise.reject(error);
// });

// // Add a response interceptor
// axiosInstance.interceptors.response.use(function (response) {
//   return response;
// }, function (error) {
//   return Promise.reject(error);
// });
// add the axios request interceptor to attach the auth token to every request
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const accessToken = localStorage.getItem("token");
//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export the configured axios instance for use in other parts of the app
export default axiosInstance;
