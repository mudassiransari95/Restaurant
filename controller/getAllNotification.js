

const notification = require("../models/Notification")


const getallnotificationlist=async(req,res)=>{
    try {
        
const notilist=await notification.find()

if(notilist){
    res.status(200).json({
        data:notilist,
        success:true,
        error:false,
        message:'i have get all data '
    })
}

    } catch (error) {
        res.json({
            message:error.message||error,
            success:false,
            error:true
        })
    }
}

module.exports=getallnotificationlist