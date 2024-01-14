const express=require("express");
const Task = require("../models/taskModel");
const { authenticateToken } = require("../middleware/authMiddleware");
const { createTask, getTask, getSingleTask, deleteTask, updateTask, updateTaskSingleField } = require("../controllers/taskController");
const router=express.Router()


// create a task
router.post('/api/tasks',authenticateToken,createTask)

// Get/read all task
router.get('/api/tasks',authenticateToken,getTask)

//get a single task
router.get('/api/tasks/:id',authenticateToken,getSingleTask)

//delete task
router.delete('/api/tasks/:id',authenticateToken,deleteTask)

//update task
router.put('/api/tasks/:id',authenticateToken,updateTask)//put
router.patch('/api/tasks/:id',authenticateToken,updateTaskSingleField)//patch



module.exports=router;