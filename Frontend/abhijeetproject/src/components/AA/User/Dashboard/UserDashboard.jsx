import React, { useState, useEffect } from 'react';
import './User Dashboard.css'; // Import CSS for styling

const UserDashboard = () => {
  const [events, setEvents] = useState([]); // Initialize an empty array to store events
  const [registeredEvents, setRegisteredEvents] = useState([]); // Initialize an empty array to store registered events

  useEffect(() => {
    // Fetch event data from API endpoint
    fetch('/api/events')
      .then(response => response.json())
      .then(data => setEvents(data));
  }, []);

  const handleRegister = (eventId) => {
    // Register user for the event
    fetch(`/api/events/${eventId}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: /* current user ID */ }),
    })
      .then(response => response.json())
      .then((data) => {
        // Update registered events state
        setRegisteredEvents((prevEvents) => [...prevEvents, data.event]);
      });
  };

  return (
    <div className="user-dashboard">
      <h1>Welcome to Your Dashboard</h1>
      <div className="dashboard-content">
        <section className="dashboard-section">
          <h2>Your Events</h2>
          <p>View and manage your events here.</p>
          <ul>
            {events.map((event) => (
              <li key={event.id}>
                {event.name}
                {registeredEvents.includes(event.id) ? (
                  <span>Registered</span>
                ) : (
                  <button onClick={() => handleRegister(event.id)}>Register</button>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section className="dashboard-section">
          <h2>Feedback</h2>
          <p>Provide feedback or view your past feedback.</p>
          {/* Add code to display or submit feedback */}
        </section>
      </div>
    </div>
  );
};

export default UserDashboard;