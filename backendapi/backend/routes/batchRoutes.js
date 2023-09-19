const express=require("express");
const Task = require("../models/batchModel");
const { createBatch, getBatch } = require("../controllers/batchController");
const router=express.Router()


// create a task
router.post('/api/batch',createBatch)

// Get/read all task
router.get('/api/batch',getBatch)


module.exports=router;