const express = require('express')
const app = express()
const authRoutes = require('./routes/auth.routes')// require routes
const cookieParser = require('cookie-parser')
const cors = require('cors')

app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))

//usea all the routes
app.use("/api/auth",authRoutes)




module.exports = app