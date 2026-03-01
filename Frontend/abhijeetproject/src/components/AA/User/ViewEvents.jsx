// src/components/ViewEvents.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './ViewEvents.css';

const ViewEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events');
        setEvents(response.data);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError('Failed to load events. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="view-events-container">
      <h2>Upcoming Events</h2>

      {loading && <p>Loading events...</p>}
      {error && <p className="error-message">{error}</p>}

      <ul className="events-list">
        {events.map((event) => (
          <li key={event._id} className="event-item">
            <h3>{event.name}</h3>
            <p>Date: {new Date(event.date).toLocaleDateString()}</p>
            <p>Time: {event.time}</p>
            <p>Location: {event.location}</p>
            <p>Description: {event.description}</p>
            <button onClick={() => viewEventDetails(event._id)}>View Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Function to view event details (for demonstration purposes)
const viewEventDetails = (eventId) => {
  // This function would typically navigate to a detailed view of the event.
  console.log(`Viewing details for event ID: ${eventId}`);
};

export default ViewEvents;
