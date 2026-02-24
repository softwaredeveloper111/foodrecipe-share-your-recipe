const express = require('express');
const indentifyingUser = require("../middlewares/auth.middleware")
const {

   updateProfileController 
  } 
  = require("../controllers/user.controller")




const userRouter = express.Router()









/**
 * @method      PUT
 * @route      /api/recipes/user/update-me
 * @descrption    fetch your profile from database
 */

userRouter.get("/update-me", indentifyingUser , updateProfileController)




















module.exports = userRouter