// src/components/ApproveEvents.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './ApproveEvents.css';

const ApproveEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPendingEvents = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/events/pending', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setEvents(response.data);
      } catch (err) {
        console.error('Error fetching pending events:', err);
        setError('Failed to load pending events. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPendingEvents();
  }, []);

  const handleApproval = async (eventId, approve) => {
    try {
      const token = localStorage.getItem('token');
      await axios.patch(`http://localhost:5000/api/events/${eventId}/approve`, { approve }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Refresh the event list after approval
      setEvents((prevEvents) => prevEvents.filter(event => event._id !== eventId));
    } catch (err) {
      console.error('Error approving/rejecting event:', err);
      setError('Failed to update event status. Please try again later.');
    }
  };

  return (
    <div className="approve-events-container">
      <h2>Pending Events Approval</h2>

      {loading && <p>Loading pending events...</p>}
      {error && <p className="error-message">{error}</p>}

      <ul className="pending-events-list">
        {events.map((event) => (
          <li key={event._id} className="event-item">
            <h3>{event.name}</h3>
            <p>Date: {new Date(event.date).toLocaleDateString()}</p>
            <p>Location: {event.location}</p>
            <p>Description: {event.description}</p>
            <div className="action-buttons">
              <button onClick={() => handleApproval(event._id, true)}>Approve</button>
              <button onClick={() => handleApproval(event._id, false)}>Reject</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApproveEvents;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// const ApproveEvent = () => {
//   const [pendingEvents, setPendingEvents] = useState([]);

//   useEffect(() => {
//     const fetchPendingEvents = async () => {
//       const response = await axios.get('http://localhost:3000/api/admin/pending-events');
//       setPendingEvents(response.data);
//     };
//     fetchPendingEvents();
//   }, []);

//   const handleApprove = async (eventId) => {
//     try {
//       await axios.post(`http://localhost:3000/api/admin/approve-event/${eventId}`);
//       Swal.fire('Success', 'Event approved successfully!', 'success');
//       setPendingEvents(pendingEvents.filter(event => event._id !== eventId)); // Remove approved event from the list
//     } catch (error) {
//       Swal.fire('Error', 'Failed to approve event', 'error');
//     }
//   };

//   return (
//     <div>
//       <h2>Approve Events</h2>
//       <ul>
//         {pendingEvents.map(event => (
//           <li key={event._id}>
//             {event.name} - {event.location}
//             <button onClick={() => handleApprove(event._id)}>Approve</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ApproveEvent;
