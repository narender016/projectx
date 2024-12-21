const express=require("express");
const mongoose=require("mongoose");
const Task = require("./models/taskModel");
const Org = require("./models/orgModel");
const dotenv=require("dotenv").config();
const taskRoutes=require('./routes/taskRoutes');
const orgRoutes=require('./routes/orgRoutes');
const batchRoutes=require('./routes/batchRoutes');
const teacherRoutes=require('./routes/teacherRoutes');
const studentRoutes=require('./routes/studentRoutes');
const cors = require('cors');
const errorHandler=require('./middleware/errorMiddleware');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();


const corsOptions = {
    origin: ['http://localhost:4200','https://nodeapi-9h7z.onrender.com', 'https://timedoc-32x45gd25-techalam.vercel.app'],// Replace with the allowed origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  };

  app.use(cors(corsOptions)); 

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(taskRoutes);
app.use(orgRoutes);
app.use(batchRoutes);
app.use(teacherRoutes);
app.use(studentRoutes);


//routes
app.get('/',(req,res)=>{
res.send("Server Running..");
})

// Error Middleware
app.use(errorHandler)

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






