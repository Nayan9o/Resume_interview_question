const { Router } = require('express')
const authController = require('../controllers/auth.controller')

const authRoutes = Router()

//register route
authRoutes.post("/register",authController.registerUserController)


//login route
authRoutes.post("/login",authController.loginUserController)


//logout route
authRoutes.get("/logout",authController.logoutUserController)
module.exports = authRoutes