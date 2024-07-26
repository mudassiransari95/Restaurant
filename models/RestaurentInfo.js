
const mongoose=require('mongoose')

const RestaurentInfodata=new mongoose.Schema({
    image:String,
    name:String,
    phone:Number,
    address:String,
    email:{
        type:String,
        required:true
    }
},
{
    timestamps:true
}
)
const RestaurentInfo=mongoose.model('RestaurentInfo',RestaurentInfodata)

module.exports=RestaurentInfo