import express from "express";
import bcrypt from "bcrypt";

import {userModel} from "../models/usersM.js"

const loginRouter=express.Router();

loginRouter.post("/login",async(req,res)=>{
    const userName=req.body.userName;
    const password=req.body.password;

    console.log(userName);
    console.log(password)

    const exist=await userModel.findOne({userName});
    console.log(exist);
    if(!exist){
        return res.json({message:"User doesn't exist!!"})
    }

    const isPassValid=await bcrypt.compare(password,exist.password);

    if(!isPassValid){
        return res.json({message:"Password is Incorrect!! Try Again!!"});
    }

    return res.json({message:"User Logged In!!"});
})

export {loginRouter};