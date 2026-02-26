import React from 'react'

const BusinessNumber = ({number,icon}) => {
  return (
    <div className='rounded-lg w-100 h-fit py-10 bg-[#2D3748] p-4 flex flex-col justify-center items-center gap-6'>
         <span className='h-12 w-12 bg-[#e7a36b5e] flex justify-center items-center rounded-full '>{icon}</span>
         <span className='text-4xl custom-font text-white'>{number}k+</span>
         <span className='text-sm text-zinc-400 uppercase font-semibold'>Recipe shared</span>
    </div>
  )
}

export default BusinessNumber