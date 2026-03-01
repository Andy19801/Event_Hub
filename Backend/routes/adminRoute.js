import express from 'express';
import  User  from '../models/User.js'; // Correctly import User model
import  Event from '../models/Event.js'; // Correctly import Event model
const router = express.Router();

// Route to get dashboard data
router.get('/dashboard', async (req, res) => {
  try {
    const eventCount = await Event.countDocuments();
    const userCount = await User.countDocuments();
    const feedbackCount = 0; // Adjust based on your requirements
    res.json({ eventCount, userCount, feedbackCount });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Route to fetch users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Route to delete a user
router.delete('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.status(204).send(); // No content response on successful delete
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router; // Export the router for use in the main server file






// // backend/routes/adminRoute.js

// import express from 'express';
// import { getDashboardData, getUsers, deleteUser } from '../controllers/adminController.js';
// import { verifyToken } from '../middleware/authMiddleware.js'; // Import middlewares

// const adminrouter = express.Router();

// // Fetch dashboard data (protected and admin-only route)
// adminrouter.get('/dashboard', verifyToken, getDashboardData);

// // Fetch all users (protected and admin-only route)
// adminrouter.get('/users', verifyToken, getUsers);

// // Delete a user by ID (protected and admin-only route)
// adminrouter.delete('/users/:id', verifyToken, deleteUser);

// export default adminrouter;

// import express from 'express';
// import { getAdminDashboardData } from '../controllers/adminController.js';
// import { verifyToken } from '../middleware/authMiddleware.js';

// const router = express.Router();

// // Get dashboard data
// router.get('/dashboard', verifyToken, getAdminDashboardData);

// export default router;






// // routes/adminRoutes.js
// import express from "express";
// import asyncHandler from 'express-async-handler';
// import { protect, Admin } from "../middleware/authMiddleware.js";
// import {
//   viewUsers,
//   deleteUser,
//   approveEvent,
// } from "../controllers/adminController.js";

// const router = express.Router();

// // Admin route to view all users
// router.get("/users", protect, Admin, viewUsers);

// // Admin route to delete a user
// router.delete("/users/:id", protect, Admin, deleteUser);

// // Admin route to approve an event
// router.put("/events/approve/:id", protect, Admin, approveEvent);

// export default router;
