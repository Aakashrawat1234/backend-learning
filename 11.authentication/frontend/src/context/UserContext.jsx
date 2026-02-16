
import React,{createContext, useEffect, useState}from 'react';
export const dataContext=createContext();
import axios from "axios";
import { useNavigate } from 'react-router-dom';




function UserContext({children}){
    let navigate=useNavigate()

    let[userData,setUserData]=useState(null);
    const serverUrl="http://localhost:8000"

    const getUserdata=async()=>{
        try{
            let {data}=await axios.get(serverUrl+"/api/getUserdata",{
                withCredentials:true
            })
            setUserData(data);
        }
        catch(error){
            navigate("/login")
            console.log(error);
        }
    }
    const value={
        serverUrl,userData,setUserData,getUserdata
    }

    useEffect(()=>{
        getUserdata()
    },[])
    return(
        <div>
            <dataContext.Provider value={value}>
            {children}
            </dataContext.Provider>
        </div>
    )
}
export default UserContext