
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
      success:false,
      message:"recipe not found , invalid recipeId",
      error:{
        code:"NOT FOUND",
        details:{
          message:"recipe id not valid or recipe not found in db"
        }
      }
    })
    }
    

  const comment = await commentModel.create({
      userId,
      recipeId,
      text:req.body?.text,
  })

  await recipeModel.findByIdAndUpdate(recipeId, {$inc:{commentCount:1}})

  res.status(201).json({
    success:true,
    message:"user do comment created scuessfully",
    data: comment
  })



    
   } catch (error) {
    return res.status(500).json({
      message:`INTERNAL SERVER ERROR, ${error.message}`,
      success:false,
      error:{
        code:"INTERNAL SERVER ERROR",
        details:null
      }
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
      success:false,
      message:"post comment not found",
      error:{
        code:"NOT FOUND",
        details:{
          message:"invalid comment id or comment not found in database"
        }
      }
    })
  }


  if(iscommentIDExitsOrCorrect.userId.toString() !== userId){
    return res.status(401).json({
      success:false,
      message:"you are not authorized to preform the action",
      errro:{
        code:"UNTHORIZED",
        details:{
          messaeg:"only author can delete the comment"
        }
      }
    })
  }


  await commentModel.findByIdAndDelete(commentId);
  await recipeModel.findByIdAndUpdate(iscommentIDExitsOrCorrect.recipeId , {$inc:{commentCount:-1}});
  
  res.status(204).json({
    success:true,
    message:"comment deleted sucessfully"
  })
  
  
 } catch (error) {
   return res.status(500).json({
    success:false,
    message:`INTERNAL SERVER ERRRO , ${error.message}`,
    error:{
      code:"INTERNAL SERVER ERROR",
      details:null
    }
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
      success:false,
      message:"post comment not found",
      error:{
        code:"NOT FOUND",
        details:{
          message:"invalid comment id or comment in not found in database"
        }
      }
    })
  }


   if(iscommentIDExitsOrCorrect.userId.toString() !== userId){
    return res.status(401).json({
      success:false,
      message:"you are not authorized to preform the action",
      error:{
        code:"UNTHORIZED",
        details:{
          message:"only author can update the comment"
        }
      }
    })
  }
 
  

 const result =  await commentModel.findByIdAndUpdate(commentId , {text:req.body?.text},{new:true}).populate("userId")
  
  
  res.status(200).json({
    success:true,
    message:"comment update sucessfully",
    data:result,
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










/** fetch all the comments of the post , controller */
async function  getAllCommentsController(req,res){
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
        details:{
          message:"recipe id not valid or recipe not found in db"
        }
      }
    })
    }

    const comments  = await commentModel.find({recipeId}).populate("userId")
    
    res.status(200).json({
      success:true,
      message:"comments fetch successfully",
      data:comments
    })

    
  } catch (error) {
    res.status(500).json({
      success:false,
      message:`INTERNAL SERVER ERROR , ${error.message}`,
      error:{
        code:"INTERNAL SERVER ERROR",
        details:null
      }

    })
  }
}











module.exports  = {
  commentRecipePostController,
   deleteCommentRecipePostController,
   editCommentRecipePostController,
    getAllCommentsController
}