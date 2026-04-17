const { Router } = require('express')
const authController = require('../controllers/auth.controller')
const authMiddleware = require('../middlewares/auth.middleware')

const authRoutes = Router()

//register route
authRoutes.post("/register",authController.registerUserController)


//login route
authRoutes.post("/login",authController.loginUserController)


//logout route
authRoutes.get("/logout",authController.logoutUserController)

//get me route
authRoutes.get("/get-me",authMiddleware.authUser)
module.exports = authRoutes