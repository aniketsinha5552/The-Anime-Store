import axios from "axios";

const baseUrl = "http://localhost:3001/api";
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTY5ZWEwZGM5MGI2MWZkNDA3ODk0MCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2ODc1OTI2MzgsImV4cCI6MTY4Nzg1MTgzOH0.lN_tODXnxbpYfKrm5MdggWjre5OGt1GDR44F3MgT2r4'

export const publicRequest = axios.create({
    baseURL: baseUrl,
});

export const userRequest = axios.create({
    baseURL: baseUrl,
    headers: { token: `Bearer ${token}` },
});