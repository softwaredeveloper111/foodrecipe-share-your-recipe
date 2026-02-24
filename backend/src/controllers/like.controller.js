
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
        message:"recipe not found , invalid recipeId"
      })
     }

     
     const isUserAlreadyLiked = await likeModel.findOne({
      userId,
      recipeId,
     })

     if(isUserAlreadyLiked){
      return res.status(400).json({
        message:"user already liked"
      })
     }
    
    const likedUser =  await likeModel.create({
      recipeId,
      userId,
    }) 

    res.status(201).json({
      message:"user liked sucessfully",
      likedUser
    })

    
  } catch (error) {
    return res.status(400).json({
      message:`bad request , ${error.message}`
    })
  }

}









/** user unlike on a recipe post, controller */
async function unlikeRecipePostController(req,res){

try {

  const recipeId = req.params.id
  const userId = req.user.id;


  const recipeExits = await recipeModel.findById(recipeId)

  if(!recipeExits){
    return res.status(404).json({
      message:"recipe not found , invalid recipeId"
    })
  }


  const isUserAlreadyLiked = await likeModel.findOne({
      userId,
      recipeId,
     })

     if(!isUserAlreadyLiked){
      return res.status(400).json({
        message:"for unlike user first liked the recipe post"
      })
     }
  
  await likeModel.findByIdAndDelete(isUserAlreadyLiked._id)

  res.status(200).json({
    message:"user unlike the post sucessfully"
  })

  
} catch (error) {
  return res.status(400).json({
    message:`bad request , ${error.message}`
  })
}

}





module.exports = {
     likeRecipePostController ,
     unlikeRecipePostController,
}