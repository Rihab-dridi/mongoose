const mongoose=require('mongoose');
const schema=mongoose.Schema


//Create a person having this prototype:
const personSchema = new schema ({
    name:{
        type:String,
        default:"someone"
    },
    age:{
        type:Number,
        default:0000
    }, 
    favoriteFood:{
        type:[String],
         default: undefined
    }
})

module.exports= Person = mongoose.model('Person', personSchema);





