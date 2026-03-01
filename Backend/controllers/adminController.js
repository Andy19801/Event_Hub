// backend/controllers/adminController.js

import User from '../models/User.js'; // Import User model
import Event from '../models/Event.js'; // Import Event model
import Feedback from '../models/Feedback.js'; // Import Feedback model

// Get dashboard data
export const getDashboardData = async (req, res) => {
  try {
    const eventsCount = await Event.countDocuments();
    const usersCount = await User.countDocuments();
    const feedbackCount = await Feedback.countDocuments();

    res.status(200).json({
      events: eventsCount,
      users: usersCount,
      feedback: feedbackCount,
    });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).json({ message: 'Error fetching dashboard data' });
  }
};

// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password'); // Exclude password from the response
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Error fetching users' });
  }
};

// Delete a user by ID
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Error deleting user' });
  }
};


// import Event from '../models/Event.js';
// import User from '../models/User.js';
// import Feedback from '../models/Feedback.js';

// // Function to get data for the admin dashboard
// export const getAdminDashboardData = async (req, res) => {
//   try {
//     // Get the counts for events, users, and feedback from the database
//     const eventCount = await Event.countDocuments();
//     const userCount = await User.countDocuments();
//     const feedbackCount = await Feedback.countDocuments();

//     // Return the counts to the frontend as JSON
//     res.status(200).json({
//       events: eventCount,
//       users: userCount,
//       feedback: feedbackCount,
//     });
//   } catch (error) {
//     console.error('Error fetching admin dashboard data:', error);
//     res.status(500).json({ message: 'Error fetching dashboard data' });
//   }
// };



// import Event from '../models/Event.js';
// import User from '../models/User.js';
// import Feedback from '../models/Feedback.js';

// // Get admin dashboard data
// export const getAdminDashboardData = async (req, res) => {
//   try {
//     const events = await Event.countDocuments();
//     const users = await User.countDocuments();
//     const feedback = await Feedback.countDocuments();

//     res.status(200).json({
//       events,
//       users,
//       feedback,
//     });
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to retrieve dashboard data', error: err.message });
//   }
// };

