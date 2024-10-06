import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import {
  getUserProfile,
  updateUserProfile,
  changePassword,
  deleteUserAccount,
  getAllUsers,
} from '../controllers/userController.js';

const router = express.Router();

// User profile routes
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);
router.put('/password', protect, changePassword);
router.delete('/delete', protect, deleteUserAccount);

// Admin route for retrieving all users
router.get('/all', protect, getAllUsers);

export default router;
