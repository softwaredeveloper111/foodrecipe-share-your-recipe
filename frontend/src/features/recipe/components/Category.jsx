import React from 'react'



const Category = ({item}) => {
 
  const {name,img}  =item

  return (
    <div className='w-60 h-60 rounded-lg overflow-hidden relative'>

      <img className='h-full w-full object-cover' src={img} alt="" />

      <div className=' px-4 custom-font absolute w-full bottom-0 left-0 py-4 text-xl bg-[#cfc9c95e] backdrop-blur-[3px] text-white font-semibold'>{name}</div>

    </div>
  )
}

export default Category