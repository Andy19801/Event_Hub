// Function to create a booking
import Booking from '../models/Booking.js';
import Event from '../models/Event.js';
import asyncHandler from 'express-async-handler';

async function createBooking(req, res) {
    try {
      // Your logic to create a booking
      res.status(201).json({ message: 'Booking created' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  
  // Function to view a booking
  async function viewBooking(req, res) {
    try {
      // Your logic to view a booking
      res.status(200).json({ message: 'Booking details' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  
  // Function to cancel a booking
  async function cancelBooking(req, res) {
    try {
      // Your logic to cancel a booking
      res.status(200).json({ message: 'Booking canceled' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  
  // Export all functions at once
  export { createBooking, viewBooking, cancelBooking };





// import Booking from '../models/Booking.js';
// import Event from '../models/Event.js';
// import asyncHandler from 'express-async-handler';

// // Create a new booking
// export const createBooking = asyncHandler(async (req, res) => {
//     const { eventId, ticketType, numberOfSeats } = req.body;

//     // Find the event by its ID
//     const event = await Event.findById(eventId);
//     if (!event) {
//         res.status(404);
//         throw new Error('Event not found');
//     }

//     // Create a new booking
//     const booking = new Booking({
//         user: req.user._id,
//         event: eventId,
//         ticket: ticketType, // Assuming ticketType is stored in the Ticket field in Booking model
//         noOfSeats: numberOfSeats,
//         totalPrice: ticketType.price * numberOfSeats, // Calculate total price if price is available in ticketType
//     });

//     const createdBooking = await booking.save();
//     res.status(201).json(createdBooking);
// });

// // View a booking by its ID
// export const viewBooking = asyncHandler(async (req, res) => {
//     const bookingId = req.params.id; // Get booking ID from request parameters

//     // Find the booking by ID and populate associated event details
//     const booking = await Booking.findById(bookingId).populate('event');

//     if (booking) {
//         res.json(booking); // Return the booking details
//     } else {
//         res.status(404);
//         throw new Error('Booking not found');
//     }
// });

// // Cancel a booking
// export const cancelBooking = asyncHandler(async (req, res) => {
//     const bookingId = req.params.id; // Get booking ID from request parameters

//     // Find the booking by ID
//     const booking = await Booking.findById(bookingId);

//     if (booking) {
//         await booking.remove(); // Remove the booking
//         res.json({ message: 'Booking cancelled successfully' });
//     } else {
//         res.status(404);
//         throw new Error('Booking not found');
//     }
// });

// // Exporting the functions
// export { createBooking, viewBooking, cancelBooking };
