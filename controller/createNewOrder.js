let neworderproduct=require('../models/newOrderSchema')
let neworder=async(req,res)=>{
  let {quantity,amount,orderitem}=req.body;
  let createnew=await neworderproduct.create({
    quantity,
    amount,
    orderitem    

  })
  return res.status(200).json({ success: true, msg: "item created successfully", createnew })

}

const findItem=async(req,res)=>{
  try {
    
    const getItem=await neworderproduct.find()
    res.status(200).json({
      data:getItem,
      success:true,
      error:false,
      message:'have gotted all data'
    })

  } catch (error) {
    res.json({
      error:error.message,
      success:false,
      // error:true
    })
  }
}

module.exports={
  neworder,
  findItem
  }