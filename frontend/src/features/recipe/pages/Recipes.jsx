import React, { useEffect }  from 'react'
import Sidebar from '../components/Sidebar'
import Recipe from '../components/Recipe'
import useRecipe from "../hooks/useRecipe";
import Loading from "../../shared/Loading";


const Recipes = () => {
  

 const {loading,recipeData,getAllRecipeData} =  useRecipe() ;

useEffect(()=>{
  getAllRecipeData()
},[])



  return (
    <div className='bg-[#0F172A] recipe-page p-10 min-h-screen w-full '>

      <div className='flex gap-15'>
        <Sidebar/>

        <main >
          <h1 className='font-semibld text-3xl custom-font text-white'>Trending Recipes🔥</h1>
          <div className='mt-10 flex justify-between gap-10 flex-wrap'>
              {loading ? <Loading/> : recipeData?.map(item=><Recipe key={item._id} item={item}/>)}
          </div>
        </main>

      </div>

    </div>
  )
}

export default Recipes