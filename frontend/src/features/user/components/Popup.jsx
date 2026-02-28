import React,{useRef} from 'react'

const Popup = ({setOpenPopup,data , produceData}) => {

  const popupRef = useRef(null)

  function submitEventHandler(e){
    e.preventDefault()
    // console.log(popupRef.current.value)
     produceData(popupRef.current.value)
      setOpenPopup(false)
   
  }


  function clickEventHandler(){
     setOpenPopup(false)

  }

  return (
    <div className='fixed h-screen w-screen top-0 left-0 flex justify-center items-center bg-[#fff2] backdrop-blur-md z-999'>
      <div className='popup w-100 bg-[#0F162A] border border-[#ffffff15] rounded-xl overflow-hidden shadow-2xl'>
        
        {/* Header */}
        <div className='flex items-center justify-between px-5 py-4 border-b border-[#ffffff10]'>
          <h2 className='text-white text-sm font-bold uppercase tracking-widest'>Edit Bio</h2>
          <i onClick={clickEventHandler} className="ri-close-line text-gray-400 hover:text-white text-xl cursor-pointer transition-colors" />
        </div>

        {/* Body */}
        <form onSubmit={submitEventHandler} className='p-5 flex flex-col gap-4'>
          <textarea ref={popupRef}
            defaultValue={data}
            rows={5}
            placeholder='Write something about yourself...'
            className='w-full bg-[#ffffff08] border border-[#ffffff15] rounded-lg text-sm text-gray-300 placeholder-gray-600 px-4 py-3 outline-none resize-none focus:border-[#ff6b35] transition-colors'
          />

          {/* Update button */}
          <button type='submit' className='w-full py-2.5 bg-[#ff6b35] hover:bg-[#e85d2a] active:scale-95 transition-all text-black text-xs font-bold uppercase tracking-widest rounded-lg cursor-pointer'>
            Update Bio
          </button>
        </form>

      </div>
    </div>
  )
}

export default Popup