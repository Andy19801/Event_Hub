import Feedback from '../models/Feedback.js';
import asyncHandler from 'express-async-handler';

// Submit feedback for an event
export const createFeedback = asyncHandler(async (req, res) => {
    const { eventId, rating, comment } = req.body;

    // Create a new feedback entry
    const feedback = new Feedback({
        user: req.user._id,  // Get the user ID from the request object
        event: eventId,       // Event ID from the request body
        rating,               // Rating from the request body
        comment               // Comment from the request body
    });

    // Save the feedback to the database
    const createdFeedback = await feedback.save();
    res.status(201).json(createdFeedback);  // Return the created feedback with a 201 status
});

// Get feedback for a specific event
export const viewFeedbacks = asyncHandler(async (req, res) => {
    const feedbacks = await Feedback.find({ event: req.params.eventId }) // Find feedback for the specific event
        .populate('user', 'name');  // Populate user details (only the name)

    if (feedbacks.length > 0) {
        res.json(feedbacks);  // Return the list of feedbacks if found
    } else {
        res.status(404).json({ message: 'No feedback found for this event' }); // Return a 404 if no feedback found
    }
});

// Group the exports for better organization
// export default {
//     createFeedback,
//     viewFeedbacks
// };


// import Feedback from '../models/Feedback.js';
// import asyncHandler from 'express-async-handler';

// // Submit feedback for an event
// export const createFeedback = asyncHandler(async (req, res) => {
//     const { eventId, rating, comment } = req.body;

//     // Create a new feedback entry
//     const feedback = new Feedback({
//         user: req.user._id,  // Get the user ID from the request object
//         event: eventId,       // Event ID from the request body
//         rating,               // Rating from the request body
//         comment               // Comment from the request body
//     });

//     // Save the feedback to the database
//     const createdFeedback = await feedback.save();
//     res.status(201).json(createdFeedback);  // Return the created feedback with a 201 status
// });

// // Get feedback for a specific event
// export const viewFeedbacks = asyncHandler(async (req, res) => {
//     const feedbacks = await Feedback.find({ event: req.params.eventId }) // Find feedback for the specific event
//         .populate('user', 'name');  // Populate user details (only the name)

//     if (feedbacks.length > 0) {
//         res.json(feedbacks);  // Return the list of feedbacks if found
//     } else {
//         res.status(404).json({ message: 'No feedback found for this event' }); // Return a 404 if no feedback found
//     }
// });

// // If you want to group the exports, you can use:
// export default {
//     createFeedback,
//     viewFeedbacks
// };
