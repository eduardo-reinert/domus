import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/domus", // example API
  timeout: 5000,
});

export default api;
