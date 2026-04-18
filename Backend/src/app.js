const express = require('express')
const app = express()
const authRoutes = require('./routes/auth.routes')// require routes
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cookieParser())


//usea all the routes
app.use("/api/auth",authRoutes)




module.exports = app