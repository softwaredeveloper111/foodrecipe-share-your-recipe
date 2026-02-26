import React from 'react'

const NewsLater = () => {
  return (
    <div className='newslater rounded-lg bg-[#F7EAED] w-100 h-fit py-7 gap-5 flex flex-col justify-center items-center  px-10'>
         <span className='rounded-full bg-[#cf9ca8] w-10 h-10 flex justify-center items-center'><i class="ri-mail-fill text-[#FF6B6B]"></i></span>
         <h3 className='text-xl font-semibold custom-font'>Join Our Newslater</h3>
         <span className='text-center text-sm text-zinc-600 max-w-[80%]'>Get the latest Recipes and cooking tips delivered straight to your inbox</span>
         <input type="email" placeholder='Your email address' className='rounded-md w-full px-2 py-2 bg-white outline-none border border-zinc-800' />
         <button className='w-full bg-[#FF6B6B] px-3 py-2 rounded-lg text-white font-semibold'>Subscribe</button>
    
    </div>
  )
}

export default NewsLater