import axios from "axios"

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true
});


export async function register(data){

  try {
     const response = await instance.post('/api/auth/register',data)
      return response.data
  } catch (error) {
    console.log(error.message)
  }
}




export async function login(data){
 try {
     const response = await instance.post("/api/auth/login" , data )
     return response.data
 } catch (error) {
   console.log(error.message)
   
 }
}






export async function getMe(){
  try {
    const response = await instance.get('/api/recipes/user/get-me')
    return response.data
  } catch (error) {
    console.log(error.message)
    
  }
}



