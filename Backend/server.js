// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import cors from 'cors';

// dotenv.config();

// const app = express();

// // Middlewares
// app.use(cors());
// app.use(express.json());

// // // Routes
// // import authRoute from './routes/authRoute.js';
// // import userRoute from './routes/userRoute.js';

// // app.use('/api/auth', authRoute);
// // app.use('/api/users', userRoute);

// // Database connection
// mongoose.connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Could not connect to MongoDB...', err));

// // Server listening
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));























// // import express from 'express';
// // import cors from 'cors';
// // import bodyParser from 'body-parser';
// // import { all } from './routes/authRoute';
// // //import authRoute from './routes/authRoute'; // Adjust as necessary

// // const app = express();

// // // Middleware
// // app.use(cors({
// //     origin: 'http://localhost:3000', // Update this to match your frontend's URL
// // }));
// // app.use(bodyParser.json());
// // app.use('/api/auth', authRoute); // Adjust the route as necessary

// // // Start server
// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => {
// //     console.log(`Server is running on port ${PORT}`);
// // });
