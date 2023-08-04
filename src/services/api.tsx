import axios from "axios";

const api = axios.create({
    baseURL: '/api/api'
});
export default api;