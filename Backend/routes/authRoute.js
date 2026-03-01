// src/routes/authRoute.js

import express from 'express';
import { signup, userLogin, eventOwnerLogin, adminLogin, checkStatus,forgotPassword ,verifyOtpAndResetPassword} from '../controllers/authController.js';

const router = express.Router();

// Define your routes
router.post('/signup', signup); // Signup route
router.post('/user-login', userLogin);// User login route
router.post('/event-owner-login', eventOwnerLogin);// Event owner login route
router.post('/admin-login', adminLogin); // Admin login route

router.get('/check-status', checkStatus); // Route to check authentication status

router.post('/forgot-password', forgotPassword);
router.post('/verify-otp', verifyOtpAndResetPassword);
export default router;









// import express from "express";
// // import {
// //   userLogin,
  
// //   adminLogin,
// //   signup,
// // } from "../controllers/authController.js";
// import { checkStatus } from '../controllers/authController.js';
// import { verifyToken } from '../middleware/authMiddleware.js';

// const router = express.Router();

// // // Role-based login routes
// // router.post("/user-login", userLogin); // Route for user login
// // router.post("/event-owner-login", eventOwner); // Route for event-owner login
// // router.post("/admin-login", adminLogin); // Route for admin login

// // Signup route (common for all)
// // router.post("/signup", signup);
// router.get('/check-status', verifyToken, checkStatus);


// export default router;