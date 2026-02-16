import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import { dataContext } from "./context/userContext.jsx";

function App() {
  let{userDatas,setUserData}=useContext(dataContext);
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    <Route path="/home" element={userDatas?<Home/>:<login/>}/>
    </Routes>
  );
}

export default App;
