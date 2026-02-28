import React, { useState, useRef, useEffect } from 'react'
import useUser from "../hooks/useUser";
import Loading from "../../shared/Loading";
import Popup from './Popup';
import { toast } from "react-toastify";




const ProfileDetails = () => {


const {loading,user , GetMeHandler , handleUpdateUserProfile , HandlerbioUpdate} = useUser()
const [profileImage, setProfileImage] = useState(null)
const [previewImage, setPreviewImage] = useState(null)
const [openPopup,setOpenPopup] =  useState(false)
const fileInputRef = useRef(null)



useEffect(()=>{
GetMeHandler()
},[])





if (loading || !user) {
  return <Loading />
}

 

  const handleImageClick = () => {
    fileInputRef.current.click()
  }



  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImage(reader.result)
        setProfileImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }


 const handleUpdate =  async () => {

      const formData = new FormData()
      const file = fileInputRef.current.files[0]

      if (file) {
    formData.append("profileImage", file)
  }

     await handleUpdateUserProfile(formData)
     toast.success("profile update successfully")
  
  }



  const  editBioHandler =  ()=>{
    
   setOpenPopup(true);

  }


  async function produceData(data){
      console.log(data)
      await HandlerbioUpdate(data)
      toast.success("bio updated successfully")
  }



  return (

    <div className=" p-6 font-mono relative z-9">

   
   {openPopup && <Popup setOpenPopup={setOpenPopup} data={user.bio} produceData={produceData}/>}  
     




      {/* Card */}
      <div className="relative w-full max-w-sm bg-[#111] border border-[#2a2a2a] rounded-2xl overflow-hidden shadow-2xl">

        {/* Top accent bar */}
        <div className="h-1 w-full from-[#ff6b35] via-[#f7c59f] to-[#ff6b35]" />

        {/* Cover area */}
        <div className="h-28 bg-[#1a1a1a] relative overflow-hidden">
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, #ff6b35 0, #ff6b35 1px, transparent 0, transparent 50%)',
              backgroundSize: '12px 12px'
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-12  from-[#111] to-transparent" />
        </div>

        {/* Profile section */}
        <div className="px-6 pb-6 -mt-12 relative">

          {/* Avatar */}
          <div className="flex items-end justify-between mb-4">
            <div className="relative group cursor-pointer" onClick={handleImageClick}>
              <div className="w-20 h-20 rounded-full border-4 border-[#111] overflow-hidden bg-[#1e1e1e] shadow-lg ring-2 ring-[#ff6b35]/40">
                {previewImage ? (
                  <img src={previewImage} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-3xl text-[#ff6b35] overflow-hidden">
                    <img className='w-full h-full object-cover' src={user.profileImage} alt="" />
                  </div>
                )}
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 rounded-full bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center border-4 border-[#111]">
                <span className="text-white text-xs font-bold tracking-widest uppercase">Change</span>
              </div>

              {/* Camera badge */}
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#ff6b35] rounded-full flex items-center justify-center border-2 border-[#111] text-[10px]">
                📷
              </div>
            </div>

            {/* Update button */}
            <button
              onClick={handleUpdate}
              className="cursor-pointer px-4 py-1.5 bg-[#ff6b35] text-black text-xs font-bold tracking-widest uppercase rounded-full hover:bg-[#f7c59f] transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#ff6b35]/20"
            >
              Update
            </button>
          </div>

          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />

          {/* Username */}
          <h2 className="text-white text-lg font-bold tracking-tight leading-none mb-0.5">
            {user.username}
          </h2>

          {/* Email */}
          <p className="text-[#555] text-xs tracking-wide mb-4">
            {user.email}
          </p>

          {/* Divider */}
          <div className="h-px bg-[#222] mb-4" />

          {/* Bio */}
          <div className="mb-5">
            <p className="text-[#aaa] text-sm leading-relaxed tracking-wide">
              {user.bio}
            </p>
          </div>

          {/* Edit link */}
          <a
            href="#edit-profile" onClick={editBioHandler}
            className="inline-flex items-center gap-2 text-[#ff6b35] text-xs font-bold uppercase tracking-widest hover:text-[#f7c59f] transition-colors group"
          >
            <span  className="w-4 h-px bg-[#ff6b35] group-hover:w-6 transition-all duration-300" />
            Edit bio
          </a>
        </div>
      </div>

    </div>
  )
}

export default ProfileDetails