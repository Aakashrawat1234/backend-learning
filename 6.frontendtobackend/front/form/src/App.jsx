
import React from 'react';
import axios from 'axios';

import { useState } from 'react';
function App() {
let[userName,setUsername]=useState(null);
let[age,setAge]=useState(null);
let[city,setCity]=useState(null);

  
async function senddata(){

 let data=await axios.post("http://localhost:8000/",{
  userName:userName,
  age:age,
  city:city
 });

  console.log(data.data )

}

  return (
   <div>
  <input type="text" placeholder='name' value={userName} onChange={(e)=>setUsername(e.target.value)}/>
  <input type="text" placeholder='city' value={city} onChange={(e)=>setCity(e.target.value)} />
  <input type="text " placeholder='age' value={age}  onChange= {(e)=>setAge(e.target.value)}/>

  <button onClick={()=>senddata()}>Send</button>
   </div>
  )
}

export default App
