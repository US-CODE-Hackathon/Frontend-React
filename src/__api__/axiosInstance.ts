import axios from 'axios';

export const fastAPI = axios.create({
  baseURL: import.meta.env.VITE_FASTAPI_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const mainApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
