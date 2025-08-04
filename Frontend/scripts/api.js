import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.3.37:8000',  // Use your local IP, NOT localhost for mobile testing
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
