import axios, { AxiosError, AxiosResponse } from 'axios';
import { AuthModel } from '../../models/auth/auth.model';

export const storeApi = axios.create({
  baseURL: import.meta.env.VITE_BACK_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

storeApi.interceptors.request.use((config) => {
  const user = localStorage.getItem('user');
  if (user !== null) {
    const { token } = JSON.parse(user) as AuthModel;
    if (token) config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

storeApi.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    console.log(error);

    if (error.response && error.response.status === 401)
      localStorage.removeItem('user');
    return Promise.reject(error);
  }
);
