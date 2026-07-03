// src/services/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://web-banck-core-andino-fastapi.onrender.com' // Tu URL de Render
});

export const loginCliente = (username, password) => api.post('/hb/login', { username, password });
export default api;