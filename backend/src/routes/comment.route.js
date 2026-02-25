const express = require("express");
const indentifyingUser = require("../middlewares/auth.middleware");
const upload = require("../middlewares/multer.upload");
const {
    commentRecipePostController,
     deleteCommentRecipePostController,
     editCommentRecipePostController,
      getAllCommentsController
} = require("../controllers/comment.controller")




const commentRouter = express.Router();







/**
 * @method         POST
 * @route          /api/recipes/comment/:id
 * @description    user can do comment on a post
 * @params         {req.params.id} =  recipeId
 */
commentRouter.post("/:id", indentifyingUser ,upload.single() , commentRecipePostController)








/**
 * @method          GET
 * @route           /api/recipes/comment/:id
 * @description      fetch all the comments of that recipe post
 * @params           {req.params.id} = recipeId
 */
commentRouter.get("/:id", indentifyingUser , getAllCommentsController)










/**
 * @method          DELETE
 * @route           /api/recipes/comment/:id
 * @description     user can do delete their own comment from a post -author only
 * @params          {req.params.id} = commentId
 */
commentRouter.delete("/:id" , indentifyingUser ,  deleteCommentRecipePostController )










/**
 * @method          PUT
 * @route           /api/recipes/comment/:id
 * @description     user can edit their own comment - author only
 * @params          {req.params.id} = commentId
 */
commentRouter.put("/:id" , indentifyingUser , upload.single() ,editCommentRecipePostController )













module.exports = commentRouter