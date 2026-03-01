// models/Event.js
import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      default: ""   // ✔ NOT REQUIRED anymore
    },

    date: {
      type: Date,
      required: true
    },

    location: {
      type: String,
      required: true,
      trim: true
    },

    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    ticketsAvailable: {
      type: Number,
      default: 100   // ✔ UI does NOT include this field, so safe default
    }
  },
  { timestamps: true } // ✔ Auto-generates createdAt + updatedAt
);

export default mongoose.model("Event", eventSchema);

// // src/models/Event.js
// import mongoose from "mongoose";

// const eventSchema = new mongoose.Schema({
//   title: 
//   { 
//     type: String,
//      required: true
//      },
//   description:
//    {
//      type: String,
//       required: true
//      },
//   location:
//    {
//      type: String, 
//       required: true
//      },
//   date:
//    { 
//     type: Date,
//      required: true 
//     },
//   availableTickets:
//    {
//      type: Number,
//        required: true
//        },
//   owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the user who created the event
// });

// const Event = mongoose.model("Event", eventSchema);

// export default Event;
