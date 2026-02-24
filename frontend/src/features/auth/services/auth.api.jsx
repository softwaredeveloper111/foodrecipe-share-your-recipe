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
    console.error(error.response?.data?.message || error.message)
    throw error;
  }
}




export async function login(data){
 try {
     const response = await instance.post("/api/auth/login" , data )
     return response.data
 } catch (error) {
   console.log(error.response?.data?.message || error.message)
   throw error;
   
 }
}






export async function getMe(){
  try {
    const response = await instance.get('/api/auth/me')
    return response.data
  } catch (error) {
    console.log(error.response?.data?.message || error.message)
    throw error
  }
}



