// src/utils/api.js

import axios from 'axios';
import { getToken } from '../utils/cookies'; 

const API_URL = 'http://localhost:5000/api'; // Base URL for your API

// Function to login
export const loginUser = async (role, credentials) => {
  try {
    const response = await axios.post(`${API_URL}/${role}-login`, credentials);
    return response.data; // Adjust based on your API response
  } catch (error) {
    console.error('Login Error:', error);
    throw error; // Rethrow to handle in your login component
  }
};

// Function to check user role
export const getUserRole = async () => {
  try {
    const response = await axios.get(`${API_URL}/auth/check-role`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.data.role; // Adjust based on your API response
  } catch (error) {
    console.error('Error fetching user role:', error);
    throw error;
  }
};
// Create an axios instance with the base URL
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Add a request interceptor to attach the JWT token to every request
api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
      config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;

