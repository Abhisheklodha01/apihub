import mongoose from "mongoose";

const apiSubscriptionSchema = new mongoose.Schema(
  {
    apiName: {
      type: String,
      required: true,
    },
    accessLimit: {
      type: Number,
      required: true,
      default: 50,
    },
    accessUsed: {
      type: Number,
      default: 0,
    },
    isSubscribed: {
      type: Boolean,
      required: true,
      default: false,
    },
    subscriptionDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const userSubscriptionSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    subscriptions: [apiSubscriptionSchema],
  },
  {
    timestamps: true,
  }
);

const SubscriptionModel = mongoose.model(
  "SubscriptionModel",
  userSubscriptionSchema
);
export default SubscriptionModel;
