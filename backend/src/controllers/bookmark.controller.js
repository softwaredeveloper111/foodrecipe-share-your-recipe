const favouriteModel = require("../models/favourite.model")
const recipeModel = require("../models/recipe.model")





/** bookmark your favourite recipe , controller */
async function addBookmarkController(req,res){

  try {
    
    const userId = req.user.id;
    const recipeId = req.params.id;

    const recipe = await recipeModel.findById(recipeId)
    if(!recipe){
      return res.status(404).json({
        success:false,
        message:"recipe not found",
        error:{
          code:"NOT FOUND",
          details:{
            message:"invalid recipeId or recipe not found in db"
          }
        }
      })
    }


    const isAlreayBookmarked = await favouriteModel.findOne({
      userId,
      recipeId,
    })


     if(isAlreayBookmarked ){
      return res.status(409).json({
        success:false,
        message:"you have already bookmarked",
        error:{
           code:"CONFLICT",
           details:{
            message:"author can only bookmark once"
           }
        }

      })
     }


    const bookmark = await favouriteModel.create({
      userId,
      recipeId,
    })


    res.status(201).json({
      success:true,
      message:"recipe bookmared sucessfully",
      data: bookmark
    })


  } catch (error) {
    return res.status(500).json({
      success:false,
      message:`INTERNAL SERVER ERROR, ${error.message}`,
      error:{
         code:"INTERNAL SERVER ERROR",
         details:null
      }
    })
  }
   
}





/** unsave your bookmark recipe,  controller */

async function removeBookmarkController(req,res){
  try {

    const userId = req.user.id;
    const recipeId = req.params.id;

    const recipe = await recipeModel.findById(recipeId)
    if(!recipe){
      return res.status(404).json({
         success:false,
        message:"recipe not found",
        error:{
          code:"NOT FOUND",
          details:{
            message:"invalid recipeId or recipe not found in db"
          }
        }
      })
    }
   
    const isBookmarked = await favouriteModel.findOne({
      userId,
      recipeId
    })


     if(!isBookmarked){
      return res.status(404).json({
        success:false,
        message:"No bookmark found of this recipe",
        error:{
          code:"NOT FOUND",
          details:{
            message:"before remove bookmark, you first have to bookmark it, and no bookmark found in this recipe"
          }
        }
      })
     }


     await favouriteModel.findByIdAndDelete(isBookmarked._id)

     res.status(204).json({
      success:true,
      message:"revove bookmark sucessfully",
    
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








/** get all bookmark recipe , controller */

async function getAllBookmarkController(req,res){
  try {
      
    const userId = req.user.id;

    const bookMarkRecipes = await favouriteModel.find({userId}).populate("recipeId")
    
  
    res.status(200).json({
      success:true,
      message:"bookmark recipes fetch sucessfully",
     data: bookMarkRecipes
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
















module.exports = {
  addBookmarkController,
  removeBookmarkController,
  getAllBookmarkController
}