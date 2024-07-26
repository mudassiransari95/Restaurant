const AddItem = require("../models/AddNewItem")

const addcategory=async(req,res)=>{
        const {image,ItemCategory,ItemName}=req.body

    try {

        const createCategory=await AddItem.create({
            image,
            ItemCategory,
            ItemName
        })
        res.status(200).json({
            data:createCategory,
            success:true,
            error:false,
            message:'category added successfully'
        })
        
    } catch (error) {
        res.json({
            message:error.message,
            success:false,
            error:true
        })
    }
}
module.exports=addcategory