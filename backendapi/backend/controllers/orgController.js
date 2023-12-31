const Org = require("../models/orgModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const createOrg = async (req, res) => {
    try {
        const result = await Org.create(req.body);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}


const getOrg = async (req, res) => {
    try {
        const result = await Org.find();
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

const loginOrg = async (req, res) => {
    try {
        const result = await Org.find({ "email": req.body.email ,"password":req.body.password});
        if (result.length==0) {
            return res.status(404).json(`Invalid credential`);
        }
        const token = jwt.sign({ email: req.body.email }, process.env.access_Token_Key ,{ expiresIn: process.env.accessTokenExpire }); // Use your own secret
        const refreshToken = jwt.sign({ username: req.body.email }, process.env.refresh_Token_key,{ expiresIn: process.env.refreshTokenExpire });
        res.status(200).json({'message':"success", 'token':token,"refreshToken":refreshToken });
        //res.status(200).json("Success Login");
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

const refreshtoken = async (req, res) => {
    
    try {
        const { refreshToken } = req.body;
        console.log(refreshToken)
        if (!refreshToken) {
            return res.sendStatus(401);
        }
        jwt.verify(refreshToken, process.env.refresh_Token_key, (err, user) => {
           // console.log(user.username)
            if (err) {
                return res.sendStatus(403);
            }else if(!user.username){
                return res.sendStatus(403);
            }
            const accessToken = jwt.sign({ username: user.username }, process.env.access_Token_Key, { expiresIn: process.env.accessTokenExpire });//you have to get username/email from token 
            res.json({ accessToken });
        });
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

const getSingleOrg = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Org.findById(id);
        
        if (!result) {
            return res.status(404).json(`Org Not found with id:${id}`);
        }
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

const deleteOrg = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Org.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json(`Org Not found with id:${id}`);
        }
        res.status(200).json("Org deleted");

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }

}


const updateOrg = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Org.findByIdAndUpdate(
            {"_id":id},req.body,{new:true, runValidators:true}
        );
        if (!result) {
            return res.status(404).json(`Org Not found with id:${id}`);
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const updateOrgSingleField = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Org.findByIdAndUpdate(
            {"_id":id},req.body,{new:true, runValidators:true}
        );
        if (!result) {
            return res.status(404).json(`Org Not found with id:${id}`);
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}
module.exports = { createOrg, getOrg, getSingleOrg, deleteOrg,updateOrg,updateOrgSingleField,loginOrg,refreshtoken }