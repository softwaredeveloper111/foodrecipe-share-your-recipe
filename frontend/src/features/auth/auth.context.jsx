import React , {createContext, useState} from 'react'
export const authContext = createContext()
import { login, register  } from "./services/auth.api";



const  AuthContextProvider = ({children}) => {

 
  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(false);


   async function handleLogin(data){
 
    setLoading(true);

    try {
    const response = await login(data);
    setUser(response);

    } catch (error) {
      console.log(error.message)
    }
    finally{
      setLoading(false);
    }

  }
   

  async function handleRegister(data){
    setLoading(true);
    try {
      const response = await register(data);
      setUser(response);
  
    } catch (error) {
      console.log(error.message)
    }
    finally{
      setLoading(false);
    }
  }

  
   


  return (
    <authContext.Provider  value={{user,loading,handleLogin,handleRegister}}>
      {children}
    </authContext.Provider>
  )
}

export default AuthContextProvider