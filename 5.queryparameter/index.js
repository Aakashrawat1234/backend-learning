import express from "express";

let app=express();
let port=8000;

app.get("/",(req,res)=>{
    
    let query=req.query;
    res.json(query);
    
})
app.get("/search",(req,res)=>{
    
   res.send("<h1>My First Heading </h1> <p> My first paargraph. </p>")
    
})

app.listen(port,()=>{
    console.log("server created")
})