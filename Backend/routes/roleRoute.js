import express from 'express';
import {
  createRole,
  updateRole,
  deleteRole,
  getAllRoles,
} from '../controllers/roleController.js';
import { protect, authorizeRoles } from '../middleware/authMiddleware.js';

const router = express.Router();

// Route to create a role, restricted to admin
router.post('/create', protect, authorizeRoles('admin'), createRole);

// Route to update a role, restricted to admin
router.put('/update/:id', protect, authorizeRoles('admin'), updateRole);

// Route to delete a role, restricted to admin
router.delete('/delete/:id', protect, authorizeRoles('admin'), deleteRole);

// Route to get all roles, accessible to admin
router.get('/', protect, authorizeRoles('admin'), getAllRoles);

export default router;
