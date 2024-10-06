// Importing required modules
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoute.js';
import roleRoute from './routes/roleRoute.js';

import eventRoutes from './routes/eventRoutes.js';
import ticketRoutes from './routes/ticketRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import feedbackRoutes from './routes/feedbackRoutes.js';
import adminRoutes from './routes/adminRoute.js';

// Initialize dotenv to use environment variables
dotenv.config();

// Create an instance of the Express app
const app = express();

// Middleware to parse incoming JSON requests and handle CORS
app.use(express.json());
app.use(cors());


app.use('/api/auth', authRoutes);
app.use('/api/roles', roleRoute);
app.use('/api/events', eventRoutes);
app.use('/api/tickets', ticketRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/feedbacks', feedbackRoutes);
app.use('/api/admin', adminRoutes);

// MongoDB connection using Mongoose (without deprecated options)
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); // Exit process with failure
  }
};

// Basic route to test server
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start the server after database connection is established
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running on port ${PORT}`);
});





// // index.js
// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// import authRoutes from './routes/authRoute.js';
// import { protect } from './middleware/authMiddleware.js';
// import { errorHandler } from './middleware/errorMiddleware.js';
// // Import routes

// import eventRoutes from './routes/eventRoutes.js';
// import ticketRoutes from './routes/ticketRoutes.js';
// import bookingRoutes from './routes/bookingRoutes.js';
// import feedbackRoutes from './routes/feedbackRoutes.js';
// import adminRoutes from './routes/adminRoute.js';

// dotenv.config(); // Load environment variables from .env file

// const app = express();
// const port = process.env.PORT || 5000; // Use port from .env or fallback to 3000

// // API Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/events', eventRoutes);
// app.use('/api/tickets', ticketRoutes);
// app.use('/api/bookings', bookingRoutes);
// app.use('/api/feedbacks', feedbackRoutes);
// app.use('/api/admin', adminRoutes);

// // MongoDB connection setup
// const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/Event_hub';
// mongoose.connect(mongoURI, {
//   serverSelectionTimeoutMS: 5000,
//   socketTimeoutMS: 45000,
// })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Could not connect to MongoDB:', err));

//   // General error handling middleware
// app.use(errorHandler);
// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });