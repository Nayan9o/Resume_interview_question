import axios from 'axios'

export async function register({username, email, password}){

  try{

  const responce = await  axios.post('http://localhost:3000/api/auth/register',{
      username, email, password
    },{
      withCredentials:true
    })

    return responce.data
  }catch(err){
    console.log(err)
  }
}