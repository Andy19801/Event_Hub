import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5, // Assuming a rating system from 1 to 5
    },
    comment: {
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









// import mongoose from "mongoose";

// const feedbackSchema = new mongoose.Schema(
//   {
//     user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//     event: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Event",
//       required: true,
//     },
//     rating: { type: Number, required: true },
//     comment: { type: String, required: true },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Feedback", feedbackSchema);
