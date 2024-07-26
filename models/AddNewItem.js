const mongoose=require('mongoose')

const newItemSchema=new mongoose.Schema({
    image:String,
    ItemName:String,
    ItemCategory:String,
    price:String,
    offerprice:String,
    foodType:String,
    ExtraCheese:String,
    ExtraMayonaise:String,
    ExtraVaggies:String,
    Description:String,
    costomise:String
},
{
    timestamps:true
}
)

const AddItem=mongoose.model('AddItem',newItemSchema)
module.exports=AddItem