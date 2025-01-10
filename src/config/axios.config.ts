import axios from "axios";

export const axiosInstance  = axios.create({
    baseURL: 'https://game-api-luqf.onrender.com'
})