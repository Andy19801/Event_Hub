// controllers/eventController.js
import Event from '../models/Event.js';

// Create a new event
export const createEvent = async (req, res) => {
    try {
        const event = new Event(req.body);
        await event.save();
        res.status(201).json({ message: 'Event created successfully', event });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// View all events
export const viewEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// View a single event by ID
export const viewEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an event by ID
export const updateEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json({ message: 'Event updated successfully', event });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete an event by ID
export const deleteEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// // Export all controller functions
// export { createEvent, viewEvents, viewEvent, updateEvent, deleteEvent };































// const Event = require('../models/Event.js');
// const Category = require('../models/Category.js');

// // Create Event
// exports.createEvent = async (req, res) => {
//     const { name, description, category, venue, date, ticketPrice, totalTickets } = req.body;

//     const categoryExists = await Category.findById(category);
//     if (!categoryExists) {
//         return res.status(400).json({ message: 'Invalid category' });
//     }

//     const event = await Event.create({
//         name,
//         description,
//         category,
//         venue,
//         date,
//         ticketPrice,
//         totalTickets,
//         availableTickets: totalTickets,
//     });

//     if (event) {
//         res.status(201).json(event);
//     } else {
//         res.status(400).json({ message: 'Invalid event data' });
//     }
// };

// // Get All Events
// exports.getEvents = async (req, res) => {
//     const events = await Event.find({}).populate('category', 'name');
//     res.json(events);
// };

// // Get Single Event
// exports.getEvent = async (req, res) => {
//     const event = await Event.findById(req.params.id).populate('category', 'name');

//     if (event) {
//         res.json(event);
//     } else {
//         res.status(404).json({ message: 'Event not found' });
//     }
// };

// // Update Event
// exports.updateEvent = async (req, res) => {
//     const { name, description, category, venue, date, ticketPrice, totalTickets } = req.body;

//     const event = await Event.findById(req.params.id);

//     if (event) {
//         if (category) {
//             const categoryExists = await Category.findById(category);
//             if (!categoryExists) {
//                 return res.status(400).json({ message: 'Invalid category' });
//             }
//             event.category = category;
//         }

//         event.name = name || event.name;
//         event.description = description || event.description;
//         event.venue = venue || event.venue;
//         event.date = date || event.date;
//         event.ticketPrice = ticketPrice || event.ticketPrice;

//         if (totalTickets) {
//             const ticketsDifference = totalTickets - event.totalTickets;
//             event.totalTickets = totalTickets;
//             event.availableTickets += ticketsDifference;
//         }

//         const updatedEvent = await event.save();
//         res.json(updatedEvent);
//     } else {
//         res.status(404).json({ message: 'Event not found' });
//     }
// };

// // Delete Event
// exports.deleteEvent = async (req, res) => {
//     const event = await Event.findById(req.params.id);

//     if (event) {
//         await event.remove();
//         res.json({ message: 'Event removed' });
//     } else {
//         res.status(404).json({ message: 'Event not found' });
//     }
// };
