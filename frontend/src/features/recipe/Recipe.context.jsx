import React, { createContext, useState } from 'react'
import { getAllRecipe , getSingleRecipe, createRecipe } from "./services/recipe.api";


export const  recipeContextProvider = createContext();


const RecipeContext = ({children}) => {
 

  const [loading,setLoading] = useState(false)
  const [recipeData,setRecipeData] = useState(null)
  const [singleRecipeData,setsingleRecipeData] = useState(null)

  


  async function getAllRecipeData(){
    setLoading(true)
     try {

        const response = await  getAllRecipe();
         setRecipeData(response.data);
        return {success:true}

     } catch (error) {
        return   {
           success:false,
           message:`${error.message} , data cannot be fetch ❌ `, 
        }
     }
     finally{
       setLoading(false)
     } 
  }



  async function getSingleRecipeData(id){
    
    setLoading(true)

     try {
       
       const response =  await  getSingleRecipe(id)
       setsingleRecipeData(response.data)
       return {success:true}

     } catch (error) {
       return {
        success:false,
        message:`${error.message}, data could not fetch ❌`
       }
     }
     finally{
      setLoading(false)
     }
  }


  async function handleCreateRecipe(data){
    setLoading(true)
    try {

      await createRecipe(data)
      return {success:true}
      
    } catch (error) {
      return {
        success:false,
        message:`${error.message} ,data cound not send`
      }
    }
    finally{
       setLoading(false)
    }
  }




  return (
    <recipeContextProvider.Provider value={{loading,recipeData,getAllRecipeData, singleRecipeData ,getSingleRecipeData , handleCreateRecipe}}>

     {children}

    </recipeContextProvider.Provider>
  )
}

export default RecipeContext