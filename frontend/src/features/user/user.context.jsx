import React, { createContext, useState } from 'react'
import { getUserRecipes , deleteUserRecipe , getSingleRecipe , updateUserRecipe ,updateUserProfile , getMeProfile ,  bioUpdate } from "./services/user.api";
export const userContextProvider = createContext();


const UserContext = ({children}) => {

  const [loading,setLoading] =   useState(false);
  const [userRecipePosts , setUserRecipePosts] = useState(null)
  const [singleRecipe,setSingleRecipe] = useState(null)
  const [user,setUser] = useState(null)


  async function handlerGetUserAlllRecipePost(){

    setLoading(true)
    try {
       
      const response =await getUserRecipes();
      setUserRecipePosts(response.data)
      return {success:true}

    } catch (error) {
      return {
        success:false,
        message:`${error.message}, something went wrong`
      }
    }
  finally{
     setLoading(false)
  }
  }

  
  async function deleteUserRecipeHandler(id){
    setLoading(true)
    try {
       
      await deleteUserRecipe(id)
      setUserRecipePosts(prev=>prev.filter(item=>item._id!==id))
      return {success:true}

    } catch (error) {
      return {
        success:false,
        message:`${error.message} , something went wrong`
      }
    }
    finally{
       setLoading(false)
    }
  }



  async function  HandlegetSingleRecipe(id){
    setLoading(true)
    try {
       
      const response = await getSingleRecipe(id)
      setSingleRecipe(response.data)
      return {success:true}

    } catch (error) {
       return {
        success:false,
        message:`${error.message}, somthing went wrong`
       }
    }
    finally{
       setLoading(false)
    }
  }




  async function handleUpdateUserRecipe(id,data){
    setLoading(true)
    try {
      
       await updateUserRecipe(id,data)
      return {success:true}
      
    } catch (error) {
      return {
        success:false,
        message:`${error.message} , somthing went wrong`
      }
      
    }
    finally{
      setLoading(false)
    }
  }




  async function GetMeHandler(){
    setLoading(true)
    try {
      
      const response = await getMeProfile();
      setUser(response.data);
      return {success:true}

    } catch (error) {
      return {
        success:false,
        message:`${error.message}, something went wrong`
      }
    }
    finally{
      setLoading(false)
    }

  }



 
  async function handleUpdateUserProfile(profileImage){
  
    setLoading(true)

    try {
      
     const response =  await updateUserProfile(profileImage)
     setUser(response.data)
      return {success:true}
      
    } catch (error) {
      return {
        success:false,
        message:`${error.message} , something went wrong`
      }
    }
    finally{
       setLoading(false)
    }
  }



  async function  HandlerbioUpdate(data){
    setLoading(true)
    try {
      const response = await bioUpdate(data);
      console.log(response)
      setUser(response.data);
      return {success:true}

    } catch (error) {
      return {
        success:false,
        message:`${error.message}, something went wrong`
      }
    }
    finally{
      setLoading(false)
    }
  }




  return (
    <userContextProvider.Provider value={{loading, handlerGetUserAlllRecipePost , userRecipePosts ,deleteUserRecipeHandler ,   HandlerbioUpdate , singleRecipe , HandlegetSingleRecipe , handleUpdateUserRecipe , handleUpdateUserProfile ,user , GetMeHandler }}>
        {children}
    </userContextProvider.Provider>
  )
}

export default UserContext