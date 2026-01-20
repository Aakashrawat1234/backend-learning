import http from "http";

const server=http.createServer((req,res)=>{
res.end("first server created");
});

server.listen(3000,()=>{
    console.log("server created")
});