const express = require("express");
const indentifyingUser = require("../middlewares/auth.middleware");
const upload = require("../middlewares/multer.upload");
const {
    commentRecipePostController,
     deleteCommentRecipePostController,
     editCommentRecipePostController
} = require("../controllers/comment.controller")




const commentRouter = express.Router();







/**
 * @method         POST
 * @route          /api/user/comment/:id
 * @description    user can do comment on a post
 * @params         {req.params.id} = postId
 */
commentRouter.post("/comment/:id", indentifyingUser ,upload.single() , commentRecipePostController)







/**
 * @method          DELETE
 * @route           /api/user/comment/delete/:id
 * @description     user can do delete their comment from a post
 * @params          {req.params.id} = commentId
 */
commentRouter.delete("/comment/delete/:id" , indentifyingUser ,  deleteCommentRecipePostController )








/**
 * @method          PUT
 * @route           /api/user/comment/edit/:id
 * @description     user can edit their own comment 
 * @params          {req.params.id} = commentId
 */
commentRouter.put("/comment/edit/:id" , indentifyingUser , upload.single() ,editCommentRecipePostController )











module.exports = commentRouter