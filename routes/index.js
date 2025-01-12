import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({

  username: {
    type: String,
    required: true,
    unique: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  name: {
    type: String,
    required: true,
  },

  PhoneNumber: {
    type: Number,
    required: true,
    unique: true
  },

  AccessToken: {
    type: String,
    required: true,
    unique: true
  },

}, {timestamps: true})

const User = mongoose.model("User", userSchema)
export default User