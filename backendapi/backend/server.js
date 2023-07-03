const express=require("express");
const mongoose=require("mongoose");
const Task = require("./models/taskModel");
const dotenv=require("dotenv").config();
const taskRoutes=require('./routes/taskRoutes')
const app=express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(taskRoutes);


//routes
app.get('/',(req,res)=>{
res.send("home page");
})




const PORT=process.env.PORT || 5000;

mongoose
.connect(process.env.mongo_cred)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`server running on port ${PORT}`);
    })
})
.catch((err)=>{
console.log(err)
})







