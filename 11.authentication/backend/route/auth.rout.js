import express, { Router } from "express";
import { getUserData, login, signup } from "../controller/auth.js";
import { logOut } from "../controller/auth.js";
import { upload } from "../middleware/multer.js";
import { checkAuth } from "../middleware/checkAuth.js";

const authRouter=express(Router());
authRouter.post("/signup",upload.single("profileImage"),signup)
authRouter.post("/login",login)
authRouter.post("/logOut",logOut)
authRouter.get("/getUserData",checkAuth,getUserData)
export default authRouter;