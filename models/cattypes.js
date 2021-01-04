const mongoose=require("mongoose");

const schema=mongoose.Schema;

const cattypeSchema=new schema({
  
    catid:{
        type:String,
        required:[true,'Name is required']
    },

   name:{
        type:String,
        required:[true,'Name is required']
    },
    
});

const cattype=mongoose.model('cattype',cattypeSchema);
module.exports=cattype