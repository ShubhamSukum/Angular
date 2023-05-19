import express from "express";
import bcrypt from "bcrypt"
import {userModel} from "../models/usersM.js"

const signUpRouter=express.Router();

signUpRouter.post("/signUp",async(req,res)=>{
    try{
        const username=req.body.userName;
        const password=req.body.password;

        // console.log(username);
        // console.log(password);

        const exist=await userModel.findOne({username});

        if(exist){
            return res.json({message:"User is Already registered!!"})
        }

        const hashedPassword=await bcrypt.hash(password,10);

        const newUser=new userModel({userName:username,password:hashedPassword});    // {username,password:hashedPassword}
        await newUser.save();

        return res.json({message:"User Created!!"});

    }catch(err){
        console.log(err);
    }
})

export {signUpRouter};


