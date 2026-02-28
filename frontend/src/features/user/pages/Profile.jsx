import React from 'react'
import {Link , NavLink, Outlet} from "react-router-dom";

const Profile = () => {
  return (
    <div className='profile-section w-full'>
      <div className='flex '>
        <div className="w-60 h-150  px-10 py-10 flex flex-col gap-10">
          <NavLink to="/me/profile" style={(e)=>e.isActive?{border:"2px solid orange", padding:"5px", borderRadius:"10px"}:{borderBottom:"0px solid magenta"}}  className='text-xl w-fit text-zinc-500' >account</NavLink>
          <NavLink to="/me/posts" style={(e)=>e.isActive?{border:"2px solid orange" ,padding:"5px", borderRadius:"10px" }:{borderBottom:"0px solid magenta"}}  className='text-xl w-fit text-zinc-500' >all post</NavLink>
        </div>
        <div className='grow '>

             <Outlet/>

        </div>
      </div>

    </div>
  )
}

export default Profile