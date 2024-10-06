import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ApproveEvent = () => {
  const [pendingEvents, setPendingEvents] = useState([]);

  useEffect(() => {
    const fetchPendingEvents = async () => {
      const response = await axios.get('http://localhost:3000/api/admin/pending-events');
      setPendingEvents(response.data);
    };
    fetchPendingEvents();
  }, []);

  const handleApprove = async (eventId) => {
    try {
      await axios.post(`http://localhost:3000/api/admin/approve-event/${eventId}`);
      Swal.fire('Success', 'Event approved successfully!', 'success');
      setPendingEvents(pendingEvents.filter(event => event._id !== eventId)); // Remove approved event from the list
    } catch (error) {
      Swal.fire('Error', 'Failed to approve event', 'error');
    }
  };

  return (
    <div>
      <h2>Approve Events</h2>
      <ul>
        {pendingEvents.map(event => (
          <li key={event._id}>
            {event.name} - {event.location}
            <button onClick={() => handleApprove(event._id)}>Approve</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApproveEvent;
