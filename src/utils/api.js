import axios from 'axios';
const baseURL = "http://c5985a7a.ngrok.io/api";
const server = axios.create({
    baseURL,
});

const api = {
    loginUser: (data) => server.post("/auth", data),
};
export default api;