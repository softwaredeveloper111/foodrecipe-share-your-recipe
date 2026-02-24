import React, { useContext } from 'react'
import { authContext } from "../auth.context";


const useAuth = () => {
  
 const context =   useContext(authContext)

return context
}

export default useAuth