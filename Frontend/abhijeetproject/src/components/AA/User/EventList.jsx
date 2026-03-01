import React from 'react';

const EventList = ({ events }) => {
  if (!events || events.length === 0) {
    return <p>No events found.</p>;
  }

  return (
    <div className="event-list-container">
      <h3>Available Events</h3>
      <ul>
        {events.map((event) => (
          <li key={event.id} className="event-item">
            <h4>{event.title}</h4>
            <p>{event.description}</p>
            <p>Location: {event.location}</p>
            <p>Date: {event.date}</p>
            <p>Available Tickets: {event.availableTickets}</p>
            <button onClick={() => alert(`Booking for ${event.title}`)}>Book Now</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
