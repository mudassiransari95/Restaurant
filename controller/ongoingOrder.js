let ongoingproductdata=require('../models/OngoingSchema')
let ongoingorder=async(req,res)=>{
  let {quantity,amount,orderitem}=req.body;
  let createnew=await ongoingproductdata.create({
    quantity,
    amount,
    orderitem    

  })
  return res.status(200).json({ success: true, msg: "item created successfully", createnew })

}

const ongoingalldata=async(req,res)=>{
  try {
    
    const getItem=await ongoingproductdata.find()
    res.status(200).json({
      data:getItem,
      success:true,
      error:false,
      message:'have gotted all data'
    })

  } catch (error) {
    res.json({
      message:error.message||error,
      success:false,
      error:true
    })
  }
}

module.exports={
  ongoingorder,
  ongoingalldata
  }