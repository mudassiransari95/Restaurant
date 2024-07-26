const AddItem = require("../models/AddNewItem")


const deleteItem=async(req,res)=>{
    const productId=req.body._id

    try {
        const deleteData=await AddItem.findByIdAndDelete({_id:productId})

        res.status(200).json({
            data:deleteData,
            success:true,
            error:false,
            message:'data deleted successfully'
        })
    } catch (error) {
        res.status(500).json({
            message:error.message||error,
            success:false,
            error:true
        })
    }
}

module.exports=deleteItem