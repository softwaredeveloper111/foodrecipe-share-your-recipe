import React, { useEffect } from 'react'
import useRecipe from "../hooks/useRecipe";
import { useParams } from "react-router-dom";
import RecipeDetailsProduct from '../components/RecipeDetailsProduct';
import Loading from "../../shared/Loading";


const RecipeDetails = () => {

   const {loading, singleRecipeData ,getSingleRecipeData} =  useRecipe()
   const params = useParams()
   const id = params.id

   useEffect(()=>{
      getSingleRecipeData(id)
   },[])

   

  return (


    <>

      {loading ? <Loading/> : <RecipeDetailsProduct item={singleRecipeData}/> }

      
     

    </>

         
     


  
  )
}

export default RecipeDetails