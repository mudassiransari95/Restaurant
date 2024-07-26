let pastorderproduct=require('../models/PastOrderSchema')
let pastorder=async(req,res)=>{
  let {quantity,amount,orderitem}=req.body;
  let createnew=await pastorderproduct.create({
    quantity,
    amount,
    orderitem    

  })
  return res.status(200).json({ success: true, msg: "item created successfully", createnew })

}

const pastorderdata=async(req,res)=>{
  try {
    
    const getItem=await pastorderproduct.find()
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
  pastorder,
  pastorderdata
  }