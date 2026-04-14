const userModel = require('../model/user.model')
const bcrypt = require('bcryptjs')
const jwt = requier('jsonwebtoken')


//register user
async function registerUserController(req,res){
  const {username, email, password} = req.body

  if(!username || !email || password){
    return res.status(400).json({
      message: "Please provide Username, Email and Password"
    })
  }

  const isUserAlreadyExists = await userModel.findOne({
    $or: [{username},{email}]
  })
  
  if(isUserAlreadyExists){
    return res.status(400).json({
      message: "Account already exists with this username or email address"
    })
  }

  const hash = await bcrypt.hash(password, 10)
  const user = await userModel.create({
    username,
    email,
    password: hash
  })

  const token = jwt.sign({
    id:user._id, username: user.username
  }, process.env.JWT_SECRET,
  {expiresIn:"1d"})

  res.cookie("token",token)

  res.status(201).json({
    message: "User register Successfully",
    user:{
      id: user._id,
      username: user.username,
      email: user.email
    }
  })
}


//login user
async function loginUserController(req,res){
  const {email, password} = req.body

  const user = userModel.findOne({email})

  if(!email){
    return res.status(400).json({
      message:"Invalid email or password"
    })
  }

  const isPasswordValid = bcrypt.compare(password,user.password)

  if(!isPasswordValid){
    return res.status(400).json({
      message: "Invalid email or password"
    })
  }

  const token = jwt.token(
    {id: user._id, username: user.username},
    process.env.JWT_SECRET,
    {expiresIn : "1d"}
  )

  res.cookie("token",token)
  res.status(200).json({
    message: "User loggedIn successfully",
    user:{
      id:user._id,
      username: user.username,
      email:user.email
    }
  })
}


module.exports = {
  registerUserController,
  loginUserController
}