import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-mermas.onrender.com/api'
});
export default api;