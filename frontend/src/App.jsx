import React from 'react'
import AppRoutes from "./AppRoutes";
import { useLocation } from "react-router-dom";
import Navbar from "./features/recipe/components/Navbar";


const App = () => {


  const location = useLocation();


  return (
    <div>
     
     {((location.pathname !==  "/login") && (location.pathname !==  "/register"))  && <Navbar/>}

    
    
    <AppRoutes/> 
    </div>
  )
}

export default App