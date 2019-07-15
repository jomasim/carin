import axios from 'axios';
const baseURL = "https://berke.loopy.co.ke/api";
const server = axios.create({
    baseURL,
});

const api = {
    loginUser: (data) => server.post("/auth", data),
};
export default api;