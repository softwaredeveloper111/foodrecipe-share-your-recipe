import React, { useContext } from 'react'
import Recipe from '../components/Recipe'
import { recipeContext } from '../context/RecipeContext'

const Recipes = () => {

  
 const {recipeData} =  useContext(recipeContext)


  return (
    <div className=''>
      <h2 className='text-xl font-semibold'>Hot recipes are now in trending 🔥</h2>
      <div className='mt-5 flex flex-wrap gap-15'>
        { recipeData.length>0 ?  recipeData.map(item=><Recipe key={item.id} item={item}/>) : <h3>No recipe create yet.</h3>}
      </div>
    </div>
  )
}

export default Recipes