// src/utils/auth.js
import axios from 'axios';

export const checkAuthStatus = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/auth/check-status', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming you're using local storage for tokens
      },
    });

    if (response.data.isLoggedIn) {
      return { status: true, role: response.data.role }; // Adjust based on your API response
    } else {
      return { status: false, role: '' };
    }
  } catch (error) {
    console.error('Error checking authentication status:', error);
    return { status: false, role: '' }; // Fallback in case of error
  }
};
