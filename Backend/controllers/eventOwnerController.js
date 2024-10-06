import Event from '../models/Event.js';
import Booking from '../models/Booking.js';
import Feedback from '../models/Feedback.js';
import Ticket from '../models/Ticket.js';

// Create a new event
export const createEvent = async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an event
export const updateEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedEvent = await Event.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an event
export const deleteEvent = async (req, res) => {
  const { id } = req.params;
  try {
    await Event.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get bookings for an event
export const getBookings = async (req, res) => {
  const { eventId } = req.params;
  try {
    const bookings = await Booking.find({ eventId });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get feedback for an event
export const getFeedbacks = async (req, res) => {
  const { eventId } = req.params;
  try {
    const feedbacks = await Feedback.find({ eventId });
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Create a new ticket
export const createTicket = async (req, res) => {
  try {
    const newTicket = new Ticket(req.body);
    await newTicket.save();
    res.status(201).json(newTicket);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a ticket
export const updateTicket = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedTicket = await Ticket.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedTicket);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a ticket
export const deleteTicket = async (req, res) => {
  const { id } = req.params;
  try {
    await Ticket.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
