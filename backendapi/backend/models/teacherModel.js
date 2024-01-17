const mongoose=require("mongoose");

const TeacherSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, "Please add Name"]
      },
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
      dateOfBirth: Date,
      gender: String,
      address: {
        type: String, 
        required: [true, "Please add address"]
      },
      qualifications: [String],
      
      subjectsTaught: [String],
      profilePicture: String, // URL or reference to profile picture
      batches:[String],
      deleted: { type: Boolean, default: false },
    },
    {
      timestamps: true
    }
  );
  
  const Teacher = mongoose.model("Teacher", TeacherSchema);
  
  module.exports = Teacher;
  