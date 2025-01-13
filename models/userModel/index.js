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

    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    accessToken: {
      type: String,
      required: true
    },
    otp: {
      type: String,
      required: true
    },
    isVerified : {
      type: Boolean,
      required: true,
      default: false
    }
    
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
