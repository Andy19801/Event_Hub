import express from "express";
import {
  userLogin,
  eventOwnerLogin,
  adminLogin,
  signup,
} from "../controllers/authController.js";

const router = express.Router();

// Role-based login routes
router.post("/user-login", userLogin); // Route for user login
router.post("/event-owner-login", eventOwnerLogin); // Route for event-owner login
router.post("/admin-login", adminLogin); // Route for admin login

// Signup route (common for all)
router.post("/signup", signup);

export default router;




















// import express from 'express';
// import { signup, login, logout } from '../controllers/authController.js';
// import { authenticate } from '../middleware/authMiddleware.js';

// const router = express.Router();

// // Signup route
// router.post('/signin', signup);

// // Login route
// router.post('/login', login);

// // Token verification route
// router.get('/verify-token', authenticate, (req, res) => {
//   res.status(200).json({ message: 'Token is valid' });
// });

// // Logout route
// router.post('/logout', authenticate, logout);

// export default router;
