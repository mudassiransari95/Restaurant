const notification = require("../models/Notification")
const Review = require("../models/Review")


const createReview=async(req,res)=>{

    const {image,title,name}=req.body
    try {
        const notificati=await Review.create({
            image,
            title,
            name
        })
        res.status(200).json({
            data:notificati,
            success:true,
            error:false,
            message:'ok'
        })
    } catch (error) {
        res.json({
            message:error.message||error,
            success:false,
            error:true
        })
    }
}

module.exports=createReview