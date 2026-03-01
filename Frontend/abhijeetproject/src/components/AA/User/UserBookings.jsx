import React from 'react';

const UserBookings = ({ bookings }) => {
  if (!bookings || bookings.length === 0) {
    return <p>No bookings found.</p>;
  }

  return (
    <div className="user-bookings-container">
      <h3>My Bookings</h3>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id} className="booking-item">
            <h4>{booking.eventTitle}</h4>
            <p>Date: {booking.date}</p>
            <p>Status: {booking.status}</p>
            <p>Tickets: {booking.ticketsBooked}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserBookings;
