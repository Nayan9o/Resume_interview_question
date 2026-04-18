import axios from 'axios'

const api = axios.create({
  baseURL:'http://localhost:3000',
  withCredentials:true
})

//register api
export async function register({username, email, password}){

  try{

  const responce = await  api.post('/api/auth/register',{
      username, email, password
    })

    return responce.data
  }catch(err){
    console.log(err)
  }
}

//login api
export async function  login ({email,password}){

  try{
    const responce  =  await api.post('/api/auth/login',{
      email, password
    })

    return responce.data
  }catch(err){
    console.log(err)
  }
}

//logout api
export async function logout(){
  try{
    const responce = await api.get('/api/auth/logout')
    return responce.data
  }catch(err){
    console.log(err)
  }
}

//get me
export async function getMe(){
  try{
    const responce = await api.get('/api/auth/get-me')

    return responce.data
  }catch(err){
    console.log(err)
  }
}