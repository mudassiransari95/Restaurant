const AddItem = require("../models/AddNewItem")


const addItemlist=async(req,res)=>{
    try {
        
const datalist=await AddItem.find()

if(datalist){
    res.status(200).json({
        data:datalist,
        success:true,
        error:false,
        message:'i have get all data '
    })
}

    } catch (error) {
        res.json({
            message:error.message||error,
            success:false,
            error:true
        })
    }
}

module.exports=addItemlist