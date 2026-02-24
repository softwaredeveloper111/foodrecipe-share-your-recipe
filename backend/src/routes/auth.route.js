const express = require("express");
const {registerUserController ,
   loginUserController ,  
   logoutUserController , 
    profileFetchController} = require("../controllers/auth.controller")
const indentifyingUser = require("../middlewares/auth.middleware")





const authRouter = express.Router();





/**
 * @method    POST
 * @route    /api/auth/register
 * @description    register a  new user/create a new user , store username,email,password in database
 * @body      {username,email,password} = req.body
 */

authRouter.post("/register",registerUserController)







/**
 * @method    POST
 * @route      /api/auth/login
 * @description     registered user can login , and get a token 
 * @body        {username,email,password} = req.body
 */

authRouter.post("/login", loginUserController)









/**
 * @method   POST
 * @route     api/auth/logout
   @description     loggedin user can sucessfully,  logout

*/
authRouter.post("/logout", indentifyingUser ,logoutUserController)









/**
 * @method   GET
 * @route     api/auth/me
   @description     fetch your profile from database
 */
authRouter.get("/me" , indentifyingUser , profileFetchController )














module.exports = authRouter