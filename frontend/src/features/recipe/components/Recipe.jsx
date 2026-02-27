import React from 'react'
import { Link } from "react-router-dom";


const Recipe = ({item}) => {
 

  const {author , commentCount, cookTimeMinutes,description , image,createdAt , ingredients, instructions , likeCount, mealType
,name , prepTimeMinutes,  servings , updatedAt ,_id  } = item

const {bio,email, profileImage,username} = author;




  return (
    <div className='h-105 recipe w-80 rounded-lg overflow-hidden shadow-lg hover:scale-105 duration-500 text-white bg-[#1E293B] relative'>
      <img className='h-[47%] w-full object-cover' src={image} alt="" />
      <div className='mt-3 p-4'>
         
        <div className='flex justify-between items-center '>
          <span className='text-zinc-400 text-sm'><i class="ri-time-fill"></i> {cookTimeMinutes}min</span>
        
        </div>

        <Link to={`/recipe/details/${_id}`} className='inline-block mt-3 text-2xl custom-font cursor-pointer hover:text-orange-300 transition-all duration-300'>{name.length >50 ? name.slice(0, 30) + "..." : name}
         </Link>

        {/* <div className='rule border border-t border-gray-900 my-5'></div> */}

        <div className='flex justify-between items-center w-full absolute left-0 bottom-0 px-4   border-t-2 border-gray-900 py-5 '>


         <div className='flex items-center gap-2'>
           <img className='h-8 w-8 rounded-full border border-amber-500 object-cover' src={profileImage} alt="" />
          <span className='text-zinc-300'>{username}</span>
         </div>

         <div className='flex items-center gap-1'>
          <span><i class="ri-heart-line text-lg"></i></span>
          <span className='text-zinc-300'>{likeCount}</span>
         </div>

         <div className='flex items-center gap-1'>
          <span><i class="ri-chat-1-line text-lg"></i></span>
          <span className='text-zinc-300'>{commentCount}</span>
         </div>

         <span ><i class="ri-share-line text-lg"></i></span>
          
        </div>
      </div>
    </div>
  )
}

export default Recipe