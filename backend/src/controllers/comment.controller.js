
const recipeModel = require("../models/recipe.model")
const commentModel = require("../models/comment.model")







/** user comment on a recipe post, controller */

async function commentRecipePostController(req,res){
   try {

    const recipeId = req.params.id;
    const userId = req.user.id;

    const recipeExits = await recipeModel.findById(recipeId)

    if(!recipeExits){
     return res.status(404).json({
      message:"recipe not found , invalid recipeId"
    })
    }


  const comment = await commentModel.create({
      userId,
      recipeId,
      text:req.body.text,
  })

  res.status(201).json({
    message:"user do comment created scuessfully",
    comment
  })



    
   } catch (error) {
    return res.status(400).json({
      message:`bad request, ${error.message}`
    })
   }
}









/** user can delete their comment from a post, controller */
async function deleteCommentRecipePostController(req,res){
  
 try {

  const userId = req.user.id;
  const commentId = req.params.id;

  const iscommentIDExitsOrCorrect = await commentModel.findById(commentId)

  if(!iscommentIDExitsOrCorrect){
    return res.status(404).json({
      message:"post comment not found"
    })
  }


  if(iscommentIDExitsOrCorrect.userId.toString() !== userId){
    return res.status(401).json({
      message:"you are not authorized to preform the action"
    })
  }


  await commentModel.findByIdAndDelete(commentId)
  
  res.status(200).json({
    message:"comment deleted sucessfully"
  })
  
  
 } catch (error) {
   return res.status(400).json({
    message:`bad request , ${error.message}`
   })
 }

}









/** user can edit their own comment in a post , controller */
async function editCommentRecipePostController(req,res){
  try {

  const userId = req.user.id;
  const commentId = req.params.id;



  const iscommentIDExitsOrCorrect = await commentModel.findById(commentId)

  if(!iscommentIDExitsOrCorrect){
    return res.status(404).json({
      message:"post comment not found"
    })
  }


   if(iscommentIDExitsOrCorrect.userId.toString() !== userId){
    return res.status(401).json({
      message:"you are not authorized to preform the action"
    })
  }
 
  

  await commentModel.findByIdAndUpdate(commentId , {text:req.body?.text})
  
  res.status(200).json({
    message:"comment update sucessfully"
  })

    
  } catch (error) {
    return res.status(400).json({
      message:`bad request , ${error.message}`
    })
  }
}






module.exports  = {
  commentRecipePostController,
   deleteCommentRecipePostController,
   editCommentRecipePostController
}