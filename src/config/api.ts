import Cookies from 'js-cookie';
import axios from "axios";

const createAPI = () => {
    const token = Cookies.get('token_music_app');


    const headers = token ? {
        Authorization: `Bearer ${token}`
    } : {}

    const api = axios.create({
        baseURL: 'http://localhost:8080/api',
        headers
    });

    return api;
};

const api = createAPI();

export default api;