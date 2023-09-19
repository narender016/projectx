const mongoose = require("mongoose");

const courseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: String,
    batch: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Batch",
      required: true
    },
    schedule: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
