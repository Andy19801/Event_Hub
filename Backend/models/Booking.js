import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    ticket: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ticket",
      required: true,
    },
    noOfSeats: {
      type: Number,
      required: true,
      min: 1, // Ensure at least one seat is booked
    },
    totalPrice: {
      type: Number,
      required: true,
      min: 0, // Ensure total price cannot be negative
    },
    status: {
      type: String,
      enum: ["confirmed", "cancelled", "pending"],
      default: "pending", // Default status
    },
    bookingReference: {
      type: String,
      unique: true, // Ensure booking references are unique
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
