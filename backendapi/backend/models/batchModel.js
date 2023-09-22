const mongoose = require("mongoose");


const batchSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add Batch Name"]
    },
    startDate: {
      type: Date,
      required: [true, "Please add Start Date"]
    },
    endDate: {
      type: Date,
      required: [true, "Please add End Date"]
    },
    subject: {
      type: String,
      required: [true, "Please add Batch Name"]
    },
    batchDays: {
      type: String, // You can store batch days as a single string
      enum: ['MWF', 'TTS', 'Weekdays', 'Weekend'], // Enumerated values for batch days
      required: [true, "Please add batchDays"]
    },
    teacher: Object,
    students: [Object],
    // teacherid:{
    //   type:String,
    //   default:"null"
    // },
    // assign:{
    //   type:String,
    //   default:"null"
    // }
   
  },
  {
    timestamps: true
  }
);

const Batch = mongoose.model("Batch", batchSchema);

module.exports = Batch;
