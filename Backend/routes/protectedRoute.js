// import express from 'express';
// import authMiddleware from '../middleware/authMiddleware';

// const router = express.Router();

// // Apply authentication middleware to this route
// router.get('/protected', authMiddleware, (req, res) => {
//   res.status(200).json({ message: 'This is a protected route', user: req.user });
// });

// export default router;
import express from 'express';
import { protect } from '../middleware/authMiddleware.js'; // Protect middleware to authenticate the user
import { authorizeRoles } from '../middleware/authMiddleware.js'; // Role-based authorization

const router = express.Router();

// Route only accessible by admins
router.get('/admin/dashboard', protect, authorizeRoles('admin'), (req, res) => {
  res.json({ message: 'Welcome to the Admin Dashboard' });
});

// Route accessible by both admins and event organizers
router.post('/event/create', protect, authorizeRoles('admin', 'organizer'), (req, res) => {
  res.json({ message: 'Event creation is allowed' });
});

export default router;
