import React from 'react'

const RecipeDetails = () => {
  return (

   

    <div>

      <div className='max-w-[60%] m-auto p-10'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-10'>
            <span className='px-3 py-2 bg-red-100 rounded-md uppercase text-orange-600 text-sm font-semibold'>Dinner</span>
            <div className='flex gap-2 items-center'>
            <img className="h-8 w-8 rounded-full object-cover border-2 border-orange-700"  src="https://i.pinimg.com/736x/ea/1e/33/ea1e33a847a8a8eab77f9934a1bc85c1.jpg" alt="" />
            <span className='text-zinc-700 text-sm'>Sourav J. Giri</span>
            </div>
          </div>
          <div className='flex gap-3 items-center'>
            <span className='px-3 py-2 bg-[#F87171] rounded-md text-white text-sm'> <i class="ri-bookmark-line"></i> Save</span>
            <span className='p-2 bg-gray-900 text-white rounded-md'><i class="ri-share-fill"></i></span>
          </div>
        </div>
         
         <h1 className='text-4xl text-gray-900 font-semibold custom-font mt-10'>Spices Garlic Ginger and Orange Pron fry.</h1>

          <img className='w-full h-150 mt-10 rounded-xl object-cover' src="https://i.pinimg.com/1200x/45/00/70/4500702704319e34ca462f278f249a69.jpg" alt="" />

         <div className='mt-10 flex gap-15 justify-between'>
          
            
        <div className=' ingredients w-80 h-fit rounded-lg bg-[#111827] p-5'>
               <div className='flex items-center gap-2'><i class="ri-bowl-line text-2xl text-orange-400"></i> <span className='text-white text-xl custom-font font-semibold'>Ingredients</span></div>

               <div className='mt-3 flex justify-between items-center'>
                  <span className='text-zinc-500 text-sm'>Servings</span>
                  <span className='text-white font-semibold'>2</span>
               </div>

               <hr className='my-3'/>
              
              <div className='flex flex-col gap-3'>


              <div className='flex gap-2'>
              <span className='inline-block h-5 w-5 rounded-full bg-gray-600 shrink-0'></span>
              <span className='inline-block text-sm text-zinc-200'>
                1lb large sprim, reerinded and dervied , the spisdf dsfd
              </span>
              </div>
               
              <div className='flex gap-2'>
              <span className='inline-block h-5 w-5 rounded-full bg-gray-600 shrink-0'></span>
              <span className='inline-block text-sm text-zinc-200'>
                1lb large sprim, reerinded and dervied , the spisdf dsfd
              </span>
              </div>
               
              <div className='flex gap-2'>
              <span className='inline-block h-5 w-5 rounded-full bg-gray-600 shrink-0'></span>
              <span className='inline-block text-sm text-zinc-200'>
                1lb large sprim, reerinded and dervied , the spisdf dsfd
              </span>
              </div>
               
              </div>

        </div>

        

         <div className='instruction grow bg-zinc-200 p-5 rounded-lg'>

            <div className='title flex items-center gap-2 mb-4'><i class="ri-bowl-line text-2xl text-orange-400"></i> <span className='text-black text-xl custom-font font-semibold'>Instruction</span></div>

             <div className='flex flex-col gap-5'>

                 <div className='flex gap-2'>
                   <span className='bg-gray-900  shrink-0 w-7 h-7 flex justify-center items-center text-white rounded-full'>1.</span>
                    <span className='text-zinc-800 custom-font'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis sed qui facere repellendus eos.</span>
                  </div>


                  <div className='flex gap-2'>
                     <span className='bg-gray-900  shrink-0 w-7 h-7 flex justify-center items-center text-white rounded-full'>1.</span>
                    <span className='text-zinc-800 custom-font'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis sed qui facere repellendus eos.</span>
                 </div>


                  <div className='flex gap-2'>
                     <span className='bg-gray-900  shrink-0 w-7 h-7 flex justify-center items-center text-white rounded-full'>1.</span>
                     <span className='text-zinc-800 custom-font'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis sed qui facere repellendus eos.</span>
                 </div>



                  <div className='flex gap-2'>
                      <span className='bg-gray-900  shrink-0 w-7 h-7 flex justify-center items-center text-white rounded-full'>1.</span>
                      <span className='text-zinc-800 custom-font'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis sed qui facere repellendus eos.</span>
                 </div>


                  <div className='flex gap-2'>
                       <span className='bg-gray-900  shrink-0 w-7 h-7 flex justify-center items-center text-white rounded-full'>1.</span>
                      <span className='text-zinc-800 custom-font'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis sed qui facere repellendus eos.</span>
                 </div>

             
             </div>


          <div>

          </div>

         </div>



         </div>


         <div className='commnet-container mt-15'>
            <div className="comment-input w-full py-5 bg-gray-900 rounded-xl px-10 flex flex-col gap-4">
              <input type="text" placeholder='share your thought' className='px-5 py-3 w-full h-20 bg-gray-700 outline-none border-none text-white rounded-md'/>
              <button className='w-fit self-end px-2 py-2 rounded-md bg-[#F87171] text-white text-sm'>Post Comment</button>
            </div>

           <div className='user-comment flex flex-col gap-7 mt-10'>

            <div className='flex flex-col gap-1'>
              <div className='flex gap-2 items-center'>
                <img className='h-10 w-10 rounded-full border-2 border-[hotpink]' src="https://i.pinimg.com/736x/b8/39/6a/b8396ae14a3b9cb506668dabdd462cfd.jpg" alt="" />
                <span className='text-zinc-700 text-sm'>Robert J koro.</span>|
                <span className='text-zinc-700 text-sm'>2 days ago.</span>
              </div>
              <div>very good recipe , love it</div>
            </div>

             <div className='flex flex-col gap-1'>
              <div className='flex gap-2 items-center'>
                <img className='h-10 w-10 rounded-full border-2 border-[hotpink]' src="https://i.pinimg.com/736x/b8/39/6a/b8396ae14a3b9cb506668dabdd462cfd.jpg" alt="" />
                <span className='text-zinc-700 text-sm'>Robert J koro.</span>|
                <span className='text-zinc-700 text-sm'>2 days ago.</span>
              </div>
              <div>very good recipe , love it</div>
            </div>


             <div className='flex flex-col gap-1'>
              <div className='flex gap-2 items-center'>
                <img className='h-10 w-10 rounded-full border-2 border-[hotpink]' src="https://i.pinimg.com/736x/b8/39/6a/b8396ae14a3b9cb506668dabdd462cfd.jpg" alt="" />
                <span className='text-zinc-700 text-sm'>Robert J koro.</span>|
                <span className='text-zinc-700 text-sm'>2 days ago.</span>
              </div>
              <div>very good recipe , love it</div>
            </div>



           </div>

         </div>


      </div>

      
        <div className='footer w-full h-20 flex justify-center items-center bg-[#111827] text-white'>
             <span className='text-sm text-zinc-600'>©2026 copyright all right reserve. from culinary canvas.</span>
        </div>
   

    </div>

         
     


  
  )
}

export default RecipeDetails