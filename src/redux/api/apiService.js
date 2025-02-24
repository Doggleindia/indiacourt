import axios from "axios";

const apiService = axios.create({
  baseURL: "http://localhost:5500",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiService;
