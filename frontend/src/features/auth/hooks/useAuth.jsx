import React, { useContext } from 'react'
import { authContextProvider } from "../auth.context";


const useAuth = () => {
  
 const context =   useContext(authContextProvider)

return context
}

export default useAuth