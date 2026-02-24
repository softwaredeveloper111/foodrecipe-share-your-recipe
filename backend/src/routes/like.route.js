const express = require("express");
const indentifyingUser = require("../middlewares/auth.middleware")
const {
     likeRecipePostController ,
   unlikeRecipePostController,
} = require("../controllers/like.controller")






const likeRouter = express.Router();






/**
 * @method        POST
 * @route      /api/user/like/:id
 * @description    user can like on post 
 * @params       {req.params.id} = postId
 */

likeRouter.post('/like/:id', indentifyingUser , likeRecipePostController)







/**
 *  @method            DELETE
 * @route              /api/user/unlike/:id
 * @description         liked user can only unlike  a  recipe post
 * @params              {req.params.id} = postId
 */
likeRouter.delete("/unlike/:id" , indentifyingUser , unlikeRecipePostController)













module.exports = likeRouter 