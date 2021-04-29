import axios from "axios";

let api = axios.create({
  baseURL: "http://192.168.0.2:3333",

  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default api;
