import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  withCredentials:true
});



export async function getUserRecipes(){
  try {
    const response = await instance.get("api/recipes/user")
    return response.data
  } catch (error) {
    console.log(error.message);
    throw error
  }
}




export async function deleteUserRecipe(id){
  try {

   const response =  await instance.delete(`/api/recipes/${id}`)
   return response.data
    
  } catch (error) {
    console.log(error.message);
    throw error.message
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





export async function updateUserRecipe(id , data){
  try {

    const response = await instance.put(`/api/recipes/${id}` , data)
    return response.data
    
  } catch (error) {
    console.log(error.message)
    throw error
  }
}




export async function getMeProfile(){
  try {
    const response = await instance.get("/api/auth/me")
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}




export async function updateUserProfile(profileImage){
   try {
    const response = await instance.patch("/api/users/avatar", profileImage)
    return response.data
   } catch (error) {
    console.log(error.message)
    throw error
   }
}





export async function bioUpdate(data){
  
  try {
    
      const response = await instance.patch(`/api/users/profile`, {bio:data})
      return response.data
  } catch (error) {
    console.log(error.message);
    throw error
  }

}