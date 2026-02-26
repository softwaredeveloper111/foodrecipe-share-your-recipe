import React, { useState }  from 'react'
import { useForm } from "react-hook-form";
import { nanoid } from 'nanoid'

import { toast } from 'react-toastify';



const CreateRecipe = () => {

 

  const [ingredientsDataList, setingredientsDataList] = useState([])
  const [singleIngrident,setSingleIngrident] = useState("")
  const [ingridentsError ,setingridentsError] = useState(false)
  
  const {register,handleSubmit,reset,formState:{errors}} = useForm();

  

  function submitHandler(data){
    
  data.id = nanoid();
 
    
    setingredientsDataList([])
    setingridentsError(false)
    toast.success("recipe created sucessfully!")
    reset()

  }



  function ingridentsAddHandler(){
     
    if(singleIngrident.trim().length>=3){

    setingredientsDataList((prev)=>[...prev,singleIngrident])
    setSingleIngrident("")

    }
 
  }



  function deleteIngredientsHandler(indx){
    setingredientsDataList((prev)=>prev.filter((item,index)=>index!==indx))
  }




  return (
    <div className='create-recipes p-10 bg-[#0F162A] text-white'>


       <form className='flex flex-col gap-5  w-100 ' onSubmit={handleSubmit(submitHandler)}>
         

         <div className='flex flex-col gap-1'>

         <input {...register("name",{
          required:{value:true,message:"recipe-title should be required"},
          maxLength:{value:100,message:"maximum 100 character exceed"},
          minLength:{value:5,message:"minimum 5 character length required"},
         })} 
         aria-invalid={!!errors.name}
         aria-describedby='recipe-title error'
         className='border-b border-white outline-0 py-3 px-2' 
         type="text"
         placeholder='recipes title goes here' />
         
         {errors.name &&  <small className='text-sm text-red-600'>{errors.name.message}</small>}
   
         </div>



         <div className='flex flex-col gap-1'>
         <input {...register("description",{
          required:{value:true,message:"recipe-description should be required"},
          minLength:{value:15,message:"minimum 15 character length needed"},
          maxLength:{value:200,message:"maximum 200 character length needed"}
         })}
           aria-invalid={!!errors.description}
         aria-describedby='recipe-description error'
          className='border-b border-white outline-0 py-3 px-2' 
          type="text" 
          placeholder='recipes short description goes here' />
          {errors.description &&  <small className='text-sm text-red-600'>{errors.description.message}</small>}
         </div>
         

         <div className='flex flex-col gap-1'>
         <input {...register("image",{
          required:{value:true,message:"image url should be required"},
         })} 
          aria-invalid={!!errors.image}
         aria-describedby='recipe-image error'
         className='border-b border-white outline-0 py-3 px-2' 
         type="url" 
         placeholder='enter recipes image url' />
          {errors.image &&  <small className='text-sm text-red-600'>{errors.image.message}</small>}
         </div>
      


        <div className='ingrients-container flex flex-col  gap-3'>

           <div className='ingrients-form-input-btn flex items-center gap-5'>

          <input  onInput={(e)=>setSingleIngrident(e.target.value)}  value={singleIngrident} className='grow border-b border-white outline-0 py-3 px-2' type="text" placeholder='recipes ingredients gos here.' />

          <button onClick={ingridentsAddHandler} type='button' className='text-white bg-gray-900 text-sm rounded-sm cursor-pointer font-semibold px-3 py-2'>add</button>
          
           </div> 
           {ingridentsError && <small className='text-sm text-red-700'>please provide minimum 1 ingridents</small>}

           <div className='show-ingredients-list mt-1 flex flex-wrap gap-3'>
            {ingredientsDataList.map((item,index)=> (

               <div key={index} className='px-3 py-2 rounded-md bg-white text-gray-900 font-normal text-sm flex gap-2 max-w-50'>{item} <i className="ri-close-line cursor-pointer font-normal" onClick={()=>deleteIngredientsHandler(index)}></i> </div>

            ) )}
          </div> 

        </div>
        


        
        <div className='flex flex-col gap-1'>
         <textarea rows="8"
          {...register("instruction",{
            required:{value:true,message:"recipe-desciption should be required"},
            minLength:{value:10 , message:"minimum 10 character length should be required"},
             maxLength:{value:1000 , message:"maximum 1000 character length exceed"}
          })} 
         aria-invalid={!!errors.instruction}
         aria-describedby='recipe-instruction error'
          placeholder=' recipes instruction goes here' 
          className='outline-none mt-5 p-3 rounded-md  border resize-none overflow-y-auto  overflow-x-hidden'>
        </textarea> 
         {errors.instruction &&  <small className='text-sm text-red-600'>{errors.instruction.message}</small>}
        </div>
  




         <div className='dropdown-menu flex gap-4 mt-8 items-center'>
          <label htmlFor="category">Category :</label>
          <select id='category' className='outline-0  bg-gray-900 grow p-2 rounded-md' {...register("category")}>
            <option  value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
            <option value="dessert">Dessert</option>
            <option value="side dish">Side Dish</option>
            <option value="appetizer">Appetizer</option>
            <option value="breakfast">Breakfast</option>
            <option value="beverage">Beverage</option>
            <option value="snack">Snacks</option>
          </select>
        </div> 


        <button type='submit' className='px-3 py-2 bg-gray-400 rounded-md cursor-pointer w-fit mt-15'>create recipe</button>

       </form>
    </div>
  )
}

export default CreateRecipe