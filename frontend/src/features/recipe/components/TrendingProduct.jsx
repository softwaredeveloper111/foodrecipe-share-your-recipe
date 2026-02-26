import React from 'react'


const TrendingProduct = ({item}) => {

  const {image,category,name,description,authorImg,authorName} = item


  return (
    <div className='w-100 h-125 rounded-lg shadow-2xl bg-zinc-100 overflow-hidden'>
         <img className='h-70 w-full object-cover' src={image} alt="" />
         <div className='flex flex-col gap-3 px-5 py-4'>
            <span className='text-red-400 uppercase'>{category}</span>
            <span className='custom-font'>{name}</span>
            <span className='text-sm max-w-[85%] text-zinc-800'>{description}</span>
            <hr />
            <div className='flex justify-between items-center'>
              <div className='flex gap-3 items-center'>
                <img className='h-10 w-10 rounded-full border-3 border-orange-600' src={authorImg} alt="" />
                <span>{authorName}</span>
              </div>
              <span className='cursor-pointer'><i class="ri-bookmark-line text-lg"></i></span>
            </div>
         </div>
    </div>
  )
}

export default TrendingProduct