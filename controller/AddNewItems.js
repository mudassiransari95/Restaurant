const AddItem = require("../models/AddNewItem")


const AddNewItem=async(req,res)=>{
    const {image,ItemName,ItemCategory,price,offerprice,foodType,ExtraCheese,ExtraMayonaise,ExtraVaggies,Description,costomise}=req.body

    try {
        
        const NewItem=await AddItem.create({
            image,ItemName,ItemCategory,price,offerprice,foodType,ExtraCheese,ExtraMayonaise,ExtraVaggies,Description,costomise
        })
        res.status(200).json({
            data:NewItem,
            success:true,
            error:false,
            message:'data added successfully'
        })

    } catch (error) {
        res.json({
            message:error.meassge||error,
            success:false,
            error:true
        })
        
    }
}
module.exports=AddNewItem