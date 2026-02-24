import React , {createContext, useState} from 'react'
import { login, register  } from "./services/auth.api";


export const authContext = createContext()



const  AuthContextProvider = ({children}) => {

 
  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(false);


   async function handleLogin(data){
 
    setLoading(true);

    try {
    const response = await login(data);

    setUser(response.data);

    return {success:true};

    } catch (error) {
      return {
      success: false,
      message: error.response?.data?.message || "Login failed",
    };
    }
    finally{
      setLoading(false);
    }

  }
   

  async function handleRegister(data){
    setLoading(true);
    try {
      const response = await register(data);
      setUser(response.data);
      return {success:true};
    } catch (error) {
      return {
      success: false,
      message: error.response?.data?.message || "Login failed",
    };
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