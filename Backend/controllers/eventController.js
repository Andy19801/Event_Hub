import Event from "../models/Event.js";
import Booking from "../models/Booking.js";

/* =========================================================
   EVENT OWNER → CREATE EVENT
========================================================= */
export const createEvent = async (req, res) => {
  try {
    const { name, description, date, location, ticketsAvailable } = req.body;

    if (!name || !date || !location) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const event = await Event.create({
      name,
      description: description || "",
      date,
      location,
      ticketsAvailable: ticketsAvailable ?? 100,
      ownerId: req.user._id,
    });

    return res.status(201).json(event);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* =========================================================
   USER → BOOK EVENT
========================================================= */
export const bookEvent = async (req, res) => {
  try {
    const { eventId, name, email } = req.body;

    if (!eventId || !name || !email) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ message: "Event not found" });

    if (event.ticketsAvailable <= 0)
      return res.status(400).json({ message: "Tickets sold out" });

    const booking = await Booking.create({
      eventId,
      userId: req.user._id,
      name,
      email,
      ticketsBooked: 1,
    });

    event.ticketsAvailable -= 1;
    await event.save();

    return res.status(201).json({
      message: "Booking successful",
      booking,
    });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* =========================================================
   EVENT OWNER → GET OWN EVENTS
========================================================= */
export const getOwnerEvents = async (req, res) => {
  try {
    const events = await Event.find({ ownerId: req.user._id }).sort({ date: 1 });
    return res.status(200).json(events);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* =========================================================
   EVENT OWNER → UPDATE EVENT
========================================================= */
export const updateEvent = async (req, res) => {
  try {
    const updated = await Event.findOneAndUpdate(
      { _id: req.params.id, ownerId: req.user._id },
      req.body,
      { new: true }
    );

    if (!updated)
      return res.status(404).json({
        message: "Event not found or not authorized",
      });

    return res.json(updated);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* =========================================================
   EVENT OWNER → DELETE EVENT
========================================================= */
export const deleteEvent = async (req, res) => {
  try {
    const deleted = await Event.findOneAndDelete({
      _id: req.params.id,
      ownerId: req.user._id,
    });

    if (!deleted)
      return res.status(404).json({
        message: "Event not found or unauthorized",
      });

    return res.status(200).json({ message: "Event deleted successfully" });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* =========================================================
   USER / PUBLIC → GET ALL EVENTS
========================================================= */
export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    return res.status(200).json(events);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* =========================================================
   USER / PUBLIC → SEARCH EVENTS
========================================================= */
export const searchEvents = async (req, res) => {
  try {
    const { q } = req.query;

    const events = await Event.find({
      $or: [
        { name: new RegExp(q, "i") },
        { description: new RegExp(q, "i") },
        { location: new RegExp(q, "i") },
      ],
    });

    return res.status(200).json(events);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* =========================================================
   USER / PUBLIC → GET EVENT BY ID
========================================================= */
export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.eventId);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    return res.status(200).json(event);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* =========================================================
   EVENT OWNER → GET ALL BOOKINGS FOR THEIR EVENTS
========================================================= */
export const getEventOwnerBookings = async (req, res) => {
  try {
    const ownerEvents = await Event.find({ ownerId: req.user._id });

    const bookings = await Booking.find({
      eventId: { $in: ownerEvents.map((ev) => ev._id) },
    })
      .populate("eventId", "name date location")
      .sort({ bookingDate: -1 });

    return res.status(200).json(bookings);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// // src/controllers/eventController.js
// import Event from '../models/Event.js';

// // Create a new event
// export const createEvent = async (req, res) => {
//   try {
//     const { name, description, date, location, ticketsAvailable } = req.body;
//     const newEvent = new Event({
//       name,
//       description,
//       date,
//       location,
//       ownerId: req.user.id, // Assuming ownerId is the logged-in user
//       ticketsAvailable,
//     });

//     const savedEvent = await newEvent.save();
//     res.status(201).json(savedEvent);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Get all events for a particular owner
// export const getOwnerEvents = async (req, res) => {
//   try {
//     const events = await Event.find({ ownerId: req.user.id });
//     res.status(200).json(events);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Get event by ID
// export const getEventById = async (req, res) => {
//   try {
//     const event = await Event.findById(req.params.eventId);
//     if (!event) {
//       return res.status(404).json({ message: 'Event not found' });
//     }
//     res.status(200).json(event);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Get all events (public)
// export const getAllEvents = async (req, res) => {
//   try {
//     const events = await Event.find();
//     res.status(200).json(events);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Search events
// export const searchEvents = async (req, res) => {
//   try {
//     const query = req.query.q;

//     const events = await Event.find({
//       $or: [
//         { name: { $regex: query, $options: 'i' } },
//         { location: { $regex: query, $options: 'i' } },
//         { description: { $regex: query, $options: 'i' } }
//       ]
//     });

//     res.status(200).json(events);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Book an event
// export const bookEvent = async (req, res) => {
//   try {
//     const { eventId, name, email } = req.body;

//     const event = await Event.findById(eventId);
//     if (!event) {
//       return res.status(404).json({ message: 'Event not found' });
//     }

//     if (event.ticketsAvailable <= 0) {
//       return res.status(400).json({ message: 'No tickets available' });
//     }

//     // Reduce ticket count
//     event.ticketsAvailable -= 1;
//     await event.save();

//     res.status(200).json({ message: 'Booking successful' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };



