import express from "express";
import {
  createTicket,
  updateTicket,
  deleteTicket,
} from "../controllers/ticketController.js";
import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create", protect, authorizeRoles("eventOwner"), createTicket);
router.put("/update/:id", protect, authorizeRoles("eventOwner"), updateTicket);
router.delete(
  "/delete/:id",
  protect,
  authorizeRoles("eventOwner"),
  deleteTicket
);

export default router;
