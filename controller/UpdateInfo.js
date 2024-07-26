
const RestaurentInfo = require("../models/RestaurentInfo")


const UpdateInfo=async(req,res)=>{
    const {image,name,phone, address,email}=req.body

    const profileId=req.body._id

    try {
       
        const Update=await RestaurentInfo.findByIdAndUpdate({_id:profileId},{$set:{image:image,name:name,phone:phone,address:address,email:email}},{new:true})
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
module.exports=UpdateInfo