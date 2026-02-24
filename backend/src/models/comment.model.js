const mongoose = require("mongoose");




const commentSchema = new mongoose.Schema({
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
    required:[true , "user should be required"]
  }
  ,
  recipeId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"recipe",
    required:[true , "recipe should be required"]
  }
  ,

  text:{
    type:String,
    trim:true,
    required:[true,"text should be required"]
  }

},{timestamps:true})




const commentModel = mongoose.model("comment" , commentSchema)


module.exports = commentModel