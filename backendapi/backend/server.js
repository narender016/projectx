const express=require("express");
const mongoose=require("mongoose");
const Task = require("./models/taskModel");
const Org = require("./models/orgModel");
const dotenv=require("dotenv").config();
const taskRoutes=require('./routes/taskRoutes');
const orgRoutes=require('./routes/orgRoutes');
const cors = require('cors')
const app=express();


const corsOptions = {
    origin: ['http://localhost:4200/', 'https://nodeapi-9h7z.onrender.com/'],// Replace with the allowed origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  };

  app.use(cors(corsOptions)); 

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(taskRoutes);
app.use(orgRoutes);



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






