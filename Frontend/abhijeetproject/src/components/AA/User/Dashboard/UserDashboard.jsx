// src/components/AA/User/Dashboard/UserDashboard.jsx

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserBookings } from '../../../../features/user/userActions';
import { useNavigate } from 'react-router-dom';
import './UserDashboard.css';

const UserDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, token } = useSelector((state) => state.auth);
  const { bookings, loading, error } = useSelector((state) => state.user);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (token) {
      dispatch(fetchUserBookings());
    }
  }, [dispatch, token]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredBookings = bookings.filter((booking) =>
    booking.eventId?.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="user-dashboard-container">
      
      {/* PROFILE CARD */}
      <div className="profile-card">
        <div className="profile-banner"></div>

        <div className="profile-avatar">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
            alt="User Avatar"
          />
        </div>

        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-role">{user.role}</p>

    
      </div>

      {/* SEARCH BAR */}
      <div className="search-bar">
        <input 
          type="text"
          placeholder="Search your bookings..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {/* BOOKINGS LIST */}
      <div className="bookings-container">
        <h2>Your Bookings</h2>

        {loading && <p>Loading bookings...</p>}
        {error && <p className="error">{error}</p>}

        {filteredBookings.length > 0 ? (
          <ul>
            {filteredBookings.map((booking) => (
              <li className="booking-card" key={booking._id}>
                <h3>{booking.eventId.name}</h3>
                <p><strong>Date:</strong> {new Date(booking.eventId.date).toLocaleDateString()}</p>
                <p><strong>Location:</strong> {booking.eventId.location}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No bookings found.</p>
        )}
      </div>

      {/* NAVIGATION BUTTONS */}
      <div className="dashboard-nav">
        <button onClick={() => navigate('/user/profile')}>Go to Profile</button>
        <button onClick={() => navigate('/user/events')}>View Events</button>
      </div>

    </div>
  );
};

export default UserDashboard;

