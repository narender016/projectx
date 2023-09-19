const mongoose = require("mongoose");

const notificationSchema = mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // You can create a User model for senders
      required: true
    },
    recipient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // You can create a User model for recipients
      required: true
    },
    subject: String,
    message: {
      type: String,
      required: true
    },
    isRead: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;
