const express = require("express");
const indentifyingUser = require("../middlewares/auth.middleware")
const {
     likeRecipePostController ,
   unlikeRecipePostController,
   getLikedUsersListController
} = require("../controllers/like.controller")






const likeRouter = express.Router();






/**
 * @method        POST
 * @route      /api/recipes/:id/like
 * @description    user can like on post 
 * @params       {req.params.id} = recipeId
 */

likeRouter.post('/:id/like', indentifyingUser , likeRecipePostController)







/**
 *  @method            DELETE
 * @route              /api/recipes/:id/like
 * @description         liked user can only unlike  a  recipe post
 * @params              {req.params.id} = recipeId
 */
likeRouter.delete("/:id/like" , indentifyingUser , unlikeRecipePostController)










/** 
 * @method            GET
 * @route              /api/recipes/:id/likes
 * @description         return list of liked users who are like on that recipe
 * @params              {req.params.id} = recipeId
 */
likeRouter.get("/:id/likes" , indentifyingUser , getLikedUsersListController)




















module.exports = likeRouter 