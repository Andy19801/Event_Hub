// controllers/feedbackController.js
import Feedback from '../models/Feedback.js';

// Create feedback
export const submitFeedback = async (req, res) => {
  try {
    const { eventId, rating, comments } = req.body;
    const feedback = new Feedback({
      eventId,
      userId: req.user.id, // Assuming logged-in user
      rating,
      comments,
    });

    const savedFeedback = await feedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully', feedback: savedFeedback });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get feedback for an event
export const getFeedbackForEvent = async (req, res) => {
  try {
    const feedbacks = await Feedback.find({ eventId: req.params.eventId });
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// import Feedback from '../models/Feedback.js';

// // Controller to create feedback for an event
// export const createFeedback = async (req, res) => {
//     try {
//         const { rating, comment } = req.body;
//         const feedback = new Feedback({
//             event: req.params.eventId,
//             user: req.user._id,
//             rating,
//             comment
//         });

//         const createdFeedback = await feedback.save();
//         res.status(201).json(createdFeedback);
//     } catch (error) {
//         res.status(500).json({ message: 'Unable to create feedback', error: error.message });
//     }
// };

// // Controller to get feedbacks for an event
// export const getFeedbacks = async (req, res) => {
//     try {
//         const feedbacks = await Feedback.find({ event: req.params.eventId }).populate('user');
//         res.json(feedbacks);
//     } catch (error) {
//         res.status(500).json({ message: 'Unable to fetch feedbacks', error: error.message });
//     }
// };
