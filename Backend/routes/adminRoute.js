// routes/adminRoutes.js
import express from "express";
import asyncHandler from 'express-async-handler';
import { protect, Admin } from "../middleware/authMiddleware.js";
import {
  viewUsers,
  deleteUser,
  approveEvent,
} from "../controllers/adminController.js";

const router = express.Router();

// Admin route to view all users
router.get("/users", protect, Admin, viewUsers);

// Admin route to delete a user
router.delete("/users/:id", protect, Admin, deleteUser);

// Admin route to approve an event
router.put("/events/approve/:id", protect, Admin, approveEvent);

export default router;
