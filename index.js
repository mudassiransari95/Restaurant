
const express=require('express')

const app=express()
const port=5600
const cors=require('cors')
const connectToDb = require('./config/db')
const router = require('./routes/route')




connectToDb()

app.use(cors())

app.use(express.json())

app.use('/api',router)

app.use('/',(req,res)=>{
    res.send('welcome home page')
})

app.listen(port,()=>{
console.log(`server is running on port : ${port}`)
})