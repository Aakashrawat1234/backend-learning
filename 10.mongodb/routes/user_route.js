
import express, { Router } from "express"


import express from "express";
import { home } from "../controlers/user_controller";
import User from "../../revisionmogodb/model/user.model";
let userRouter=express(Router());
userRouter.get("/",  home
)

userRouter.post("/create",async(req,res)=>{
try{
  
  let {name,age,email,userName}= req.body
 const newUser=await User.create({
    name:name,
    age:age,
    email:email,
    userName:userName
 })
 res.status(201).json({message:"User created"});

}
catch(e){
res.status(400).json({message:e})
}
})

userRouter.put("/update/:id",async(req,res)=>{
    try{
          let {name,age,email}=req.body
    let id=req.params.id
    let user=await User.findByIdAndUpdate(id,{name:name,age:age,email:email},{new:true})
    return res.status(200).json(user);
    }
    catch(e){
        return res.status(400).json({message:"user not found"})
    }
  
})
userRouter.put("/update",async(req,res)=>{
    try{
          let {name,age,email}=req.body
    
    let user=await User.updateOne({email},{name:name,age:age},{new:true})
    return res.status(200).json({message:"user updatd"});
    }
    catch(e){
        return res.status(400).json({message:"user not found"})
    }
  
})
userRouter.delete("/Delete/:id",async(req,res)=>{
    try{
         
          let id=req.params.id;
    
    let user=await User.findByIdAndDelete(id)
    return res.status(200).json(user);
    }
    catch(e){
        return res.status(400).json({message:"user not found"})
    }
  
})
userRouter.delete("/Delete",async(req,res)=>{
    try{
         let{userName}=req.body;
         
    
    let user=await User.deleteOne({userName:userName})
    return res.status(200).json(user);
    }
    catch(e){
        return res.status(400).json({message:"user not found"})
    }
  
})



userRouter.get("/read",async(req,res)=>{
    try{
        const users=await User.find({$and:[{age:{$gt:18}},{name:{$ne:"Aakash"}}]})
      return  res.status(200).json(users)
    }
    catch(e){
        return res.status(400).json({message:"user not found"})
    }
})
userRouter.get("/read/:userName",async(req,res)=>{
    try{

        const users=await User.findOne({userName:req.params.userName

        })
      return  res.status(200).json(users)
    }
    catch(e){
        return res.status(400).json({message:"user not found"})
    }
})

export default userRouter;
