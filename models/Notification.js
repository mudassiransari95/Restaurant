

const mongoose=require('mongoose')

const DeliverySchema=new mongoose.Schema({
    image:String,
    title:String
},
{
    timestamps:true
})

const notification=mongoose.model('notification',DeliverySchema)

module.exports=notification