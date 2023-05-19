import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// SHUBZ
const app=express()

app.use(express.json())
app.use(cors())

import {userRouter} from "./routes/showUsers.js"
import {signUpRouter} from "./routes/signUp.js"
import {loginRouter} from "./routes/login.js"

// routes
app.use(userRouter);
app.use(signUpRouter);
app.use(loginRouter)


// Database connection
const dbConnect=mongoose.connect(
    "mongodb+srv://angularSHUBZ:angular@cluster0.wcpgnxk.mongodb.net/assign2c?retryWrites=true&w=majority",
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }
).then(()=>{
    console.log("database connected!!");
    
    app.listen(3001,()=>{
        console.log("OUR SERVER IS RUNNING!!");
    });
}).catch((error)=>{
    console.log("Connection Failed !!");
    console.log(error);
});

// mongoose.connect(
//     "mongodb+srv://angularSHUBZ:angular@cluster0.wcpgnxk.mongodb.net/assign2c?retryWrites=true&w=majority",
//     {

//     });

// app.listen(3001,()=>{
//     console.log("Angular server Running")
// })