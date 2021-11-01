import axios from "axios";

const baseURL = "https://hotel-register.herokuapp.com/";
// const baseURL = "https://api.retailscout.io/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  // timeout: 5000,
  headers: {
    Authorization: localStorage.getItem("token")
      ? "Bearer " + localStorage.getItem("token")
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default axiosInstance;
