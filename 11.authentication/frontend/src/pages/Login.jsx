import React, { useContext, useState } from "react";
import { dataContext } from "../context/userContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(){
   
    let {serverUrl,userData,setUserData,getUserdata}=useContext(dataContext)

    let navigate=useNavigate();

  let[email,setemail]=useState(null)
  let[password,setpassword]=useState(null)


  const handleLogin=async (e)=>{
   e.preventDefault();
try{
   let {data}=await axios.post(serverUrl+ "/api/login",{
    email,
    password
   },{withCredentials:true})
  
   await getUserdata();
    setUserData(data.user);
   if(userData){
    navigate("/home")
   }
   console.log(data);
}
catch(e){
console.log(e.response.data.message);
alert(e.response.data.message)
}
  }

 
    return(
      <div className="w-full h-[100vh] bg-black flex justify-center items-center">
        <div className='w-[90%] max-w-[500px] h-[600px] bg-[#141f1f] rounded flex flex-col justify-center items-center gap-[20px]'>
        <h1 className="text-white text-[20px] font-semibold">Log in</h1>
      <form action="" className="w-[100%] flex flex-col items-center justify-center gap-[20px] "
      onSubmit={handleLogin}
      >
       
      
      <input type="email" placeholder="email" className="w-[80%] h-[50px] bg-white outline-none border-none rounde-lg px-[10px] py-[5px]" 
        value={email}
        onChange={(e)=>setemail(e.target.value)}
      />
      <input type="password" placeholder="password" className="w-[80%] h-[50px] bg-white outline-none border-none rounde-lg px-[10px] py-[5px]"
      
        value={password}
        onChange={(e)=>setpassword(e.target.value)}
      />

      <button className="bg-[#07c7e4] text-black px-[10px] py-[5px] rounded-lg">Log in</button>
      <p className="text-[white] cursor-pointer" onClick={()=>navigate("/Signup")}>Want to create new account? <span className="text-[#0ed3e1]">Signup</span></p>
      </form>
      </div>
      </div>
    
    )
}
export default Login