import express from 'express';
import { createTicket, getAllTickets, getTickets } from '../controllers/ticketController.js';
// import { verifyToken,  } from '../middleware/authMiddleware.js';

const ticketrouter = express.Router();

// Create a new ticket (Only event-owner or admin)
ticketrouter.post('/:eventId', createTicket);

// Get tickets for an event
ticketrouter.get('/:eventId', getTickets);
ticketrouter.get('/', getAllTickets);

export default ticketrouter;


// import express from "express";
// import {
//   createTicket,
//   updateTicket,
//   deleteTicket,
// } from "../controllers/ticketController.js";
// import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

// const router = express.Router();

// router.post("/create", protect, authorizeRoles("eventOwner"), createTicket);
// router.put("/update/:id", protect, authorizeRoles("eventOwner"), updateTicket);
// router.delete(
//   "/delete/:id",
//   protect,
//   authorizeRoles("eventOwner"),
//   deleteTicket
// );

// export default router;
