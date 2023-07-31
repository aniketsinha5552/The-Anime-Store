import axios from "axios";

const baseUrl = process.env.REACT_APP_SERVER_URL;
console.log(baseUrl)
const persistRoot:any= localStorage.getItem("persist:root")
const token = persistRoot && JSON.parse(JSON.parse(persistRoot).user).currentUser?.accessToken;



export const publicRequest = axios.create({
    baseURL: baseUrl,
});

export const userRequest = axios.create({
    baseURL: baseUrl,
    headers: { token: `Bearer ${token}` },
});