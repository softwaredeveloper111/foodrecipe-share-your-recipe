import React from 'react'
import TrendingProduct from './TrendingProduct'

const Trending = () => {
  return (
    <div className='mt-15'>
           <h2 className='custom-font text-3xl font-semibold'>Trending Now</h2>
           <div className='flex justify-between items-center mt-10 flex-wrap'>
             <TrendingProduct/>
           </div>
    </div>
  )
}

export default Trending