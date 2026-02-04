import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes./user.model.js"
import dotenv from "dotenv"
import connectDb from "./config/db.js";

dotenv.config();
let app=express();

app.use(express.json())
app.use("/api",userRouter)
let port=8000;




app.listen(port,()=>{
     connectDb();
    console.log("server created");
})
