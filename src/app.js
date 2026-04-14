const express = require('express')
const app = express()
const authRoutes = require('./routes/auth.routes')// require routes

app.use(express.json())


//usea all the routes
app.use("/api/auth",authRoutes)




module.exports = app