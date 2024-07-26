
const mongoose=require('mongoose')

const profileSchema=new mongoose.Schema({
    image:String,
    name:String,
    phone:Number,
    password:String,
    email:{
        type:String,
        required:true
    }
},
{
    timestamps:true
}
)
const profile=mongoose.model('profile',profileSchema)

module.exports=profile