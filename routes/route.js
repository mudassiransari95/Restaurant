const express=require('express')
const addcategory = require('../controller/AddCategory')
const addItemlist = require('../controller/AddItemlist')
const AddNewItem = require('../controller/AddNewItems')
const CreateDeliveryArea = require('../controller/CreatDeliveryArea')
const createInfo = require('../controller/CreateInfo')
const CreateOffer = require('../controller/CreateOffer')
const createProfile = require('../controller/createProfile')
const deleteItem = require('../controller/deleteaddItem')
const editAddItem = require('../controller/EditAddItem')
const getAlldata = require('../controller/getAllDelivery')
const OfferItemlist = require('../controller/Offerlist')
const UpdateInfo = require('../controller/UpdateInfo')
const UpdateProfile = require('../controller/UpdateProfile')
const { registerUser, loginUser } = require('../controller/UserUath')
const { neworder, findItem } = require('../controller/createNewOrder')
const { ongoingorder, ongoingalldata } = require('../controller/ongoingOrder')
const { pastorder, pastorderdata } = require('../controller/pastOrder')
const createNotification = require('../controller/CreateNotification')
const getallnotificationlist = require('../controller/getAllNotification')
const createReview = require('../controller/CreateReview')
const getallReview = require('../controller/getallReview')

const router=express.Router()

router.post('/addcategory',addcategory)
router.get('/addItem',addItemlist)
router.post('/addNewItem',AddNewItem)
router.post('/createdeliveryarea',CreateDeliveryArea)
router.post('/createinfo',createInfo)
router.post('/CreateOffer',CreateOffer)
router.post('/createProfile',createProfile)
router.delete('/deleteItem',deleteItem)
router.put('/editAddItem',editAddItem)
router.put('/UpdateInfo',UpdateInfo)
router.put('/UpdateProfile',UpdateProfile)
router.get('/getAlldata',getAlldata)
router.get('/OfferItemlist',OfferItemlist)



// user signin
router.post('/register', registerUser)
// user login
router.post('/login', loginUser)

//present  item details
router.post('/neworder', neworder)
router.get('/newordergealldata', findItem)

//ongoing  item details
router.post('/ongoing',ongoingorder)
router.get('/ongoingalldata',   ongoingalldata)

//past auth details
router.post('/pastorder', pastorder)
router.get('/pastalldata',   pastorderdata)
router.post('/createNotification',   createNotification)
router.get('/getallnotificationlist',   getallnotificationlist)

router.post('/createReview',   createReview)
router.get('/getallReview',   getallReview)
// delivery area selection 



// router add area 




module.exports=router