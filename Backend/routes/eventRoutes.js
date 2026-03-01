import express from 'express';
import { 
  createEvent,
  getOwnerEvents,
  getEventById,
  getAllEvents,
  searchEvents,
  bookEvent
} from '../controllers/eventController.js';

import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// ROLE CHECK: Allow only event-owner to create events
const eventOwnerOnly = (req, res, next) => {
  if (req.user.role !== "event-owner") {
    return res.status(403).json({ message: "Access denied. Only event-owners can create events." });
  }
  next();
};

/* -----------------------------------------
   EVENT ROUTES 
--------------------------------------------*/

// CREATE EVENT  (ONLY EVENT-OWNER)
router.post('/', verifyToken, eventOwnerOnly, createEvent);

// GET ALL EVENTS (PUBLIC)
router.get('/', getAllEvents);

// SEARCH EVENTS (PUBLIC)
router.get('/search', searchEvents);

// BOOK AN EVENT (USER)
router.post('/book', verifyToken, bookEvent);

// GET EVENTS CREATED BY THIS EVENT-OWNER
router.get('/owner', verifyToken, eventOwnerOnly, getOwnerEvents);

// GET EVENT BY ID (PUBLIC)
router.get('/:eventId', getEventById);

export default router;



// import express from 'express';
// import { 
//   createEvent,
//   getOwnerEvents,
//   getEventById,
//   getAllEvents,
//   searchEvents,
//   bookEvent
// } from '../controllers/eventController.js';

// import { verifyToken } from '../middleware/authMiddleware.js';

// const router = express.Router();

// // Create event (event-owner)
// router.post('/', verifyToken, createEvent);

// // Get all events (PUBLIC for users)
// router.get('/', getAllEvents);

// // Search events
// router.get('/search', searchEvents);

// // Book an event (USER)
// router.post('/book', verifyToken, bookEvent);

// // Get owner events
// router.get('/owner', verifyToken, getOwnerEvents);

// // Get single event
// router.get('/:eventId', getEventById);




// export default router;
