
const userModel = require('../models/user.model')
const likeModel = require("../models/like.model")
const recipeModel = require("../models/recipe.model")
const commentModel = require("../models/comment.model")










/** user like on a recipe post , controller */

async function likeRecipePostController(req,res){
  
  try {

     const userId = req.user.id;
     const recipeId = req.params.id;


     const recipeExits = await recipeModel.findById(recipeId)

     if(!recipeExits){
      return res.status(404).json({
        success:false,
        message:"recipe not found , invalid recipeId",
        error:{
          code:"NOT FOUND",
          details:"invalid recipe id, recipe not found in database"
        }
      })
     }

     
     const isUserAlreadyLiked = await likeModel.findOne({
      userId,
      recipeId,
     })

     if(isUserAlreadyLiked){
      return res.status(409).json({
        status:false,
        message:"user already liked",
        error:{
          code:"CONFLICT",
          details:{
            message:"user cannot like twice a post."
          }
        }
      })
     }
    
    const likedUser =  await likeModel.create({
      recipeId,
      userId,
    }) 
   
   await  recipeModel.findByIdAndUpdate(recipeId, {
      $inc:{likeCount:1}
    })


    res.status(201).json({
      success:true,
      message:"user liked sucessfully",
      data : likedUser
    })

    
  } catch (error) {
    return res.status(500).json({
      success:false,
      message:`INTERNAL SERVER ERROR , ${error.message}`,
      error:{
        code:"INTERNAL SERVER ERROR",
        details:null
      }
    })
  }

}












/** user unlike on a recipe post, controller */
async function unlikeRecipePostController(req,res){

try {

  const userId = req.user.id;
  const recipeId = req.params.id


  const recipeExits = await recipeModel.findById(recipeId)

  if(!recipeExits){
    return res.status(404).json({
      success:false,
      message:"recipe not found , invalid recipeId",
      error:{
        code:"NOT FOUND",
        details:null
      }
    })
  }


  const isUserAlreadyLiked = await likeModel.findOne({
      userId,
      recipeId,
     })

     if(!isUserAlreadyLiked){
      return res.status(404).json({
        success:false ,
        message:"you cannot unlike the post",
        error:{
          code:"NOT FOUND",
          details:{
            message:"only liked post can be unlike"
          }
        }
      })
     }
  
  await likeModel.findByIdAndDelete(isUserAlreadyLiked._id)

  await recipeModel.findByIdAndUpdate( recipeId , {$inc:{likeCount:-1}})

  res.status(204).json({
    success:true,
    message:"user unlike the post sucessfully"
  })
  
  
} catch (error) {
  return res.status(500).json({
    status:false,
    message:`INTERNAL SERVER ERROR , ${error.message}`,
    error:{
      code:"INTERNAL SERVER ERROR",
      details:null
    }
  })
}

}













/** return the list of all liked users of that recipe , controller */
async function getLikedUsersListController(req,res){
  try {

    const userId = req.user.id;
    const recipeId = req.params.id;

    const recipeExits = await recipeModel.findById(recipeId)

     if(!recipeExits){
      return res.status(404).json({
        success:false,
        message:"recipe not found , invalid recipeId",
        error:{
          code:"NOT FOUND",
          details:"invalid recipe id, recipe not found in database"
        }
      })
     }

    const likes = await likeModel.find({recipeId}).populate("userId")

    res.status(200).json({
      success:true,
      message:"like user fetch succesfully",
      data:likes
    })

    
  } catch (error) {
    return res.status(500).json({
      success:false,
      message:`INTERNAL SERVER ERROR ${error.message}`,
      error:{
        code:"INTERNAL SERVER ERROR",
        details:null
      }
    })
  }
}











module.exports = {
     likeRecipePostController ,
     unlikeRecipePostController,
     getLikedUsersListController
}