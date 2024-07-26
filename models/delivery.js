const mongoose=require('mongoose')

const DeliverySchema=new mongoose.Schema({
    state:String,
    city:String,
    area:String
},
{
    timestamps:true
})

const DeliveryArea=mongoose.model('deliveryArea',DeliverySchema)

module.exports=DeliveryArea