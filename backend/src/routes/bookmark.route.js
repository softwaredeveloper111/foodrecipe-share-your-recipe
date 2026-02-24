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
 * @method                GET
 * @route                /api/recipes/bookmark
 * @description          get your all save(bookmark) recipes
 * 
 */
bookMarkRouter.get("/get" , indentifyingUser , getAllBookmarkController)






/**
 * @method                POST
 * @route                /api/recipes/bookmark/:id
 * @description          save your favourite recipe 
 * @params               {req.params.id} = postId
 */
bookMarkRouter.post("/:id" , indentifyingUser , addBookmarkController)






/**
 * @method                DELETE
 * @route                /api/recipes/bookmark/:id
 * @description          unsave your bookmark recipe 
 * @params               {req.params.id} = postId
 */
bookMarkRouter.delete("/:id" , indentifyingUser , removeBookmarkController)










module.exports = bookMarkRouter