import React from "react";

const ViewBookings = ({ bookings }) => {
  return (
    <div className="bookings-list">
      <h3>User Bookings</h3>

      {bookings.length === 0 && <p>No bookings available.</p>}

      <ul>
        {bookings.map((b) => (
          <li key={b._id}>
            <strong>{b.name}</strong> booked <b>{b.eventId?.name}</b>
            <br />
            Email: {b.email}
            <br />
            Date: {new Date(b.bookingDate).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewBookings;


;

// // Define the prop types for validation
// ViewBookings.propTypes = {
//   bookings: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       eventName: PropTypes.string.isRequired,
//       userName: PropTypes.string.isRequired,
//       seats: PropTypes.number.isRequired,
//       bookingDate: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

// export default ViewBookings;


// import React from 'react';
// import { useSelector } from 'react-redux';

// const ViewBookings = () => {
//   const { bookings } = useSelector((state) => state.bookings); // Assume you have a bookings slice

//   return (
//     <div>
//       <h3>Your Bookings</h3>
//       <ul>
//         {bookings.map((booking) => (
//           <li key={booking.id}>
//             Event: {booking.eventName}, User: {booking.userName}, Seats: {booking.seats}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ViewBookings;
