import http from 'http';
import { url } from 'inspector';
const port=4000;

const server=http.createServer((req,res)=>{
if(req.url=="/"){
    res.end("welcome to home route")
}
else if(req.url=="/about"){
    res.end("welcome to about route")
}
else if(req.url=="/contact"){
    res.end("welcome to contact route")
}
else{
    res.end("404 not found")
}
})

server.listen(port,()=>{
    console.log("server is started")

})