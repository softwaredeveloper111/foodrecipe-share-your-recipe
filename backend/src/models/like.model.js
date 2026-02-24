const mongoose = require('mongoose');






const likeSchema = new mongoose.Schema({

  recipeId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"recipe",
    required:[true,"recipe should be rquired"]
  }
  ,

  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
    required:[true,"user should be rquired"]
  }

},{
  timestamps:true
})



likeSchema.index({receipeId:1,userId:1 }, {unique:true})


const likeModel = mongoose.model("like", likeSchema)



module.exports = likeModel