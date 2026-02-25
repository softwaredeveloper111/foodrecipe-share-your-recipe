import React from 'react'
import img1 from "../../../../public/assets/home-img-1.jpg"
import PopurCategory from '../components/PopurCategory'
import Trending from '../components/Trending'


const Home = () => {
  return (
    <div className='home px-10 py-10'>
      
      <div className='header-container h-160 w-[70vw] rounded-xl overflow-hidden m-auto block relative'>

        <img className='h-full w-full object-cover' src={img1} alt="" />

        <div className='h-full w-full absolute top-0 left-0 z-50 bg-[rgba(255, 255, 255, 0.3)] backdrop-blur-[10px] p-15 flex flex-col gap-5'>
           <span className='w-fit text-red-300 rounded-full px-4 py-2 bg-[#8f6f6f65] backdrop-blur-[10px] font-semibold text-sm'>RECIPE OF THE DAY</span>
           <h1 className='custom-font text-white font-semibold text-[4.2rem] leading-18 '>

            Summer  <br />
            Strabery <br />
            Balasic Salad 

           </h1>

           <span className='max-w-95 text-zinc-200 text-sm leading-6'>
            A refreshing mix of fresh strawberries, toasted pecans, feta cheese, and mixed greens, drizzled with a homemade balsamic glaze. Perfect for warm afternoons.
           </span>

           <div className='flex gap-3 items-center'>
            <span className='px-4 py-2 rounded-full bg-[#FF6B6B] text-white font-normal text-[14px] cursor-pointer'>View Recipe</span>
            <div className='px-4 py-2 bg-[#1a18184f] rounded-full backdrop-blur-[10px]  '>  <span><i class="ri-time-line"></i> 15 min</span>  | <span> <i class="ri-fire-fill"></i> 320 calc </span></div>
           </div>
        </div>


          
      </div>

      <PopurCategory/>
      <Trending/>

    </div>
  )
}

export default Home