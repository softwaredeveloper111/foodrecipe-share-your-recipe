import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './features/auth/pages/Login'
import Register from "./features/auth/pages/Register";
import Home from './features/recipe/pages/Home';
import About from './features/recipe/pages/About';
import RecipeDetails from './features/recipe/pages/RecipeDetails';
import CreateRecipe from './features/recipe/pages/CreateRecipe';
import Recipes from './features/recipe/pages/Recipes';

const AppRoutes = () => {
  return (
    <>
 
    <Routes>
      <Route path='/login'  element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/'  element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/recipes' element={<Recipes/>}/>
      <Route path='/recipe/details' element={<RecipeDetails/>}/>
      <Route path='/recipe/create'  element={<CreateRecipe/>}   />
    </Routes>

    </>
  )
}

export default AppRoutes