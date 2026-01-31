import express from "express";
import cors from "cors";

let app=express();
app.use(cors(
))
app.use(express.json());

let port=8000;
app.get("/", (req, res) => {
  res.json({ message: "Hello from GET /" });
});

app.post("/",(req,res)=>{
   
 console.log(req.body);
 res.json({sucess:true});
})
app.listen(port,()=>{
    console.log("server created for this");
})
