import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,

      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "eventOwner", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);

//     },
//   // profilePic: {
//   //   type: String
//   //  }, // Field to store profile picture URL
// },

// { timestamps: true

//  });

// const User = mongoose.model('User', userSchema);
// export default User;
