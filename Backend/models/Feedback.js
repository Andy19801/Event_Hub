// models/Feedback.js
import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Feedback = mongoose.model('Feedback', feedbackSchema);
export default Feedback;


// import mongoose from 'mongoose';

// const feedbackSchema = new mongoose.Schema({
//     event: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Event',
//         required: true,
//     },
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true,
//     },
//     rating: {
//         type: Number,
//         min: 1,
//         max: 5,
//         required: true,
//     },
//     comment: {
//         type: String,
//         required: true,
//     },
// }, { timestamps: true });

// export default mongoose.model('Feedback', feedbackSchema);



// import mongoose from 'mongoose';

// const feedbackSchema = new mongoose.Schema({
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true,
//     },
//     event: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Event',
//         required: true,
//     },
//     rating: {
//         type: Number,
//         required: true,
//         min: 1,
//         max: 5, // Assuming a rating system from 1 to 5
//     },
//     comment: {
//         type: String,
//         required: true,
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now,
//     },
// });

// const Feedback = mongoose.model('Feedback', feedbackSchema);

// export default Feedback;









// // import mongoose from "mongoose";

// // const feedbackSchema = new mongoose.Schema(
// //   {
// //     user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
// //     event: {
// //       type: mongoose.Schema.Types.ObjectId,
// //       ref: "Event",
// //       required: true,
// //     },
// //     rating: { type: Number, required: true },
// //     comment: { type: String, required: true },
// //   },
// //   { timestamps: true }
// // );

// // export default mongoose.model("Feedback", feedbackSchema);
