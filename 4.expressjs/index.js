import express from "express";

const app=express();
const port =8000;

/*

app.use(express.json())// we are using a default middleware 

app.get("/",(req,res)=>{
res.json({name:"ayush",class:"12t"})
})
app.post("/",(req,res)=>{
    let body=req.body;
    console.log(body);
res.json("hello")

})
app.get("/about",(req,res)=>{
res.send("about");
})
app.get("/contact",(req,res)=>{
res.send("contact");
})
*/

let users=
 [
    {
      "id": 1,
      "name": "Aakash Rawat",
      "age": 22,
      "department": "Web Development",
      "position": "Frontend Developer",
      "salary": 55000
    },
    {
      "id": 2,
      "name": "Ayush Sharma",
      "age": 24,
      "department": "Backend",
      "position": "Node.js Developer",
      "salary": 60000
    },
    {
      "id": 3,
      "name": "Neha Verma",
      "age": 26,
      "department": "Design",
      "position": "UI/UX Designer",
      "salary": 50000
    },
    {
      "id": 4,
      "name": "Rohan Singh",
      "age": 28,
      "department": "DevOps",
      "position": "Cloud Engineer",
      "salary": 70000
    },
    {
      "id": 5,
      "name": "Priya Mehta",
      "age": 25,
      "department": "Testing",
      "position": "QA Engineer",
      "salary": 48000
    }
  ]



app.get("/user",(req,res)=>{
res.json(users);
})
app.get("/user/:id",(req,res)=>{
   let id= req.params.id;
  let existinfuser= users.find((user)=>(user.id==id))
  if(!existinfuser){
   return res.send("404 not found")
  }
   console.log(id);
res.json(existinfuser);
})


app.listen(port,()=>{
    console.log("server created");
})