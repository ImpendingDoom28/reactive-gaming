import * as axios from "axios";

const api = () => {
  const axiosInstance = axios.create({
    timeout: 10000,
    baseURL: "http://localhost:8080/",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });

  axiosInstance.interceptors.request.use((request) => {
    console.log("Starting Request", request);
    return request;
  });

  axiosInstance.interceptors.response.use((response) => {
    console.log("Response:", response);
    return response;
  });
  return axiosInstance;
};

export default api;
