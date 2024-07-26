
const Review = require("../models/Review")


const getallReview=async(req,res)=>{
    try {
        
const notilist=await Review.find()

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

module.exports=getallReview