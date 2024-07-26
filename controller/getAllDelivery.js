const DeliveryArea = require("../models/delivery")

const getAlldata=async(req,res)=>{

    try {
        
        const getData=await DeliveryArea.find()

    res.status(200).json({
        data:getData,
        success:true,
        error:false,
        message:'i gotted all data'
    })
    } catch (error) {
        res.status(500).json({
            message:error.message||error,
            success:false,
            error:true
        })
    }
}

module.exports=getAlldata