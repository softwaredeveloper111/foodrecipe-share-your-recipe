import React from 'react'
import loginImage from "../../../../public/assets/loginimage.png";
import LoginForm from '../components/LoginForm';
import { Link } from "react-router-dom";
import style from "../styles/login.module.css";


const Login = () => {
  return (
     

      <div className={style.container}>
          <div className={style.leftContainer}>

            <img   src={loginImage} alt="" />

            <div className={style.leftSubContainerData}>

              <span >"cooking is like love.It should enter into with abandan or not at all."</span>
              <span> --Harriet bore Horn</span>
            </div>
       

          </div>
          <div className={style.rightContainer}>
            <span><i class="ri-restaurant-fill text-2xl text-[#F46A25] font-semibold"></i></span>
            <div className={style.account_create_header}>
            <h1>Welcome Back</h1>
            <span className='max-w-75'> login to access your favourite recipes and share your culinary creations with the world.   </span>
            </div>

            <LoginForm/>

            <span className={style.already_account}>Dont have an account ? <Link to="/register" className='text-[#F46A25] cursor-pointer'>Sign up</Link></span>



          </div>
      </div>
     
  )
}

export default Login