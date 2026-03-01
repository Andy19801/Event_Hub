import React from "react";
import "./BookingList.css";

const BookingList = ({ bookings }) => {
  return (
    <div className="admin-container">
      <h2 className="admin-title">Booking List</h2>

      <div className="list-container">
        {bookings?.map((b) => (
          <div className="list-card" key={b._id}>
            <div>
              <h4>{b.name}</h4>
              <p>Email: {b.email}</p>
              <p>Event: {b.eventId?.name}</p>
              <p>Booked On: {new Date(b.bookingDate).toLocaleString()}</p>
            </div>
          </div>
        ))}

        {bookings?.length === 0 && <p>No bookings found.</p>}
      </div>
    </div>
  );
};

export default BookingList;
