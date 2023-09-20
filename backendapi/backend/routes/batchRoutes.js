const express=require("express");
require("../models/batchModel");
const { createBatch, getBatch,updateBatchSingleField } = require("../controllers/batchController");
const router=express.Router()


// create a task
router.post('/api/batch',createBatch)

// Get/read all task
router.get('/api/batch',getBatch)

//update batch
router.patch('/api/batch/:id',updateBatchSingleField)//patch

module.exports=router;