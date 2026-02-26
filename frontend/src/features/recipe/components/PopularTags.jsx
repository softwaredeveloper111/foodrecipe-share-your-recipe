import React from 'react'

const PopularTags = () => {
  return (
    <div className='w-100 bg-zinc-100 shadow-2xl rounded-lg p-4 h-fit'>
      <h4 className='font-semibold  custom-font'>Popular Tags</h4>
      <div className='flex flex-wrap gap-4 mt-5'>
        <span className='bg-zinc-200 rounded-full px-3 py-1.4 text-sm'>#healthy</span>
        <span className='bg-zinc-200 rounded-full px-3 py-1.4 text-sm'>#desserts</span>
        <span className='bg-zinc-200 rounded-full px-3 py-1.4 text-sm'>#quickmean</span>
        <span className='bg-zinc-200 rounded-full px-3 py-1.4 text-sm'>#vegan</span>
        <span className='bg-zinc-200 rounded-full px-3 py-1.4 text-sm'>#gultanfree</span>
        <span className='bg-zinc-200 rounded-full px-3 py-1.4 text-sm'>#lunch</span>
  
      </div>
    </div>
  )
}

export default PopularTags