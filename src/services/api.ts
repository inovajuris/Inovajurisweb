import axios from "axios";

let api = axios.create({
  baseURL: "https://inova-backend-prod.azurewebsites.net/",

  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default api;
