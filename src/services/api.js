import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.0.115:3000',
});

export default api;
