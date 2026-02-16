import React, { useContext, useRef } from "react";
import dp from "../assets/dp.webp"
import { useState } from "react";
import { dataContext } from "../context/userContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function SignUp(){
  let {serverUrl,userData,setUserData,getUserdata}=useContext(dataContext)
  let navigate=useNavigate()

  let[firstName,setFirstName]=useState(null)
  let[lastName,setlasttName]=useState(null)
  let[userName,setuserName]=useState(null)
  let[email,setemail]=useState(null)
  let[password,setpassword]=useState(null)

  let file=useRef()

  const handleSignUp=async (e)=>{
e.preventDefault();
try{
let formdata=new FormData()

formdata.append("firstName",firstName)
formdata.append("lastName",lastName)
formdata.append("userName",userName)
formdata.append("email",email)
formdata.append("password",password)
if(backendImage){
  formdata.append("profileImage",backendImage)
}

   let {data}=await axios.post(serverUrl+ "/api/signup",formdata,{withCredentials:true,
    headers:{"Content-Type":"multipart/form-data"}
    
   })
   await getUserdata()
   setUserData(data.user)
   if(userData){
    navigate("/home")
   }
   
   console.log(data);
}
catch(e){
console.log(e.message);
}
  }

let[frontendImage,setFrontendImage]=useState(dp)
let[backendImage,setBackendImage]=useState(null)

  function handleImage(e){
      let file=e.target.files[0];
      setBackendImage(file)
     let image=URL.createObjectURL(file)
      setFrontendImage(image)
  }
    return(
      <div className="w-full h-[100vh] bg-black flex justify-center items-center">
        <div className='w-[90%] max-w-[500px] h-[600px] bg-[#141f1f] rounded flex flex-col justify-center items-center gap-[20px]'>
        <h1 className="text-white text-[20px] font-semibold">Sign Up</h1>
      <form action="" className="w-[100%] flex flex-col items-center justify-center gap-[20px] "
      onSubmit={handleSignUp}
      >

        <input type="file" hidden ref={file} onChange={handleImage} />
        <div className="w-[100px] h-[100px] rounded-full  overflow-hidden relative bg-white border-2 border-white" >
          <img src= {frontendImage} alt="" className="w-[100%] h-[100%]"  />
    
      <div className="w-[100%] h-[100%] bg-black top-0 absolute opacity-0 hover:opacity-50  cursor pointer flex justify-center items-center
      text-white font-semibold
      "  onClick={()=>  {file.current.click()}}>
        +
      </div>

        </div>


      <div className="w-[80%] h-[50px] flex justify-center items-center gap-[10px]">
        <input type="text " placeholder="first name"  className="w-[50%] h-[100%] bg-white outline-none border-none rounde-lg px-[10px] py-[5px]"
        value={firstName}
        onChange={(e)=>setFirstName(e.target.value)}
        />
        <input type="text" placeholder="last name"  className="w-[50%] h-[100%] bg-white outlinr-none border-none rounde-lg px-[10px] py-[5px]"
          value={lastName}
        onChange={(e)=>setlasttName(e.target.value)}
        />
      </div>
      <input type="text" placeholder="user name"  className="w-[80%] h-[50px] bg-white outline-none border-none rounde-lg px-[10px] py-[5px]"
        value={userName}
        onChange={(e)=>setuserName(e.target.value)}
      
      />
      <input type="email" placeholder="email" className="w-[80%] h-[50px] bg-white outline-none border-none rounde-lg px-[10px] py-[5px]" 
        value={email}
        onChange={(e)=>setemail(e.target.value)}
      />
      <input type="password" placeholder="password" className="w-[80%] h-[50px] bg-white outline-none border-none rounde-lg px-[10px] py-[5px]"
      
        value={password}
        onChange={(e)=>setpassword(e.target.value)}
      />

      <button className="bg-[#07c7e4] text-black px-[10px] py-[5px] rounded-lg">sign up</button>

      <p className="text-[white] cursor-pointer" onClick={()=>navigate("/login")}>Alerady have an account ? <span className="text-[#0ed3e1]">Login</span></p>
      </form>
      </div>
      </div>
    
    )
}
export default SignUp