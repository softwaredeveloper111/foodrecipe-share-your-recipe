import React from 'react'
import loginImage from "../../../../public/assets/registerimage.png";
import img1 from "../../../../public/assets/img1.jpg";
import img2 from "../../../../public/assets/img2.jpg";
import img3 from "../../../../public/assets/img3.jpg";
import RegisterForm from '../components/RegisterForm';
import { Link } from "react-router-dom";
import  style from "../styles/register.module.css"








const Register = () => {
  return (
    <div className={style.container}>

      <h3> <i class="ri-restaurant-line"></i> Culinary Canvas</h3>

      <div className={style.subContainer}>
          <div className={style.leftSubContainer}>

            <img src={loginImage} alt="" />

            <div className={style.leftSubContainerData}>
              <h1>
                <span>Master the art of</span>
                <span>Home cooking</span>
              </h1>
              <span className={style.text}>Join thousands of food enthusiasts sharing their culinary masterpieces and discovering new flavors every day.</span>
            </div>
            
            <div className={style.profileIcon}>
                 <div className={style.profileIconContainer}>
                  <img src={img1} alt="" />
                  <img src={img2} alt="" />
                  <img src={img3} alt="" />
                 </div>
                 <div className={style.community}>
                  <span>
                     <i class="ri-star-half-s-fill"></i>
                     <i class="ri-star-half-s-fill"></i>
                     <i class="ri-star-half-s-fill"></i>
                     <i class="ri-star-half-s-fill"></i>
                     <i class="ri-star-half-s-fill"></i>
                  </span>
                  <span>10k+ Community Members</span>
                 </div>
            </div>

          </div>
          <div className={style.rightSubContainer}>
            
            <div className={style.account_create_header}>
            <h1>Create an account</h1>
            <span>Start your Culinary journey today, it's free    </span>
            </div>

            <RegisterForm/>

            <span className={style.already_account}>Already have an account ? <Link to="/login" className='text-[#F46A25] cursor-pointer'>Login</Link></span>

            <div className={style.password_rules}>
               <h4>Password Rules : </h4>
               <ul className='list-disc pl-5 text-zinc-700 text-sm '>
                <li> Minimum 8 characters</li>
                 <li>At least one uppercase letter (A–Z)</li>  
                 <li> At least one lowercase letter (a–z)</li>
                <li>At least one number (0–9)</li>
                <li>At least one special character (!@#$%^&*)</li>
               </ul>
            </div>


          </div>
      </div>
   

    </div>
  )
}

export default Register