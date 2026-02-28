import React, { useContext } from 'react'
import { userContextProvider } from "../user.context";

const useUser = () => {

   
 const context =  useContext(userContextProvider)
  return context
}

export default useUser