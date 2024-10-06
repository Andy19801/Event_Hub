import express from 'express';
import {
    createEvent,
    updateEvent,
    deleteEvent,
    getBookings,
    getFeedbacks,
    createTicket,
    updateTicket,
    deleteTicket
} from '../controllers/eventOwnerController.js';
import { protect, authorizeRoles } from '../middleware/authMiddleware.js';

const router = express.Router();

// Event Owner Routes
router.post('/create-event', protect, authorizeRoles('eventOwner'), createEvent);         // Create event
router.put('/update-event/:id', protect, authorizeRoles('eventOwner'), updateEvent);      // Update event
router.delete('/delete-event/:id', protect, authorizeRoles('eventOwner'), deleteEvent);   // Delete event

router.get('/bookings/:eventId', protect, authorizeRoles('eventOwner'), getBookings);     // Get bookings for an event
router.get('/feedbacks/:eventId', protect, authorizeRoles('eventOwner'), getFeedbacks);   // Get feedbacks for an event

router.post('/create-ticket', protect, authorizeRoles('eventOwner'), createTicket);       // Create ticket
router.put('/update-ticket/:id', protect, authorizeRoles('eventOwner'), updateTicket);    // Update ticket
router.delete('/delete-ticket/:id', protect, authorizeRoles('eventOwner'), deleteTicket); // Delete ticket

export default router;


// import express from 'express';
// import {
//   createEvent,
//   updateEvent,
//   deleteEvent,
//   getBookings,
//   getFeedbacks,
//   createTicket,
//   updateTicket,
//   deleteTicket,
// } from '../controllers/eventOwnerController'; // Adjust the path as necessary

// const router = express.Router();

// // Event routes
// router.post('/events', createEvent); // Create a new event
// router.put('/events/:id', updateEvent); // Update an event
// router.delete('/events/:id', deleteEvent); // Delete an event

// // Booking routes
// router.get('/bookings/:eventId', getBookings); // Get bookings for an event

// // Feedback routes
// router.get('/feedbacks/:eventId', getFeedbacks); // Get feedback for an event

// // Ticket routes
// router.post('/tickets', createTicket); // Create a new ticket
// router.put('/tickets/:id', updateTicket); // Update a ticket
// router.delete('/tickets/:id', deleteTicket); // Delete a ticket

// export default router;
