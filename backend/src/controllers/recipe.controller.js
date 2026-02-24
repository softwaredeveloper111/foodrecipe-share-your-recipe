
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
    prepTimeMinutes : Number(req.body.prepTimeMinute),
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
    message:"post created sucessfully",
    createdPost
  })

  
 } catch (error) {
   return res.status(400).json({
    message:"bad requrest"
   })
 }

}




/** get  a single receipe , controller */

async function getSingleRecipeController(req,res){
 try {


  const recipeId = req.params.id;

  const recipe = await recipeModel.findById(recipeId);

  if(!recipe){
     return res.status(404).josn({
      messgae:"recipe not found"
     })
  }


  res.status(200).json({
    message:"receipe fetch sucessfully",
    recipe
  })


  
 } catch (error) {
  return res.status(400).json({
    message:"invalid request"
   })
 }
}






/** get all recieps ,controller */
async function  getAllRecipesController(req,res){
 try {
  const recipes = await recipeModel.find().sort({createdAt:-1});
  res.status(200).json({
    message:"all recipes fetch sucessfully",
    recipes
  })
 } catch (error) {
  return res.status(400).json({
    message:"bad request"
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
       message:"recipe not found"
    })
  }

  if(recipe.author.toString() !== userId){
     return res.status(401).json({
      message:"unthorized acess"
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

   await recipeModel.findByIdAndUpdate(recipeId ,updateData)

  res.status(200).json({
    message:"recipe updated sucessfully"
  })
    
  } catch (error) {
    return res.status(400).json({
      message:  `bad reqest ${error.message} `
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
      message:"recipe not found"
    })
  }

  if(recipe.author.toString() !== userId){
    return res.status(401).json({
      message:"unthorized acess"
    })
  }

  await recipeModel.findByIdAndDelete(recipeId)

  res.status(200).json({
    message:"recipe delete sucessfully"
  })



  
 } catch (error) {
   return res.status(400).json({
    message:"bad request"
   })
 }

}













module.exports  = {
  createRecipeController,
 getSingleRecipeController,
  getAllRecipesController,
  updateRecipeController,
  deleteRecipeController

}