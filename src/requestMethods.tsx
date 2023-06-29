import axios from "axios";

const baseUrl = "http://localhost:3001/api";
const persistRoot:any= localStorage.getItem("persist:root")
const token = JSON.parse(JSON.parse(persistRoot).user).currentUser?.accessToken;



export const publicRequest = axios.create({
    baseURL: baseUrl,
});

export const userRequest = axios.create({
    baseURL: baseUrl,
    headers: { token: `Bearer ${token}` },
});