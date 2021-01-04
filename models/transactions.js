const mongoose=require("mongoose");

const schema=mongoose.Schema;

const transschema=new schema({

    userid:{
        type:String,
        required:[true,'userid is required']
    },
    proid:{
        type:String,
        required:[true,'proid is required']
    },
    proname:{
        type:String,
        required:[true,'proid is required']
    },
    farmerid:
    {
        type:String,

        required:[true,'farmerid  is required']
    },
    amount:{
        type:String,
        
        required:[true,'amount is required']
    },
    datetime:{
        type:String,
        required:[true,'datetime is required']
    },
    hash:{
        type:String,
        required:[true,'hash is required']
    },
    previousHash:{
        type:String,
        required:[true,'prehash is required']
    }
    

});

const trans=mongoose.model('trans',transschema);
module.exports=trans;