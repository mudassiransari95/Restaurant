
const RestaurentInfo = require("../models/RestaurentInfo")


const createInfo=async(req,res)=>{
    const {image,name,phone, address,email}=req.body

    try {
        const Infocreate=await RestaurentInfo.create({
            image,
            name,
            phone,
            address,
            email
        })
        res.status(200).json({
            data:Infocreate,
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

module.exports=createInfo