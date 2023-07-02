import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1";

const axiosInstance = axios.create({
  baseURL: BASE_URL
})

axiosInstance.defaults.headers.common["Content-Type"] = "application/json";
axiosInstance.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axiosInstance.defaults.headers.common["Accept"] = "application/json";
// "Access-Control-Allow-Origin": "*",
// 'Accept': 'application/json' 

export default axiosInstance;
