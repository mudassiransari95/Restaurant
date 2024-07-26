const DeliveryArea = require("../models/delivery")




const CreateDeliveryArea=async(req,res)=>{
    const {state,city,area}=req.body

    try {
        const createData=await DeliveryArea.create({
            state,city,area
        })
        res.status(200).json({
            data:createData,
            success:true,
            error:false,
            message:'delivery Area Created successfully'
        })
    } catch (error) {
        res.json({
            message:error.message||error,
            success:false,
            error:true
        })
    }
}
module.exports=CreateDeliveryArea