import express from "express";
import cors from "cors";

let app=express();
/*
app.use(cors({
    origin:"http://localhost:5173"
}));*/


app.use(express.json());
let password="aakash123";

app.use((req,res,next)=>{
if(req.body.pass!=password){
    res.send("password does not match")
}
next()
})
let port=8000;




app.post("/",(req,res)=>{
    
    console.log(req.body)
res.status(201).send({success:true})
})

app.listen(port,()=>{
    console.log("server created");
})