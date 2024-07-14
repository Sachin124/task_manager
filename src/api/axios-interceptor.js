import axios from 'axios';
import { getToken, removeToken } from '../utils/token';
// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
});

// Add a request interceptor to include the token in headers
axiosInstance.interceptors.request.use(
  config => {
    const token = getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to catch errors
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      // If the error is due to an invalid token, log out the user
      logout();
    }
    return Promise.reject(error);
  }
);

const logout = () => {
    removeToken()
};

export default axiosInstance;
