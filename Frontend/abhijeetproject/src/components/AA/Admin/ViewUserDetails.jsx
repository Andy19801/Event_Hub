// src/components/ViewUserDetails.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
// import './ViewUserDetails.css';

const ViewUserDetails = () => {
  const { userId } = useParams(); // Get userId from URL parameters
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:5000/api/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data);
      } catch (err) {
        console.error('Error fetching user details:', err);
        setError('Failed to load user details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [userId]);

  const handleDeleteUser = async () => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        const token = localStorage.getItem('token');
        await axios.delete(`http://localhost:5000/api/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        navigate('/user-management'); // Redirect to user management after deletion
      } catch (err) {
        console.error('Error deleting user:', err);
        setError('Failed to delete user. Please try again.');
      }
    }
  };

  if (loading) return <p>Loading user details...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="user-details-container">
      <h2>User Details</h2>
      <div className="user-details">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Created At:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
        {/* Add more user details as needed */}
      </div>
      <button onClick={handleDeleteUser} className="delete-button">Delete User</button>
      <button onClick={() => navigate(`/edit-user/${userId}`)} className="edit-button">Edit User</button>
    </div>
  );
};

export default ViewUserDetails;
