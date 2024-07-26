

const mongoose=require('mongoose')

const ReviewSchema=new mongoose.Schema({
    image:String,
    title:String,
    name:String
},
{
    timestamps:true
})

const Review=mongoose.model('Review',ReviewSchema)

module.exports=Review