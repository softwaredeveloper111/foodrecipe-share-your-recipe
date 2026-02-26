import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar w-70 '>
        <div className='px-3 py-2 rounded-md flex gap-2 items-center bg-gray-800 text-white'><i class="ri-search-line"></i> <input className='outline-none border-none bg-transparent h-full w-full text-white' type="search" placeholder='Search Recipes' /></div>

        <div className='flex flex-col gap-3'>
          <h4 className='font-semibold text-white custom-font text-lg mt-6'>Categories</h4>
          <div className='flex items-center gap-2'><input  type="checkbox" name="" id="breakfast" /> <label className='cursor-pointer text-zinc-500' htmlFor="breakfast">Breakfast & Bunch</label></div>
          <div className='flex items-center gap-2'><input type="checkbox" name="" id="maindish" /> <label className='cursor-pointer text-zinc-500' htmlFor="maindish">Main Dishes</label></div>
          <div className='flex items-center gap-2'><input type="checkbox" name="" id="salad" /> <label className='text-zinc-500' htmlFor="salad">Healthy Salad</label></div>
          <div className='flex items-center gap-2'><input type="checkbox" name="" id="desserts" /> <label className='cursor-pointer text-zinc-500' htmlFor="desserts">Desserts</label></div>
          <div className='flex items-center gap-2'><input type="checkbox" name="" id="vegan" /> <label className='cursor-pointer text-zinc-500' htmlFor="vegan">Vegan & Vegetarian</label></div>
        </div>
    </div>
  )
}

export default Sidebar