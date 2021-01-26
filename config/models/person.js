const mongoose=require('mongoose');
const schema=mongoose.Schema


//Create a person having this prototype:
const personSchema = new schema ({
    name:{
        type:String,
        required:true,
        default:"someone"
    },
    age:{
        type:Number,
        default:" xx years old "
    }, 
    favoriteFood:{
        type:[string],
         default: undefined
    }
})

var Person = mongoose.model('eater', personSchema);



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

let manyPeople=[
    {name:"Ahmed", age:25, favoriteFood:["pasta", "humberger", "pizza"]},
    {name:"Mohamed", age:21, favoriteFood:["pasta", "tacos", "sandwitch"]},
    {name:"Mahmoud", age:15, favoriteFood:["candy", "sushi"]}
]

//Create Many Records with model.create()
var createManyPeople = function(manyPeople, done){
    
Person.create(manyPeople,(error,data))

     {
       if (error){
         return done(error);
       }else 
       {return done(null, data) 
           }
     };
   };

module.exports=Person