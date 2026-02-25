const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/** register a new user, controller */
async function registerUserController(req, res) {
  try {
    const { username, email, password } = req.body;

    const isUserAlreadyRegistered = await userModel.findOne({
      $or: [{ username }, { email }],
    });

    if (isUserAlreadyRegistered) {
      return res.status(409).json({
        success: false,
        message:
          isUserAlreadyRegistered.username === username
            ? "username already used"
            : "email already userd",

        error: {
          code: "CONFLICT",
          details: null,
        },
      });
    }

    const hashPassword = await bcrypt.hash(
      password,
      Number(process.env.GEN_SALT),
    );

    const createdUser = await userModel.create({
      username,
      email,
      password: hashPassword,
    });

    const token = jwt.sign({ id: createdUser._id }, process.env.JWT_SECRET);
    res.cookie("JWT_TOKEN", token);

    const userObj = createdUser.toObject();
    delete userObj.password;

    res.status(201).json({
      message: "user registered sucessfully",
      success: true,
      data:userObj,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `INTERNAL SERVER ERROR ${error.message}`,
      error: {
        code: "INTERNAL SERVER ERROR",
        details: null,
      },
    });
  }
}







/** login a registered user, controller */
async function loginUserController(req, res) {
 try {

   const { identifier, password } = req.body;

  const registerUser = await userModel.findOne({
    $or: [{ username: identifier }, { email: identifier }],
  }).select("+password");

  if (!registerUser) {
    return res.status(404).json({
      success: false,
      message: "user not found",
      error:{
        code:"NOT FOUND",
        details:null
      }
    });
  }

  const matchPassword = await bcrypt.compare(password, registerUser.password);

  if (!matchPassword) {
    return res.status(401).json({
      success: false,
      message: "wrong password inputed",
      error: {
        code: "UNAUTHORIZED",
        details:{
          password:"wrong password enter"
        },
      }

    });
  }

  const token = jwt.sign({ id: registerUser._id }, process.env.JWT_SECRET);
  res.cookie("JWT_TOKEN", token);
  

  const userObj = registerUser.toObject();
  delete userObj.password;


  res.status(200).json({
    message: "user login sucessfully",
    data:userObj
  });
  
 } catch (error) {
  return res.status(500).json({
    success: false,
    message: `INTERNAL SERVER ERROR ${error.message}`,
    error: {
      code: "INTERNAL SERVER ERROR",
      details: null,
    },
  })
 }
}







/** loggedin user can sucessfully logout, controller */
async function logoutUserController(req, res) {
   try {

   res.clearCookie("JWT_TOKEN");
  res.status(200).json({
    success: true,
    message: "user logout sucessfully",
  });
    
   } catch (error) {
      return res.status(500).json({
        message:`INTERNAL SERVER ERROR ${error.message}`,
        success:false,
        error:{
          code:"INTERNAL SERVER ERROR",
          details:null
        }
      })
   }
}










/** fetch loggedin  user profile , controller */
async function profileFetchController(req, res) {
  try {
    const userId = req.user.id;
    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "logged in user not found",
        error: {
          code: "NOT FOUND",
          details:{
            message:"userId wrong or user not found in database in this userid"
          }
        }
      });
    }

    res.status(200).json({
      sucess:true,
      message: "user profile fetch sucessfully",
      data:user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `INTERNAL SERVER ERROR ${error.message}`,
      error: {
        code: "INTERNAL SERVER ERROR",
        details: null,
      }
    });
  }
}














module.exports = {
  registerUserController,
  loginUserController,
  logoutUserController,
  profileFetchController,
};
