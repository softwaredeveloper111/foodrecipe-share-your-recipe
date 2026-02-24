const userModel = require('../models/user.model')






/** fetch loggedin  user profile , controller */
async function profileFetchController(req,res){
  
try {

    const userId = req.user.id;
    const user = await userModel.findById(userId);

    if(!user){
      return res.status(404).json({
        message:"user not found"
      })
    }

    res.status(200).json({
      message:"user profile fetch sucessfully",
      user
    })
  
} catch (error) {
  return res.status(400).json({
    message:"bad request"
  })
}
  

}







/** update user profile and bio , controller */

async function updateProfileController(req,res){
 
  try {

    const userId = req.user.id
   
    const updatedData = {}

    if(req.body?.profileImage) updatedData.image = req.body.profileImage
    if(req.body?.bio) updatedData.bio = req.body.bio
    
    await userModel.findByIdAndUpdate(userId , updatedData)

    
  } catch (error) {
    return res.status(400).json({
      message:`Bad request , ${error.message}`
    })
  }

}

















module.exports = { 
  profileFetchController ,
  updateProfileController
  }




