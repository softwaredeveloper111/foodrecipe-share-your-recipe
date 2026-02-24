const userModel = require('../models/user.model')













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
  
  updateProfileController
  }




