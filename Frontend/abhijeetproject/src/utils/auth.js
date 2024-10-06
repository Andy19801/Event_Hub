export const checkAuthStatus = async () => {
  // Check if token exists in localStorage or sessionStorage
  const token = localStorage.getItem('authToken');
  
  if (!token) {
    return { status: false, role: '' }; // Not logged in
  }

  try {
    // Decode token or fetch user info based on token (this can vary)
    const response = await fetch('http://localhost:5000/api/auth/check', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return { status: true, role: data.role }; // User is logged in and role is returned
    } else {
      return { status: false, role: '' };
    }
  } catch (error) {
    console.error('Error checking authentication status:', error);
    return { status: false, role: '' };
  }
};