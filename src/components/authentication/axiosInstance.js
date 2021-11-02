import axios from "axios";

const baseURL = "http://192.168.2.160:8000/";
// const baseURL = "https://hotel-register.herokuapp.com/";
// const baseURL = "https://api.retailscout.io/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  // timeout: 5000,
  headers: {
    Authorization: localStorage.getItem("access")
      ? "Bearer " + localStorage.getItem("access")
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default axiosInstance;
