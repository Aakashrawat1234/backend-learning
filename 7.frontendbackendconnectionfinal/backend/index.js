import express from "express";
import cors from"cors";

const App=express();
App.use(cors({
    origin:"http://localhost:5173"
}));
App.use(express.json());
let port=8000;
App.post("/",(req,res)=>{
   console.log( req.body);
   res.json({success:true});

})

App.listen(port,()=>{
    console.log(`server created at port ${port}`);
})