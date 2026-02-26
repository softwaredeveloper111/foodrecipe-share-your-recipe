import React from 'react'

const Footer = () => {
  return (
    <div className='footer mt-25 border-t border-zinc-400 px-15 pt-17'>

       <div className='flex justify-between mb-13'>

             <div>
              <h2 className='text-2xl font-semibold text-red-400 custom-font mb-5'>SavorySports</h2>
              <span className='text-sm max-w-90 inline-block text-zinc-800' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, praesentium. Culpa explicabo ab minima id.</span>
             </div>


             <div>
              <h4 className='font-semibold text-lg mb-5'>Discover</h4>
              <div className='flex flex-col gap-2'>
                <span>Trending</span>
                <span>New Recipes</span>
                <span>Categories</span>
                <span>Popular Authors</span>
              </div>
             </div>


             <div >
              <h4 className='font-semibold text-lg mb-5'>Company</h4>
              <div className='flex flex-col gap-2'>
                <span>Trending</span>
                <span>New Recipes</span>
                <span>Categories</span>
                <span>Popular Authors</span>
              </div>
             </div>

             <div>

              <h4 className='font-semibold text-lg mb-5 '>follow us</h4>
              <div className='flex gap-3'>
                <i class="ri-facebook-circle-line text-xl text-zinc-900"></i>
                <i class="ri-instagram-line text-xl text-zinc-900"></i>
                <i class="ri-linkedin-box-fill text-xl text-zinc-900"></i>
              </div>

             </div>

           
       </div>

       <div className='w-full  border-t border-zinc-300 mt-10 '></div>

       <span className=' mt-5 text-sm text-center text-zinc-800 flex justify-center'>©2026 Culinary Canvas. All Right Reserve</span>

    </div>
  )
}

export default Footer