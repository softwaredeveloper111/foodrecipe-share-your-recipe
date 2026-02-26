import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-10 py-5 bg-[#0F162A]'>

     <h3 className='text-[#FF6B6B] text-2xl font-semibold'>Clunary Canvas</h3>

     <div className='flex items-center gap-15'>
           <NavLink
       to="/" 
       className={
         (e)=>{
         return  e.isActive? "text-lg font-semibold cursor-pointer text-[#FF6B6B]":" text-lg cursor-pointer font-semibold text-gray-400"
         }
      }>
        Home
      </NavLink>

      <NavLink
       to="/recipes" 
       className={
         (e)=>{
         return  e.isActive? " text-lg cursor-pointer text-[#FF6B6B] font-semibold":" text-lg cursor-pointer font-semibold text-gray-400"
         }
      }>
        Recipes
      </NavLink>

      <NavLink
       to="/about" 
       className={
         (e)=>{
         return  e.isActive? " text-lg cursor-pointer text-[#FF6B6B] font-semibold":" text-lg cursor-pointer font-semibold text-gray-400"
         }
      }>
        About
      </NavLink>


      <NavLink
       to="/recipe/create" 
       className="text-base cursor-pointer  px-4 py-2 text-white bg-[#FF6B6B] rounded-full font-semibold"
        >
        Create Recipes
      </NavLink>


     </div>



    </div>
  )
}

export default Navbar