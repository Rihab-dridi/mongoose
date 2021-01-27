const express= require('express')
const connectDB = require('./config/connectBD')
const routerr=require('./routes/Person')
const app=express()
const port=process.env.Port||5000

//Middelware
app.use(express.json())

//connect the db
connectDB()
//routes  
app.use('/people',routerr)

app.listen(port, (error)=>{
    error? console.error():
    console.log(`server is running on ${port}`)
})