import React , {useContext} from 'react'
import { recipeContextProvider } from "../Recipe.context";




const useRecipe = () => {
  

  const context = useContext(recipeContextProvider)

  return context
  
}

export default useRecipe