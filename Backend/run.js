// server.js old one
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
// import { fileURLToPath } from 'url';
// import helmet from 'helmet';
// import rateLimit from 'express-rate-limit';
import morgan from 'morgan';
import multer from 'multer';
import Joi from 'joi';

import swaggerUi from 'swagger-ui-express';
import { dirname } from 'path';
import authRoutes from './routes/authRoute.js';
import { protect } from './middleware/authMiddleware.js';
import { errorHandler } from './middleware/errorMiddleware.js';

// Import routes

import eventRoutes from './routes/eventRoutes.js';
import ticketRoutes from './routes/ticketRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import feedbackRoutes from './routes/feedbackRoutes.js';
import adminRoutes from './routes/adminRoute.js';


dotenv.config(); // Load environment variables from .env file

// Validate environment variables
// const envSchema = Joi.object({
//   PORT: Joi.number().default(3000),
//   MONGO_URI: Joi.string().required(),
//   CORS_ORIGIN: Joi.string().default('http://localhost:3300'),
// }).unknown();

// const { error } = envSchema.validate(process.env);
// if (error) {
//   throw new Error(`Environment variable validation error: ${error.message}`);
// }

const app = express();
const port = process.env.PORT || 3300; // Use port from .env or fallback to 3000

// Get __dirname and __filename for ES module
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// Middleware
// app.use(helmet());
app.use(morgan('combined'));
app.use(express.json());
app.use(cors({
  origin: process.env.CORS_ORIGIN,

methods: ['GET', 'POST', 'PUT', 'DELETE'],
//  methods: ['GET', 'POST'],
  credentials: true
}));

// Rate limiting
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000,
//   max: 1000,
// });
// app.use(limiter);

// File upload setup
const upload = multer({ dest: 'uploads/' });
app.post('/api/upload', upload.single('file'), (req, res) => {
  res.json({ file: req.file });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/tickets', ticketRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/feedbacks', feedbackRoutes);
app.use('/api/admin', adminRoutes);



// Serve static files from the React frontend
const buildPath = path.join(__dirname, '../Frontend/abhijeetproject/build');
app.use(express.static(buildPath));

// Catch-all route to serve the React frontend for any undefined routes
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// MongoDB connection setup
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/Event_hub';
mongoose.connect(mongoURI, {
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// General error handling middleware
app.use(errorHandler);

// Swagger documentation setup (Optional)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup({
  swagger: '2.0',
  info: {
    title: 'API Documentation',
    version: '1.0.0',
  },
}));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated');
    mongoose.connection.close();
  });
});

process.on('SIGINT', () => {
  server.close(() => {
    console.log('Process interrupted');
    mongoose.connection.close();
  });
});



