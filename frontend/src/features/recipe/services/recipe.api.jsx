import axios from "axios";


const instance = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});



export async function getAllRecipe(){
  try {
    
   const response = await instance.get("/api/recipes")

   return response.data


  } catch (error) {
    console.error(error.message);
    throw error
  }
}




export async function getSingleRecipe(id){
  try {

      const response = await instance.get(`/api/recipes/${id}`);
      return response.data
    
  } catch (error) {
     console.error(error.message)
     throw error
  }
}




export async function createRecipe(data){
  try {

    const response = await instance.post("/api/recipes" ,data)
    return response.data
    
  } catch (error) {
    console.log(error.message);
    throw error
  }
}