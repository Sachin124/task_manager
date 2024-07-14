

import axios from 'axios';

const API_URL =  process.env.BASE_URL || 'http://localhost:3000/api';

export const register = (username, password, confirmPassword) => {
  return axios.post(`${API_URL}/auth/register`, { username, password, confirmPassword });
};

export const login = (username, password) => {
  return axios.post(`${API_URL}/auth/login`, { username, password });
};
