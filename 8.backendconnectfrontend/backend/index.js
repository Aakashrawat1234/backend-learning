import express from"express";
import cors from "cors";

let app=express();

app.use(cors({
    "origin":"http://localhost:5173"
}));
let port=8000;
app.get("/",(req,res)=>{
res.json({name:"aakash",age:"21"})
})

app.listen(port,()=>{
console.log("server started");
})