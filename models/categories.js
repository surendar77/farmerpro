const mongoose=require("mongoose");

const schema=mongoose.Schema;

const catSchema=new schema({
   
    name:{
        type:String,
        required:[true,'Name is required']
    },
   
});

const cat=mongoose.model('cat',catSchema);
module.exports=cat