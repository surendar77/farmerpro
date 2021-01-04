const mongoose=require("mongoose");

const schema=mongoose.Schema;

const notifyschema=new schema({

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
    message:{
        type:String,
        
        required:[true,'message is required']
    },
    
    

});

const notify=mongoose.model('notify',notifyschema);
module.exports=notify;