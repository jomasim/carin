import axios from 'axios';
const baseURL = "http://b546e2c1.ngrok.io/api";
const server = axios.create({
    baseURL,
});

const api = {
    loginUser: (data) => server.post("/auth", data),
};
export default api;