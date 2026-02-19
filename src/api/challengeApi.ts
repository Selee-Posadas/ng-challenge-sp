import axios from 'axios';

const challengeApi = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

challengeApi.interceptors.request.use((config) => {
    return config;
});

export { challengeApi };