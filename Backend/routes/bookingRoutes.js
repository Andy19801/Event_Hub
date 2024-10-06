// routes/bookingRoute.js
import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import {
    createBooking,
    viewBooking,
    cancelBooking,
} from '../controllers/bookingController.js';

const router = express.Router();

// Route to create a booking
router.post('/', protect, createBooking);

// Route to view a specific booking
router.get('/:id', protect, viewBooking);

// Route to cancel a booking
router.delete('/:id', protect, cancelBooking);

export default router;
