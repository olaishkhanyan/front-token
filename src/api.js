
import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:8080', 
    headers: {
        'Content-Type': 'application/json',
    },
});

export function setAuthHeader(username, password) {
    const authString = `Basic ${btoa(`${username}:${password}`)}`;
    api.defaults.headers.common['Authorization'] = authString;
}

export default api;
