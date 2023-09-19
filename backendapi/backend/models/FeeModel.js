const mongoose = require("mongoose");

const FeeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add Name"]
    },
    email: {
      type: String,
      required: [true, "Please add email"]
    },
    mobile: {
      type: String, // Change type to String
      required: [true, "Please add mobile"]
    },
    paymentMethod: {
      type: String, // Change type to String
      enum: ["credit card", "cash", "check","upi"], // Specify allowed values
      required: [true, "Please add Payment Method"]
    },
    paymentStatus: {
      type: String,
      required: [true, "Please add Payment Status"]
    },
    amount: {
      type: Number,
      required: [true, "Please add Payment Amount"]
    },
    paymentNote: {
        type: String,
        required: [true, "Please add Payment note"]
      },
      paymentDate: {
      type: Date, // Change type to Date
      required: [true, "Please add Date"]
    },
    studentId: { // Change field name to lowercase "studentId"
      type: String,
      required: [true, "Please add Student ID"]
    },
  },
  {
    timestamps: true
  }
);

const Fee = mongoose.model("Fee", FeeSchema);

module.exports = Fee;
