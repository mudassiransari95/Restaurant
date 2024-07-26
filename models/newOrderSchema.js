let mongoose=require('mongoose');

let UserSchema=new mongoose.Schema({
    orderitem:{
        type:String,
        required:true,
    },
   
    quantity:{
        type:String,
        required:true
    },
  
   
 amount:{
        type:String,
        required:true,
        },
    
})
module.exports=mongoose.model('newOrder',UserSchema)