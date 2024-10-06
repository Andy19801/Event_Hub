import express from 'express';
import { createFeedback, viewFeedbacks } from '../controllers/feedbackController.js'; // Adjusted import for grouped exports

const router = express.Router();

// Routes for Feedback Management

// Create feedback for an event
router.post('/', createFeedback);

// Get all feedback for a specific event
router.get('/:eventId', viewFeedbacks);

export default router;



// import express from 'express';
// import { createFeedback, getFeedbacksByEventId } from '../controllers/feedbackController.js';

// const router = express.Router();

// // Routes for Feedback Management

// // Create feedback for an event
// router.post('/', createFeedback);

// // Get all feedback for a specific event
// router.get('/:eventId', getFeedbacksByEventId);

// export default router;
