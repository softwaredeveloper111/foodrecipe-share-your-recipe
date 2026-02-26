import React from 'react'
import RecentlyAddProduct from './RecentlyAddProduct'

const RecentlyAdd = () => {
  return (
    <div className=''>
      <h2 className='custom-font text-3xl font-semibold'>Recently Added</h2>
      <div className='flex flex-col gap-7 mt-10'>
      <RecentlyAddProduct/>
      <RecentlyAddProduct/>
      <RecentlyAddProduct/>
      </div>
    </div>
  )
}

export default RecentlyAdd