const Offer = require("../models/DailyOffer")



const CreateOffer=async(req,res)=>{
    const {image,title,description,price}=req.body

    try {
        const Offerdata=await Offer.create({
            image,title,description,price
        })
        res.status(200).json({
            data:Offerdata,
            success:true,
            error:false,
            message:'Offer available on this Item'
        })
    } catch (error) {
        res.json({
            message:error.message||error,
            success:false,
            error:true
        })
    }
}
module.exports=CreateOffer