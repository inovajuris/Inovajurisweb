import axios from "axios";

let api = axios.create({
  // baseURL: "https://inova-backend-dev.azurewebsites.net/",
  baseURL: "http://localhost:3333",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default api;
