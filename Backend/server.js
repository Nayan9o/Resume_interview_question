require('dotenv').config()
const app = require('./src/app')
const connectToDB = require('./src/config/db')
const {resume, selfDiscription, jobDiscription } = require('./src/services/temp')
const generateInterviewReport = require('./src/services/ai.service')


connectToDB()
generateInterviewReport({resume,selfDiscription,jobDiscription})

app.listen(3000,()=>{
  console.log("Server is running on port 3000")
})