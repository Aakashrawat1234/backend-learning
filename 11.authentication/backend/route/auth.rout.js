import express, { Router } from "express";
import { login, signup } from "../controller/auth.js";
import { logOut } from "../controller/auth.js";

const authRouter=express(Router());
authRouter.post("/signup",signup)
authRouter.post("/login",login)
authRouter.post("/logOut",logOut)
export default authRouter;