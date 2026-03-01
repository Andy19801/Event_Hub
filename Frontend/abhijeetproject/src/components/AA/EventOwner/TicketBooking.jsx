import React, { useState } from 'react';
import axios from 'axios';
import './TicketBooking.css'; // Import your CSS for styling

const TicketBooking = ({ eventId }) => {
  const [numberOfTickets, setNumberOfTickets] = useState(1);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleBooking = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `http://localhost:5000/api/bookings`,
        {
          eventId,
          numberOfTickets,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSuccessMessage(response.data.message);
      setNumberOfTickets(1); // Reset the number of tickets after booking
      setError('');
    } catch (err) {
      console.error('Error booking tickets:', err);
      setError('Failed to book tickets. Please try again.');
    }
  };

  return (
    <div className="ticket-booking-container">
      <h4>Book Tickets</h4>
      <input
        type="number"
        min="1"
        value={numberOfTickets}
        onChange={(e) => setNumberOfTickets(e.target.value)}
      />
      <button onClick={handleBooking}>Book Now</button>

      {error && <div className="error-message">{error}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default TicketBooking;


// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { createTicket } from '../../../features/eventOwner/eventActions'; // Adjust path as necessary

// const TicketManagement = () => {
//   const dispatch = useDispatch();
//   const [ticketData, setTicketData] = useState({
//     type: '',
//     price: '',
//     numberOfSeats: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setTicketData({ ...ticketData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(createTicket(ticketData)); // Adjust action to create a ticket
//     // Reset form after submission
//     setTicketData({
//       type: '',
//       price: '',
//       numberOfSeats: '',
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h3>Manage Tickets</h3>
//       <input type="text" name="type" placeholder="Ticket Type" value={ticketData.type} onChange={handleChange} required />
//       <input type="number" name="price" placeholder="Price" value={ticketData.price} onChange={handleChange} required />
//       <input type="number" name="numberOfSeats" placeholder="Number of Seats" value={ticketData.numberOfSeats} onChange={handleChange} required />
//       <button type="submit">Add Ticket</button>
//     </form>
//   );
// };

// export default TicketManagement;
