import React from 'react'

const RecentlyAddProduct = () => {
  return (
    <div className='bg-zinc-100 shadow-amber-200 w-150 rounded-lg h-50 p-2 flex gap-3 pr-4'>
        <img className='h-full w-50 object-cover rounded-lg' src="https://i.pinimg.com/736x/53/a3/53/53a353413da7c12f1261cec4256da834.jpg" alt="" />
        <div className='flex flex-col justify-between'>
         
        <div className='flex flex-col gap-1'>
          <div className='flex justify-between items-center'>
           <span className='text-red-400 uppercase font-semibold'>BEVERAGES</span>
           <span className='text-sm text-zinc-600'>2hrs ago</span>
         </div>

         
         <span className='custom-font '>Topical Sunset Cocktail</span>
         <span className='text-zinc-800 text-sm'>A fruti blend of pipeline, mango and grenadine that brings the beatch to you,</span>
       </div>
         

         <div className='flex items-center gap-4'>
          
          <span className=' text-sm text-zinc-700'>
            <i class="ri-time-line text-sm text-zinc-700 inline-block mr-1"></i>
            5min

          </span>
          <span className=' text-sm text-zinc-700'>
            <i class="ri-user-line texts-sm text-zinc-700 inline-block mr-1"></i>
            2 servings
          </span>
         </div>

        </div>
    </div>
  )
}

export default RecentlyAddProduct