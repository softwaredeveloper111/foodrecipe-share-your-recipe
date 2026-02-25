const mongoose = require('mongoose');



const recipeSchema = new mongoose.Schema({
 
  name:{
    type:String,
    trim:true,
    required:[true,"recipe name should be required"]
  },

  description:{
    type:String,
    trim:true,
    required:[true,"recipe description should be required"],

  },
  
  ingredients: [
  {
    type: String,
    required: [true, "ingredients should be required"]
  }
],

  instructions:[
    {
    type:String,
    required:[true,"intructions should be required"]
  }
  ],

  prepTimeMinutes:{
    type:Number,
    required:[true,"prev time should be required"]
  },

  cookTimeMinutes:{
    type:Number,
    required:[true,"cook time should be required"]
  },


  servings:{
    type:Number,
    required:[true,"serving people number should be required"]
  }
  ,

  author:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
    required:[true,"author should be required"]
  }
  ,
  
   mealType :[
    {
    type:String,
    required:[true,"meal type should be required"],
    enum: {
  values: [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Snack",
    "Dessert",
    "Appetizer",
    "Side Dish",
    "Beverage"
  ],
  message: "Invalid meal type"
     }
   }
  ]
  ,

  image:{
    type:String,
    required:[true,"image should be required"]
  }
  ,

  likeCount:{
    type:Number,
    default:0
  }
  ,
  
  commentCount:{
    type:Number,
    default:0
  }

   
},{
  timestamps:true
})



const recipeModel = mongoose.model("recipe",recipeSchema);


module.exports = recipeModel