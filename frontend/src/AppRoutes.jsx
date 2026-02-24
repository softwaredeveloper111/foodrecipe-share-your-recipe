import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './features/auth/pages/Login'
import Register from "./features/auth/pages/Register";

const AppRoutes = () => {
  return (
    <>
 
    <Routes>
      <Route path='/login'  element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/'  element={<h1>Home page</h1>}/>
    </Routes>

    </>
  )
}

export default AppRoutes