const express = require("express");
const {registerUserController , loginUserController ,  logoutUserController} = require("../controllers/auth.controller")



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
authRouter.post("/logout", logoutUserController)












module.exports = authRouter