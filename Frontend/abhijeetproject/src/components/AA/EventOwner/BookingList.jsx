import React from 'react';

const BookingList = ({ bookings }) => (
    <ul>
        {bookings.map(booking => (
            <li key={booking._id}>
                {booking.user.name} - {booking.event.name}
            </li>
        ))}
    </ul>
);

export default BookingList;
