import axios from 'axios';

export const storeApi = axios.create({
  baseURL: import.meta.env.VITE_BACK_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

storeApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
