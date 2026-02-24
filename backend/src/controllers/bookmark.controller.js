const favouriteModel = require("../models/favourite.model")
const recipeModel = require("../models/recipe.model")





/** bookmark your favourite recipe , controller */
async function addBookmarkController(req,res){

  try {
    
    const userId = req.user.id
    const recipeId = req.params.id;

    const recipe = await recipeModel.findById(recipeId)
    if(!recipe){
      return res.status(404).json({
        message:"recipe not found"
      })
    }


    const isAlreayBookmarked = await favouriteModel.findOne({
      userId,
      recipeId
    })


     if(isAlreayBookmarked ){
      return res.status(400).json({
        message:"you already bookmarked"
      })
     }


    const bookmark = await favouriteModel.create({
       userId,
      recipeId
    })


    res.status(201).json({
      message:"post bookmared sucessfully",
      bookmark
    })


  } catch (error) {
    return res.status(400).json({
      message:`Bad request, ${error.message}`
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
        message:"recipe not found"
      })
    }
   
    const isBookmarked = await favouriteModel.findOne({
      userId,
      recipeId
    })


     if(!isBookmarked){
      return res.status(400).json({
        message:"you bookmarked first , for unsave"
      })
     }


     await favouriteModel.findByIdAndDelete(isBookmarked._id)

     res.status(200).json({
      message:"unbookmark sucessfully"
     })


    
  } catch (error) {
    return res.status(400).json({
      message:`Bad request ${error.message}`
    })
  }
}





/** get all bookmark recipe , controller */

async function getAllBookmarkController(req,res){
  try {
      
    const userId = req.user.id;

    const bookMarkRecipe = await favouriteModel.find({userId}).populate("recipe")
    
  
    res.status(200).json({
      message:"bookmark recipes fetch sucessfully",
      bookMarkRecipe
    })


  } catch (error) {
    return res.status(400).json({
      message:`Bad request , ${error.message}`
    })
  }
}
















module.exports = {
  addBookmarkController,
  removeBookmarkController,
  getAllBookmarkController
}