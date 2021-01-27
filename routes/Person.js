const express=require('express');
const router=express.Router();
const Person=require('../models/person')





//Create and Save a Record of a Model
var createAndSavePerson = function(done){
  let Mishel= new Person({name:"Mishel", age:25, favoriteFood:["tacos", "pizza", "sushi"]})
   Mishel.save(function(err, data){
     if (err){
       return done(err);
     }else 
     {return done(null, data) 
         console.log(Mishel)}
   });
 };
 
 let arrayOfPeople=[
     {name:"Ahmed", age:25, favoriteFood:["pasta", "humberger", "pizza"]},
     {name:"Mohamed", age:21, favoriteFood:["pasta", "tacos", "sandwitch"]},
     {name:"Mahmoud", age:15, favoriteFood:["candy", "sushi"]}
 ]
 
 //Create Many Records with model.create()
 var createManyPeople = function(arrayOfPeople, done){
     
 Person.create(arrayOfPeople,(error,data))
 
      {
        if (error){
          return done(error);
        }else 
        {return done(null, data) 
            }
      };
    };
  
    
 //add person
 // http://localhost:5000/people/add
 // testing  purpose 
 router.post('/add',(req,res)=>{
  const {name, email, phone }=req.body
  const newPerson= new Person({
      name,phone,email
  })
  newPerson.save()
  .then(Person=>res.send(Person))
  .catch((err=>console.log(err))) 
})


//Use model.find() to Search Your Database
Person.find({name:"Rihab"}, 
(err,data)=>{
  err? console.log(err):
  console.log(data)
})

//Use model.findOne() to Return a Single Matching Document from Your Database
const findOnePerson=function(food,done){
  Person.findOne({favoriteFood:{$all:[food]}},(error,data)=>{
    if (error){console.log(error)}
    else{
      done(null,data)
    }
  })
}


//Use model.findById() to Search Your Database By _id
const findOnePersonById=function(ID,done){
  Person.findOnePersonById (ID,(error,data)=>{
    if (error){console.log(error)}
    else{
      done(null,data)
    }
  })
}





//test
// http://localhost:5000/people/test

 router.get('/test', async (req,res)=>{
    
     try {
          await (res.send("test"))
     } catch (error) {
         console.log(error)
     }
 })

 module.exports=router
