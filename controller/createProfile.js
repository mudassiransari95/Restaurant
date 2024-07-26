const profile = require("../models/MyProfile")


const createProfile=async(req,res)=>{
    const {image,name,phone, password,email}=req.body

    try {
        const profilecreate=await profile.create({
            image,
            name,
            phone,
            password,
            email
        })
        res.status(200).json({
            data:profilecreate,
            success:true,
            error:false,
            message:'profile created successfully'
        })
    } catch (error) {
        res.json({
            message:error.message||error,
            success:false,
            error:true
        })
    }
}

module.exports=createProfile