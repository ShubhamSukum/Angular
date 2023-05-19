import express from "express";

import {userModel} from "../models/usersM.js"

const userRouter=express.Router();

userRouter.get("/",async(req,res)=>{
    try{
        const userData=await userModel.find();
        res.json(userData); 
    }catch(err){
        console.log(err);
    }
})

export {userRouter};