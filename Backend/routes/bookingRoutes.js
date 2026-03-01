// routes/bookingRoutes.js
import express from 'express';
import { createBooking, getUserBookings } from '../controllers/bookingController.js';


const router = express.Router();

// Route to create a booking
router.post('/',createBooking);

// Route to get bookings for a user
router.get('/user', getUserBookings);

export default router;


// import express from 'express';
// import { createBooking, getBookingsByEvent } from '../controllers/bookingController.js';
// import { authMiddleware, authorizeRoles } from '../middleware/authMiddleware.js';

// const router = express.Router();

// // Create a new booking (Only users)
// router.post('/', authMiddleware, authorizeRoles('user'), createBooking);

// // Get bookings for an event (Only event-owner or admin)
// router.get('/:eventId', authMiddleware, authorizeRoles('admin', 'event-owner'), getBookingsByEvent);

// export default router;



// import express from 'express';
// import { getBookings, updateBookingStatus, deleteBooking,getUserBookings } from '../controllers/bookingController.js';
// import { verifyToken } from '../middleware/authMiddleware.js';

// const router = express.Router();

// // Get bookings
// router.get('/', verifyToken, getBookings);

// // Update booking status
// router.put('/:bookingId', verifyToken, updateBookingStatus);

// // Delete a booking
// router.delete('/:bookingId', verifyToken, deleteBooking);
// router.get('/', verifyToken, getUserBookings);

// export default router;













// // // routes/bookingRoute.js
// // import express from 'express';
// // import { protect } from '../middleware/authMiddleware.js';
// // import {
// //     createBooking,
// //     viewBooking,
// //     cancelBooking,
// // } from '../controllers/bookingController.js';

// // const router = express.Router();

// // // Route to create a booking
// // router.post('/', protect, createBooking);

// // // Route to view a specific booking
// // router.get('/:id', protect, viewBooking);

// // // Route to cancel a booking
// // router.delete('/:id', protect, cancelBooking);

// // export default router;
