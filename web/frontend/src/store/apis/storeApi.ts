import axios from 'axios';

export const storeApi = axios.create({
  baseURL: 'http://localhost:3001/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});
