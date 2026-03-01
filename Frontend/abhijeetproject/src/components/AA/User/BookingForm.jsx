// src/components/BookEvent.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './BookEvent.css';

const BookEvent = ({ eventId }) => {
  const [eventDetails, setEventDetails] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/events/${eventId}`);
        setEventDetails(response.data);
      } catch (err) {
        console.error('Error fetching event details:', err);
        setError('Failed to load event details.');
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, [eventId]);

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!name || !email) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:5000/api/events/book',
        {
          eventId,
          name,
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSuccessMessage(response.data.message);
      setName('');
      setEmail('');
      setError('');
    } catch (err) {
      console.error('Error booking the event:', err);
      setError('Failed to book the event. Please try again.');
    }
  };

  if (loading) {
    return <div>Loading event details...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!eventDetails) {
    return <div>No event found.</div>;
  }

  return (
    <div className="book-event-container">
      <h1>Book Event: {eventDetails.name}</h1>
      <p><strong>Date:</strong> {new Date(eventDetails.date).toLocaleDateString()}</p>
      <p><strong>Description:</strong> {eventDetails.description}</p>

      <form onSubmit={handleBooking}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Book Now</button>
      </form>
      
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default BookEvent;
