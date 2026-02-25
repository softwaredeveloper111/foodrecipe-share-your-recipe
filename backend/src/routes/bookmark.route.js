const express = require("express");
const indentifyingUser = require("../middlewares/auth.middleware")
const {
   addBookmarkController ,
   removeBookmarkController ,
    getAllBookmarkController
  }  
    =require("../controllers/bookmark.controller")




const bookMarkRouter = express.Router();







/**
 * @method                POST
 * @route                /api/recipes/:id/bookmark
 * @description          save/bookmark your favourite recipe 
 * @params               {req.params.id} = recipeId
 */
bookMarkRouter.post("/:id/bookmark" , indentifyingUser , addBookmarkController)








/**
 * @method                GET
 * @route                /api/recipes/me/bookmark
 * @description          get your all save(bookmark) recipes
 * 
 */
bookMarkRouter.get("/me/bookmark" , indentifyingUser , getAllBookmarkController)









/**
 * @method                DELETE
 * @route                /api/recipes/:id/bookmark
 * @description          remove your bookmark from recipe 
 * @params               {req.params.id} = recipeId
 */
bookMarkRouter.delete("/:id/bookmark" , indentifyingUser , removeBookmarkController)










module.exports = bookMarkRouter