const express=require("express");
const Org = require("../models/orgModel");
const { createOrg, getOrg, getSingleOrg, deleteOrg, updateOrg, updateOrgSingleField, loginOrg,refreshtoken } = require("../controllers/orgController");
const router=express.Router()


// create a task
router.post('/api/register',createOrg)

//refresh token
router.post('/refresh',refreshtoken)

// Get/read all task
router.get('/api/org',getOrg)

//get a single task
router.get('/api/org/:id',getSingleOrg)

//delete task
router.delete('/api/org/:id',deleteOrg)

//update task
router.put('/api/org/:id',updateOrg)//put
router.patch('/api/org/:id',updateOrgSingleField)//patch


//login
router.post('/api/orgLogin',loginOrg)



module.exports=router;