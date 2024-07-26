const AddItem = require("../models/AddNewItem")


const editAddItem=async(req,res)=>{
    const {image,ItemName,ItemCategory,price,costomise,offerprice,foodType,ExtraCheese,ExtraMayonaise,ExtraVaggies,Description}=req.body
        const id=req.body._id
    try {
        const update=await AddItem.findByIdAndUpdate({_id:id},{$set:{image:image,ItemName:ItemName,
            ItemCategory:ItemCategory,price:price,offerprice:offerprice,foodType:foodType,
            ExtraCheese:ExtraCheese,ExtraMayonaise:ExtraMayonaise,ExtraVaggies:ExtraVaggies,
            Description:Description,costomise:costomise}},{new:true})
        res.status(200).json({
            data:update,
            success:true,
            error:false,
            message:'product updated successfully'
        })
    } catch (error) {
        res.status(500).json({
            message:error.message||error,
            success:false,
            error:true
        })
        
    }
}
module.exports=editAddItem