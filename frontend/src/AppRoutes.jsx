import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './features/auth/pages/Login'
import Register from "./features/auth/pages/Register";
import Home from './features/recipe/pages/Home';
import About from './features/recipe/pages/About';
import RecipeDetails from './features/recipe/pages/RecipeDetails';
import CreateRecipe from './features/recipe/pages/CreateRecipe';
import Recipes from './features/recipe/pages/Recipes';
import NotFound404 from './features/shared/NotFound404';
import ProtectedRouter from "../src/utils/ProtectedRoute";
import Profile from './features/user/pages/Profile';
import ProfileDetails from './features/user/components/ProfileDetails';
import Mypost from './features/user/components/Mypost';
import Editpost from './features/user/components/Editpost';




const AppRoutes = () => {
  return (
    <>
 
    <Routes>
      <Route path='/login'  element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>

      <Route path='/'  element={<ProtectedRouter><Home/></ProtectedRouter>}/>

      <Route path='/about' element={<ProtectedRouter><About/></ProtectedRouter>}/>
      <Route path='/recipes' element={<ProtectedRouter><Recipes/></ProtectedRouter>}/>
      <Route path='/recipe/details/:id' element={<ProtectedRouter><RecipeDetails/></ProtectedRouter>}/>
      <Route path='/recipe/create'  element={<ProtectedRouter><CreateRecipe/></ProtectedRouter>}   />
      <Route path='/me'  element={<ProtectedRouter> <Profile/> </ProtectedRouter>} >
       
      <Route path='/me/profile'  element={<ProtectedRouter> <ProfileDetails/> </ProtectedRouter>}   />

      <Route path='/me/posts'  element={<ProtectedRouter> <Mypost/> </ProtectedRouter>}   />
      <Route path='/me/posts/edit/:id'  element={<ProtectedRouter> <Editpost/> </ProtectedRouter>}   />


      </Route>
   







      <Route path='*'  element={<NotFound404/>}   />

    </Routes>

    </>
  )
}

export default AppRoutes