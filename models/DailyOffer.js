const mongoose=require('mongoose')

const OfferSchema=new mongoose.Schema({
    image:String,
    title:String,
    description:String,
    price:Number
},
{
    timestamps:true
}
)
const Offer=mongoose.model('offer',OfferSchema)

module.exports=Offer