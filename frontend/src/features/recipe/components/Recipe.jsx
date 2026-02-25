import React from 'react'

const Recipe = ({item}) => {
 
  
  // console.log(item)


  return (
    <div className='h-70 recipe w-80 rounded-md overflow-hidden shadow-lg hover:scale-105 duration-500'>
      <img className='h-[47%] w-full object-cover' src={item.image} alt="" />
      <div className='mt-3 p-2'>
         <h3 className='text-xl font-normal'>{item.name}</h3>
         <div className='text-sm mt-1'>
           {item.description.slice(0,100)}    ...<small className='text-blue-500 text-sm'>more</small>
         </div>
      </div>
    </div>
  )
}

export default Recipe