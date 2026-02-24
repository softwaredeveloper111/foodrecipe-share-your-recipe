const mongoose = require("mongoose");







const favouriteSchema = new mongoose.Schema({
  recipeId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"recipe"
  },
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
  }
},{timestamps:true})



favouriteSchema.index({recipeId:1,userId:1},{unique:true})


const favouriteModel = mongoose.model("favourite", favouriteSchema )




module.exports = favouriteModel