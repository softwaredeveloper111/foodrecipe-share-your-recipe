const express = require("express");
const authRouter = require("./routes/auth.route");
const recipeRouter  = require("./routes/recipe.route");
const userRouter = require("./routes/user.route");
const bookMarkRouter = require("./routes/bookmark.route");
const commentRouter = require("./routes/comment.route");
const likeRouter = require("./routes/like.route")
const cookieParser = require("cookie-parser");
const cors = require("cors")




const app = express();




/**
 * application middleware
 */
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))



app.use("/api/auth",  authRouter);
app.use("/api/recipes",  recipeRouter )
app.use("/api/recipes/user", userRouter) 
app.use("/api/recipes/bookmark" , bookMarkRouter)
app.use("/api/recipes/comment" , commentRouter);
app.use("/api/recipes/like" , likeRouter)








module.exports = app;