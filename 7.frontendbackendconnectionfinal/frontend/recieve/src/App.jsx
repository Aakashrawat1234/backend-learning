

import { useState } from 'react';
import './App.css'
import axios from "axios";

function App() {
 

  let [email,setMail]=useState(null);
  let [password,setPassword]=useState(null);
  let[city,setCity]=useState(null);
async function setData(e){
   e.preventDefault(); 
let data= await axios.post("http://localhost:8000/",{
email:email,
password:password,
city:city



}

)

console.log(data.data)


}

  return (
    <>
   <form action="" onSubmit={setData}>
    <input type="email" placeholder='Enter your mail' onChange={(e)=>setMail(e.target.value)}/>
    <input type="password" name="" id=""  placeholder='enter your password' 
    onChange={(e)=>setPassword(e.target.value)}/>

    <input type="text" placeholder='enter city' onChange={(e)=>setCity(e.target.value)} />

    <button type="submit">Send</button>
   
   </form>
   <button onClick={(e)=>setData(e)}>send</button>
   
    </>
  )
}

export default App
