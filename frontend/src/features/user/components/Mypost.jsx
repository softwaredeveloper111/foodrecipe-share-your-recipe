import React, { useEffect } from 'react'
import useUser from "../hooks/useUser";
import Loading from "../../shared/Loading";
import { toast } from "react-toastify";
import { useNavigate,Link } from "react-router-dom";


const Mypost = () => {

  const navigate  = useNavigate()
  const {loading, handlerGetUserAlllRecipePost , userRecipePosts , deleteUserRecipeHandler} = useUser()

  useEffect(()=>{

    handlerGetUserAlllRecipePost()

  },[])

  async function clickEventHandler(id){
    // console.log(id)
await deleteUserRecipeHandler(id)
    toast.success("recipe delete scuessfully")
  }

  function naviteToEdit(id){
     navigate(`/me/posts/edit/${id}`)
  }


  return (
    <div className='px-10 py-15 flex flex-col gap-10'>




    {loading ? <Loading/> : userRecipePosts?.map((item,index)=>(

        <div key={index} className='bg-zinc-100 shadow-amber-200 w-150 rounded-lg h-50 p-2 flex gap-3 pr-4'>
        <img className='h-full w-50 object-cover rounded-lg' src={item.image} alt="" />
        <div className='flex flex-col justify-between'>
         
        <div className='flex flex-col gap-1'>
          <div className='flex gap-2 items-center'>
            {item.mealType.map((i,index)=> <span key={index} className='text-[10px] p-2 rounded-md bg-gray-900 text-red-400 uppercase font-semibold'>{i}</span>)}
    
   
         </div>

         
         <Link  to={`/recipe/details/${item._id}`} className='custom-font hover:text-orange-400 duration-400'>{item.name}</Link>
         <span className='text-zinc-800 text-sm'>{item.description}</span>
       </div>
         
      <div className='flex items-center justify-between  w-90'>
         <div className='flex items-center gap-4'>
          
          <span className=' text-sm text-zinc-700'>
            <i class="ri-time-line text-sm text-zinc-700 inline-block mr-1"></i>
            {item.cookTimeMinutes}min

          </span>
          <span className=' text-sm text-zinc-700'>
            <i class="ri-user-line texts-sm text-zinc-700 inline-block mr-1"></i>
            {item.servings} servings
          </span>
         </div>

        <div className='flex items-center gap-3'>
          <button onClick={()=>naviteToEdit(item._id)} className='px-2 py-1  bg-sky-400 rounded-lg text-white cursor-pointer'>edit</button>
         <button onClick={()=>clickEventHandler(item._id)} className='px-2 py-1 bg-orange-400 rounded-lg  text-white cursor-pointer'>delete</button>
        </div>

        </div>
        </div>
        </div>



    ))}


    </div>
  )
}

export default Mypost