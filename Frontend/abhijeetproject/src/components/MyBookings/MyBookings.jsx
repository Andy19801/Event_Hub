import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MyBookings.css'; // Add your CSS file for styling if needed

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('/api/bookings'); // Adjust the endpoint as needed
        setBookings(response.data); // Assuming response.data contains an array of bookings
      } catch (err) {
        setError('Error fetching bookings. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  if (error) {
    return <div>{error}</div>; // Error state
  }

  return (
    <div className="my-bookings">
      <h2>My Bookings</h2>
      {bookings.length === 0 ? (
        <p>You have no bookings yet.</p>
      ) : (
        <ul>
          {bookings.map((booking) => (
            <li key={booking.id}> {/* Assuming each booking has a unique 'id' */}
              <h3>{booking.eventName}</h3> {/* Replace with your booking details */}
              <p>Date: {new Date(booking.date).toLocaleDateString()}</p>
              <p>Time: {booking.time}</p>
              <p>Location: {booking.location}</p>
              <p>Status: {booking.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyBookings;
