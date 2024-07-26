
const Offer = require("../models/DailyOffer")


const OfferItemlist=async(req,res)=>{
    try {
        
const Offerlist=await Offer.find()

if(Offerlist){
    res.status(200).json({
        data:Offerlist,
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

module.exports=OfferItemlist