import axios from "axios";
const axiosInstance = axios.create({
    baseURL: "https://shopvantoan-backend.onrender.com",
    withCredentials: true
})

export default axiosInstance
// https://shopvantoan-backend.onrender.com