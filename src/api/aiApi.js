import axios from "axios";

const aiApi = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/v1/ai/chat`,
});


// // Request Interceptor
// aiApi.interceptors.request.use((config) => {
//   const token = localStorage.getItem("accessToken");

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

// // Response Interceptor
// aiApi.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       localStorage.removeItem("accessToken");
//       window.location.href = "/login";
//     }

//     return Promise.reject(error);
//   }
// );

export default aiApi;