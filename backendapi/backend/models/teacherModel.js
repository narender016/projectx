const TeacherSchema = mongoose.Schema(
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
      dateOfBirth: Date,
      gender: String,
      address: {
        type: String, 
        required: [true, "Please add address"]
      },
      qualifications: [String],
      
      subjectsTaught: [String],
      profilePicture: String, // URL or reference to profile picture
      
    },
    {
      timestamps: true
    }
  );
  
  const Teacher = mongoose.model("Teacher", TeacherSchema);
  
  module.exports = Teacher;
  