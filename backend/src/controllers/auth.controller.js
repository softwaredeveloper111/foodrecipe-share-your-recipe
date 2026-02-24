
const userModel = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")





/** register a new user, controller */
async function registerUserController(req,res){
  
  const {username,email,password} = req.body;
 
  const isUserAlreadyRegistered = await userModel.findOne({
    $or:[
      {username},
      {email}
    ]
  })

  if(isUserAlreadyRegistered){
    return res.status(409).json({
      message:isUserAlreadyRegistered.username===username?"username already used":"email already userd"
    })
  }

  
  const hashPassword = await bcrypt.hash(password,Number(process.env.GEN_SALT));


  const creatdUser = await userModel.create({
    username,
    email,
    password:hashPassword
  })

  
  const token  = jwt.sign({id:creatdUser._id},process.env.JWT_SECRET)
  res.cookie("JWT_TOKEN",token)

  
  res.status(201).json({
    message:"user registered sucessfully",
    user:{
      userame: creatdUser.username,
      email: creatdUser.email,
      profileImage: creatdUser.profileImage,
      bio: creatdUser.bio
    }
  })
 

}







/** login a registered user, controller */
async function loginUserController(req,res){
  const {identifier,password} = req.body;

  const registerUser = await userModel.findOne({
    $or:[
      {username:identifier},
      {email:identifier}
    ]
  })

  
  if(!registerUser){
    return res.status(404).json({
      message:"user not found"
    })
  }

  const matchPassword = await bcrypt.compare(password,registerUser.password);

  if(!matchPassword){
    return res.status(401).json({
      message:"unthorized acsss"
    })
  }

  const token = jwt.sign({id:registerUser._id},process.env.JWT_SECRET);
  res.cookie("JWT_TOKEN",token);

  res.status(200).json({
    message:"user login sucessfully",
    user:{
      username:registerUser.username,
      email:registerUser.email,
      profileImage:registerUser.profileImage,
      bio:registerUser.bio

    }
    
})


}







/** loggedin user can sucessfully logout, controller */
async function  logoutUserController(req,res){
  res.clearCookie("JWT_TOKEN");
  res.status(200).json({
    messag:"user logout sucessfully"
  })
}











module.exports = {registerUserController , loginUserController ,  logoutUserController}