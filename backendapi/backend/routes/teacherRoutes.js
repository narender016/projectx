const express=require("express");
require("../models/teacherModel");
const { createTeacher,getTeacher,updateTeacherSingleField } = require("../controllers/teacherController");
const router=express.Router()


// create a task
router.post('/api/teacher',createTeacher)

// Get/read all task
router.get('/api/teacher',getTeacher)

//update batch
router.patch('/api/teacher/:id',updateTeacherSingleField)//patch

module.exports=router;