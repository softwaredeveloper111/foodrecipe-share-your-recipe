const jwt = require("jsonwebtoken");




async function indentifyingUser(req,res,next){
  const token = req.cookies?.JWT_TOKEN

  if(!token){
    return res.status(401).json({
      success:false,
      message:"unthorized acess",
      error:{
        code:"UNAUTHORIZED",
        details:null
      }
    })
  }

  try {

    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    req.user = decoded;
    next()

  } catch (error) {

    return res.status(401).json({
      success:false,
      message:"unthorized acess",
      error:{
        code:"UNAUTHORIZED",
        details:null
      }
    })
    
  }

}



module.exports = indentifyingUser