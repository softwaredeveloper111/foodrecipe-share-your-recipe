import React from 'react'

const Recipe = () => {
 



  return (
    <div className='h-105 recipe w-80 rounded-lg overflow-hidden shadow-lg hover:scale-105 duration-500 text-white bg-[#1E293B]'>
      <img className='h-[47%] w-full object-cover' src="https://i.pinimg.com/1200x/44/7f/e7/447fe7a8e44ed02898ee4892c6547840.jpg" alt="" />
      <div className='mt-3 p-4'>
         
        <div className='flex justify-between items-center '>
          <span className='text-zinc-400 text-sm'><i class="ri-time-fill"></i> 25min</span>
          <span className='text-zinc-400 text-sm'><i class="ri-slice-fill"></i> Easy</span>
        </div>

        <h1 className='mt-3 text-2xl custom-font'>Creamy Avacado & Egg breakfast bowl</h1>
        <div className='rule border border-t border-gray-900 my-5'></div>

        <div className='flex justify-between items-center'>


         <div className='flex items-center gap-2'>
           <img className='h-8 w-8 rounded-full border border-amber-500 object-cover' src="https://i.pinimg.com/736x/b9/df/46/b9df464a36c2e84d105d201924ff8575.jpg" alt="" />
          <span className='text-zinc-300'>sarah j.</span>
         </div>

         <div className='flex items-center gap-1'>
          <span><i class="ri-heart-line text-lg"></i></span>
          <span className='text-zinc-300'>1.2K</span>
         </div>

         <div className='flex items-center gap-1'>
          <span><i class="ri-chat-1-line text-lg"></i></span>
          <span className='text-zinc-300'>12k</span>
         </div>

         <span ><i class="ri-share-line text-lg"></i></span>
          
        </div>
      </div>
    </div>
  )
}

export default Recipe