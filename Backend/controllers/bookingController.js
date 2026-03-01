import Booking from '../models/Booking.js';
import Event from '../models/Event.js';

// Create a booking (used by /book route)
export const createBooking = async (req, res) => {
  try {
    const { eventId, name, email } = req.body;
    const userId = req.user._id;

    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    if (event.ticketsAvailable <= 0) {
      return res.status(400).json({ message: "Tickets sold out" });
    }

    // Create booking
    const booking = await Booking.create({
      eventId,
      userId,
      name,
      email,
      ticketsBooked: 1,
    });

    // Reduce tickets
    event.ticketsAvailable -= 1;
    await event.save();

    res.status(201).json({
      message: "Booking successful",
      booking,
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get user bookings (used in /my-bookings)
export const getUserBookings = async (req, res) => {
  try {
    const userId = req.user._id;

    const bookings = await Booking.find({ userId }).populate("eventId");

    res.status(200).json(bookings);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};





// // controllers/bookingController.js
// import Booking from '../models/Booking.js';
// import Event from '../models/Event.js';

// // Create a new booking
// export const createBooking = async (req, res) => {
//   try {
//     const { eventId, ticketsBooked } = req.body;
//     const event = await Event.findById(eventId);

//     if (!event || event.ticketsAvailable < ticketsBooked) {
//       return res.status(400).json({ message: 'Not enough tickets available' });
//     }

//     event.ticketsAvailable -= ticketsBooked;
//     await event.save();

//     const booking = new Booking({
//       eventId,
//       userId: req.user.id, // Assuming logged-in user
//       ticketsBooked,
//     });

//     const savedBooking = await booking.save();
//     res.status(201).json(savedBooking);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Get user bookings
// export const getUserBookings = async (req, res) => {
//   try {
//     const bookings = await Booking.find({ userId: req.user.id }).populate('eventId');
//     res.status(200).json(bookings);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

