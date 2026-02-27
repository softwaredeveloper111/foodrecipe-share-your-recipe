import React from 'react'
import BusinessNumber from '../components/BusinessNumber'
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className='about-page w-full bg-[#1A202C] px-10 py-10'>
      <div className='flex flex-col gap-3 items-center justify-center'>
      <div className='w-17 bg-orange-400 h-0.5 m-auto'></div>
      <h1 className='custom-font text-4xl font-semibold text-white text-center my-6'>Share the <span className='text-orange-400'>Soul</span> of <br /> Culinary Passion</h1>
      <span className='text-zinc-400 text-sm max-w-110 block  text-center '>
        Recipes are more than instructions—they’re stories and a universal language of love. Our mission is to create a space where food enthusiasts can connect, create, and inspire, one dish at a time.
      </span>
      
      </div>

      <div className='businessNumber mt-20 flex justify-center items-center gap-20'>
       <BusinessNumber number={12} icon = {<i class="ri-restaurant-fill text-xl text-[#FF6B6B]"></i>} />
       <BusinessNumber number={850} icon = {<i class="ri-heart-fill text-xl text-[#FF6B6B]"></i>} />
       <BusinessNumber number={45} icon = {<i class="ri-group-fill text-xl text-[#FF6B6B]"></i>} />
      </div>

      <div className='top-chef w-[74%] bg-[#313748] rounded-lg mt-20 px-20 py-10 m-auto flex flex-col items-center'>
          
          <h1 className='text-3xl custom-font text-white'>Meet Our Top Chefs</h1>
          <span className='text-sm text-zinc-400 mt-3'>The Passionate creator driving the flavors of our community</span>

          <div className='mt-12 flex justify-between w-full'>

              <div className='flex flex-col gap-1 items-center'>
                <img className='h-25 w-25 rounded-full object-cover border border-zinc-900 shadow-md shadow-amber-700' src="https://ik.imagekit.io/a490stdk4/food-recipe/chef/c4.jpg" alt="" />
                <span className='text-white mt-3'>Semi Geog. Kebolt.</span>
                <span className='text-orange-500 text-sm'>Italian cusine Expert</span>
                <span className='max-w-45 text-sm text-zinc-400 text-center'>"Food is the ingrident that bind us together"</span>
              </div>

                <div className='flex flex-col gap-1 items-center'>
                <img className='h-25 w-25 rounded-full object-cover border border-zinc-900 shadow-md shadow-amber-700' src="https://ik.imagekit.io/a490stdk4/food-recipe/chef/c2.jpg" alt="" />
                <span className='text-white mt-3'>De made Morgan</span>
                <span className='text-orange-500 text-sm'>chinese cusine Expert</span>
                <span className='max-w-45 text-sm text-zinc-400 text-center'>"Food is the ingrident that bind us together"</span>
               </div>


                 <div className='flex flex-col gap-1 items-center'>
                <img className='h-25 w-25 rounded-full object-cover border border-zinc-900 shadow-md shadow-amber-700' src="https://ik.imagekit.io/a490stdk4/food-recipe/chef/c3.jpg" alt="" />
                <span className='text-white mt-3'>Mantu Mohon Das.</span>
                <span className='text-orange-500 text-sm'>Indian cusine Expert</span>
                <span className='max-w-45 text-sm text-zinc-400 text-center'>"Food is the ingrident that bind us together"</span>
                </div>



                <div className='flex flex-col gap-1 items-center'>
                <img className='h-25 w-25 rounded-full object-cover border border-zinc-900 shadow-md shadow-amber-700' src="https://ik.imagekit.io/a490stdk4/food-recipe/chef/c1.jpg" alt="" />
                <span className='text-white mt-3'>Margo Roobie G.</span>
                <span className='text-orange-500 text-sm'>Thai cusine Expert</span>
                <span className='max-w-45 text-sm text-zinc-400 text-center'>"Food is the ingrident that bind us together"</span>
               </div>
          </div>

      </div>

      <div className='mt-20'>
      <h1 className='text-3xl text-white font-semibold text-center custom-font'>Ready to share your culinary masterpiece</h1>
      <div className='m-auto text-center mt-7 flex gap-4 justify-center'>
        <Link target='_blank' to="https://www.linkedin.com/in/sourav-giri-0a148820a/" className='px-4 py-2.5 rounded-md bg-[#FF6B6B] text-white text-sm font-smeibold'>Join the community</Link>
        <Link to="/recipes" className='px-4 py-2 rounded-md bg-transparent border border-zinc-500 text-white font-semibld'>Browse Recipe</Link>
      </div>
      </div>

      <span><span className=' mt-35 text-sm text-center text-zinc-400 flex justify-center'>©2026 Culinary Canvas. All Right Reserve</span></span>

    </div>
  )
}

export default About


{/*  */}