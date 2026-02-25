const express = require('express');
const indentifyingUser = require("../middlewares/auth.middleware");
const upload =require("../middlewares/multer.upload")
const {
  fetchPublicProfileController,
   updateProfileController ,
   avatarUpdateController
  } 
  = require("../controllers/user.controller")




const userRouter = express.Router()









/**
 * @method          GET
 * @route           /api/users/:id
 * @description      fetch a public user profile
 * @params         {req.params.body} = userId
 */

userRouter.get("/:id" , indentifyingUser , fetchPublicProfileController) 











/**
 * @method      PATCH
 * @route      /api/users/profile
 * @descrption    fetch your profile from database
 */

userRouter.patch("/profile", indentifyingUser , updateProfileController)









/**
 * @method      PATCH
 * @route      /api/users/avatar
 * @descrption    fetch your profile from database
 */

userRouter.patch("/avatar", indentifyingUser , upload.single("profileImage") , avatarUpdateController)
















module.exports = userRouter