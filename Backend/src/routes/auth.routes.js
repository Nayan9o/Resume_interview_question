import { Router } from "express";
import {
  registerUserController,
  loginUserController,
  logoutUserController,
  getMeController,
} from "../controllers/auth.controller.js";
import { authUser } from "../middlewares/auth.middleware.js";

const authRoutes = Router();

//register route
authRoutes.post("/register", registerUserController);

//login route
authRoutes.post("/login", loginUserController);

//logout route
authRoutes.get("/logout", logoutUserController);

//get me route
authRoutes.get("/get-me", authUser, getMeController);

export default authRoutes;
