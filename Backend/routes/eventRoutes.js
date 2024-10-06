import express from 'express';
import { protect, Admin } from '../middleware/authMiddleware.js';
import {
    createEvent,
    viewEvents,
    viewEvent,
    updateEvent,
    deleteEvent,
} from '../controllers/eventController.js';

const router = express.Router();

// Routes for events
router.post('/', protect, Admin, createEvent); // Admin only
router.get('/', viewEvents); // Public route
router.get('/:id', viewEvent); // Public route
router.put('/:id', protect, Admin, updateEvent); // Admin only
router.delete('/:id', protect, Admin, deleteEvent); // Admin only

export default router;
