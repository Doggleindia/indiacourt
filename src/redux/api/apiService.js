import axios from "axios";

const apiService = axios.create({
  baseURL: process.env.REACT_APP_MAIN_BACKEND,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiService;
