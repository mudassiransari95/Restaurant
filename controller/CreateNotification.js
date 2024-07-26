const notification = require("../models/Notification")


const createNotification=async(req,res)=>{

    const {image,title}=req.body
    try {
        const notificati=await notification.create({
            image,
            title
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

module.exports=createNotification