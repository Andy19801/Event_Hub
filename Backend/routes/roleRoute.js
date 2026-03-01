import express from 'express';
import {
  createRole,
  updateRole,
  deleteRole,
  getAllRoles,
} from '../controllers/roleController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Route to create a role, restricted to admin
router.post('/create', verifyToken, createRole);

// Route to update a role, restricted to admin
router.put('/update/:id',verifyToken, updateRole);

// Route to delete a role, restricted to admin
router.delete('/delete/:id', deleteRole);

// Route to get all roles, accessible to admin
router.get('/', verifyToken, getAllRoles);

export default router;
