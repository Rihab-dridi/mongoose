const express= require('express')
const connectDB = require('./config/connectBD')
const app=express()
const port=process.env.Port||5000


connectDB()

app.listen(port, (error)=>{
    error? console.error():
    console.log(`server is running on ${port}`)
})