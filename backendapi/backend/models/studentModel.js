const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add Name"]
    },
    dateOfBirth: {
      type: Date,
      required: [true, "Please add Date of Birth"]
    },
    class:{
        type: Number,
        required: [true, "Please add class"]
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"]
    },
    address: {
      type: String,
      required: [true, "Please add address"]
    },
    // parentGuardian: {
    //   name: String,
    //   email: String,
    //   mobile: String,
    //   relationship: String
    // },
    // emergencyContact: {
    //   name: String,
    //   mobile: String
    // },
    email: {
      type: String,
      required: [true, "Please add email"],
      unique:true,
            trim:true,
            match:[
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                "please enter a valid email"
            ]
    },
    mobile: {
      type: String, // Change type to String
      required: [true, "Please add mobile"]
    },
    Batches: {
      type: [String], // Specify array type as [String]
      required: [true, "Please add Roles"]
    }
  },
  {
    timestamps: true
  }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
