const express = require("express");
const identifyingUser = require("../middlewares/auth.middleware")
const upload = require("../middlewares/multer.upload")
const {
  createRecipeController,
  getSingleRecipeController,
   getAllRecipesController,
   updateRecipeController,
   deleteRecipeController
} = require("../controllers/recipe.controller")





const recipeRouter = express.Router();




/**
 * @method      POST
 * @route        /api/recipes/
 * @description    create new recipe and all data store in database
 */

recipeRouter.post("/", identifyingUser  , upload.single("image") ,createRecipeController)










/**
 * @method      GET
 * @route        /api/recipes/
 * @description   get all the recipes
 */

recipeRouter.get("/", identifyingUser  , getAllRecipesController)











/**
 * @method          GET
 * @route         /api/recipes/:id
 * @description    get a single receipe
 * @params        {req.body.params}
 */

recipeRouter.get("/:id" ,  identifyingUser , getSingleRecipeController)








/**
 * @method          PUT
 * @route         /api/recipes/:id
 * @description    update your own recipe
 * @params
 * @body
 * 
 */

recipeRouter.put("/:id" ,  identifyingUser , upload.single("image") ,   updateRecipeController)









/**
 * @method        DELETE
 * @route         /api/recipes/:id
 * @description   delete your own recipe
 * @params
 */

recipeRouter.delete('/:id' , identifyingUser , deleteRecipeController)












module.exports = recipeRouter 












