const mongoose=require("mongoose");

const orgSchema=mongoose.Schema(
    {
        orgName:{
            type:String,
            required:[true,"please add orgName"]
        },
        userName:{
            type:String,
            required:[true,"please add userName"]
        },
        //
        email:{
            type:String,
            required:[true,"please add email"],
            unique:true,
            trim:true,
            match:[
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                "please enter a valid email"
            ]
        },
        mobile:{
            type:Number,
            required:[true,"please add mobile"],
            default:"+91"
        },
        password:{
            type:String,
            required:[true,"please add password"]
        },
        Roles:{
            type:String,
            required:[true,"please add Roles"]
        },
        photo:{
            type:String,
            required:[true,"please add photo"],
            default:"https://img"//paster default image url
        }
    },
    {
        timestamps:true
    }
)


const Org=mongoose.model("Org",orgSchema)

module.exports=Org