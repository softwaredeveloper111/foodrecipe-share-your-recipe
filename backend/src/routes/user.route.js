const express = require('express');
const indentifyingUser = require("../middlewares/auth.middleware")
const {
   profileFetchController ,
   updateProfileController 
  } 
  = require("../controllers/user.controller")




const userRouter = express.Router()





/**
 * @method      GET
 * @route      /api/recipes/user/get-me
 * @descrption    fetch your profile from database
 */

userRouter.get("/get-me", indentifyingUser , profileFetchController)




/**
 * @method      PUT
 * @route      /api/recipes/user/update-me
 * @descrption    fetch your profile from database
 */

userRouter.get("/update-me", indentifyingUser , updateProfileController)




















module.exports = userRouter