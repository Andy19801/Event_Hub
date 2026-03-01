// routes/feedbackRoutes.js
import express from 'express';
import { submitFeedback, getAllFeedbacks, getFeedbackForEvent } from '../controllers/feedbackController.js';
import { verifyToken } from '../middleware/authMiddleware.js'; // Middleware to protect routes

const feedbackrouter = express.Router();

// Route to submit feedback
// feedbackrouter.post('/', verifyToken, submitFeedback);
feedbackrouter.post('/', getAllFeedbacks);
// Route to get feedback for an event
feedbackrouter.get('/:eventId', getFeedbackForEvent);


export default feedbackrouter;



// import express from 'express';
// import { createFeedback, getFeedbacks } from '../controllers/feedbackController.js';
// import { authMiddleware } from '../middleware/authMiddleware.js';

// const router = express.Router();

// // Route to create feedback for an event (only authenticated users)
// router.post('/:eventId', authMiddleware, createFeedback);

// // Route to get all feedback for a specific event
// router.get('/:eventId', getFeedbacks);

// export default router;

