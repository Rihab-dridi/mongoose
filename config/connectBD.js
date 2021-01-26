const mongoose=require('mongoose');

 const connectDB= async()=> {
    try {
        mongoose.connect('mongodb+srv://Rihab:dringdridi@cluster0.uwqpd.mongodb.net/people?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, 
        ()=>console.log('db connected'))
    } catch (error) {
        console.log(error);
    } 
   }

   module.exports=connectDB