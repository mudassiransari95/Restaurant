const profile = require("../models/MyProfile")


const UpdateProfile=async(req,res)=>{
    const {image,name,phone, password,email}=req.body

    const profileId=req.body._id

    try {
       
        const Update=await profile.findByIdAndUpdate({_id:profileId},{$set:{image:image,name:name,phone:phone,password:password,email:email}},{new:true})
        res.status(200).json({
            data:Update,
            success:true,
            error:false,
            message:'User Profile Updated Successfully'
        })
   
    } catch (error) {
        res.json({
            message:error.message||error,
            success:false,
            error:true
        })
        
    }
}
module.exports=UpdateProfile