
import express from 'express';
import { getAllUsers,getUserDetails, updateUserRole, deleteUser } from '../controllers/userController.js';
// import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Get all users
router.get('/',  getAllUsers);
router.get('/:id', getUserDetails);

// Update user role
router.put('/:id/role', updateUserRole);

// Delete user
router.delete('/:id', deleteUser);

export default router;