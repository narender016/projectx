const express=require("express");
require("../models/studentModel");
const { createStudent,getStudent } = require("../controllers/studentController");
const router=express.Router()


// create a task
router.post('/api/addStudent',createStudent)

// Get/read all task
router.get('/api/student',getStudent)


module.exports=router;