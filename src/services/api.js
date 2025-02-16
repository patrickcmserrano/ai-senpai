import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com', // Substitua pela URL base da API que você está utilizando
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
