
const recipeModel= require("../models/recipe.model")
const uploadToImageKit = require("../config/imageKit.config")







/**create a new recipe , controller */

async function createRecipeController(req,res){
  
 try {

  const userId = req.user.id;

  const response = await  uploadToImageKit(req.file)




  const recipeData =  {
    name : req.body.name,
    description : req.body.description,
    ingredients : JSON.parse(req.body.ingredients),
    instructions:JSON.parse(req.body.instructions),
    prepTimeMinutes : Number(req.body.prepTimeMinutes),
    cookTimeMinutes: Number(req.body.cookTimeMinutes ),
    servings : Number(req.body.servings),
    mealType:JSON.parse(req.body.mealType),
    image:response.url,
    author:userId
  }
  

  
  const createdPost = await recipeModel.create({
    ...recipeData
  })


  res.status(201).json({
    sucess:true,
    message:"post created sucessfully",
    data: createdPost
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









/** get  a single receipe , controller */

async function getSingleRecipeController(req,res){
 try {


  const recipeId = req.params.id;

  const recipe = await recipeModel.findById(recipeId).populate("author");

  if(!recipe){
     return res.status(404).json({
      success:false,
      messgae:"recipe not found",
      error:{
        code:"NOT FOUND",
        details:{
          message:"invalid recipe id, recipie is not found"
        }
      }
     })
  }


  res.status(200).json({
    message:"receipe fetch sucessfully",
    data: recipe
  })


  
 } catch (error) {
  return res.status(500).json({
    success: false,
    message:`INTERNAL SERVER ERROR, ${error.message}`,
    error:{
      code:"INTERNAL SERVER ERROR",
      code:null
    }
   })
 }
}










/** get all recieps ,controller */
async function  getAllRecipesController(req,res){
 try {
  const recipes = await recipeModel.find().populate("author").sort({createdAt:-1});
  res.status(200).json({
    success:true,
    message:"all recipes fetch sucessfully",
    data: recipes
  })
 } catch (error) {
  return res.status(500).json({
    success:false,
    message: `INTERNAL SERVER ERROR ${error.message}`,
    error:{
      code:"INTERNAL SERVER ERROR",
      details:null
    }
  })
 }
}








/** update own recipe , controller */
async function updateRecipeController(req,res){

  try {

  const recipeId = req.params.id;
  const userId = req.user.id;

  const recipe = await recipeModel.findById(recipeId);

  if(!recipe){
    return res.status(404).json({
      succes:false,
       message:"recipe not found",
      error:{
        code:"NOT FOUND",
        details:null
      }
    })
  }

  if(recipe.author.toString() !== userId){
     return res.status(401).json({
      success:false,
      message:"unthorized acess",
      error:{
        code:"UNTHORIZED",
        details:"you are not authorized to perform the action"
      }
     })
  }
   
  const response =  req.file ? await  uploadToImageKit(req.file) : undefined

  const updateData = {};

   if (req.body?.name) updateData.name = req.body.name;
    if (req.body?.description) updateData.description = req.body.description;
    if (req.body?.ingredients) updateData.ingredients = JSON.parse(req.body.ingredients);
    if (req.body?.instructions) updateData.instructions = JSON.parse(req.body.instructions);
    if (req.body?.prepTimeMinutes) updateData.prepTimeMinutes = Number(req.body.prepTimeMinutes);
    if (req.body?.cookTimeMinutes)  updateData.cookTimeMinutes = Number(req.body.cookTimeMinutes);
    if (req.body?.servings) updateData.servings = Number(req.body.servings);
    if (req.body?.mealType) updateData.mealType = JSON.parse(req.body.mealType);
    if (response?.url) updateData.image = response.url;

   const result = await recipeModel.findByIdAndUpdate(recipeId ,updateData,{new:true})

  res.status(200).json({
    sucess:true,
    message:"recipe updated sucessfully",
    data: result ,
  })
    
  } catch (error) {
    return res.status(500).json({
      success:false,
      message:  `INTERNAL SERVER ERROR ${error.message} `,
      error:{
        code:"INTERNAL SERVER ERROR",
        details:null
      }
    })
  }


}









/** delete own recipe , controller */

async function deleteRecipeController(req,res){
 try {

   const recipeId = req.params.id
  const userId = req.user.id;
 
  const recipe = await recipeModel.findById(recipeId)
  if (!recipe){
    return res.status(404).json({
      success:false,
      message:"recipe not found",
      error:{
        code:"NOT FOUND",
        details:'invalid recipe id, recipe not found in db'
      }
    })
  }

  if(recipe.author.toString() !== userId){
    return res.status(401).json({
      success:false,
      message:"unthorized acess",
      error:{
        code:UNTHORIZED,
        details:"you are not authorized to perfrom that action, only author do that"
      }
    })
  }

  await recipeModel.findByIdAndDelete(recipeId)

  res.status(204).json({
    success:true,
    message:"recipe delete sucessfully"
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







/** get user all created recipes, controller */
async function getUserAllRecipe(req,res){   
  
  try {

    const userId = req.user.id;

    const recipes = await recipeModel.find({author:userId})

    res.status(200).json({
      success:true,
      message:"all recipe fetch successfully",
     data:  recipes
    })
    
  } catch (error) {
    return res.status(500).json({
      success:false,
      message:"INTERNAL SERVER ERROR",
      error:{
        code:"INTERNAL SERVER ERROR",
        details:null
      }
    })
  }

}








module.exports  = {
  createRecipeController,
 getSingleRecipeController,
  getAllRecipesController,
  updateRecipeController,
  deleteRecipeController,
  getUserAllRecipe

}