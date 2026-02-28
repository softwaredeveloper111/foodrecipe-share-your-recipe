const userModel = require('../models/user.model')
const recipeModel = require("../models/recipe.model")
const uploadToImageKit = require("../config/imageKit.config")






/** fetch public profile of a user by userId , controller */
async function fetchPublicProfileController(req,res){
  try {

    const userId = req.params.id;

    const [user,recipes] = await Promise.all([ userModel.findById(userId).select("-email"), recipeModel.find({author:userId}).sort({createAt:-1})])

    if(!user){
      return res.status(404).json({
        sucess:false,
        message:"user not found",
        error:{
          code:"NOT FOUND",
          details:{
            message:"wrong userid , user not found in database"
          }
        }
      })
    }

    res.status(200).json({
      message:"user data fetch sucessfully",
       data :{
        user,
        recipes
       }
    })

    
  } catch (error) {
    return res.status(500).json({
      success:false,
      message:`INTERNAL SERVER ERRROR  ${error.message}`,
      error:{
        code:"INTERNAL SERVER ERRROR",
        details:null
      }
    })
  }
}









/**  user can update their  bio , controller */

async function updateProfileController(req,res){
 
  try {

    console.log(req.body)
    const userId = req.user.id
    
    const updatedData = {}

  
    if(req.body?.bio) updatedData.bio = req.body.bio
    
    
    const result =  await userModel.findByIdAndUpdate(userId , updatedData ,{new:true})

    res.status(200).json({
      sucess:true,
      message:"bio updated sucessfully",
      data:result
    })

    
  } catch (error) {
    return res.status(500).json({
      sucess:false,
      message:`INTERNAL SERVER ERROR , ${error.message}`,
      error:{
        code:"INTERNAL SERVER ERROR",
        details:null
      }
    })
  }

}










/** user can update their profile , controller */
async function avatarUpdateController(req,res){
  try {
     
 

    const userId = req.user.id;

    const getRes =  req.file ?  await uploadToImageKit(req.file) :undefined;


   const result =  await userModel.findByIdAndUpdate(userId, {profileImage:getRes?.url},{new:true});



    res.status(200).json({
      success:true,
      message:"profile avatar update sucessfully",
      data:result
    })
    
  } catch (error) {
    return res.status(500).json({
      sucess:false,
      message:`INTERNAL SERVER ERROR ${error.message}`,
      error:{
        code:"INTERNAL SERVER ERROR",
        details:null
      }
    })
  }
}











module.exports = { 
  updateProfileController,
  fetchPublicProfileController,
  avatarUpdateController
  }




