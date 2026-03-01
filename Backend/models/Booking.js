// models/Booking.js
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const bookingSchema = new mongoose.Schema(
  {
    eventId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    ticketsBooked: {
      type: Number,
      default: 1,
    },

    bookingReference: {
      type: String,
      unique: true,
      default: () => uuidv4(),   // ⭐ Auto-generate unique reference
    },

    bookingDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);




// // models/Booking.js
// import mongoose from 'mongoose';

// const bookingSchema = new mongoose.Schema({
//   eventId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Event',
//     required: true,
//   },
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true,
//   },
//   ticketsBooked: {
//     type: Number,
//     required: true,
//   },
//   bookingDate: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Booking = mongoose.model('Booking', bookingSchema);
// export default Booking;





// import mongoose from 'mongoose';

// const bookingSchema = new mongoose.Schema({
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
//     ticket: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Ticket',
//         required: true,
//     },
//     seats: {
//         type: Number,
//         required: true,
//     },
//     totalAmount: {
//         type: Number,
//         required: true,
//     },
//     status: {
//         type: String,
//         enum: ['pending', 'confirmed', 'canceled'],
//         default: 'pending',
//     },
// }, { timestamps: true });

// export default mongoose.model('Booking', bookingSchema);
