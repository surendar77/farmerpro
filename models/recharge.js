const mongoose=require("mongoose");

const schema=mongoose.Schema


const cusrecharge=new schema({
    userid:{
        type:String,
        required:[true,'userid is required']
    },
    amount:{
        type:String,
        required:[true,'amount is required']
    },

    refno:{
        type:String,
        required:[true,'refno is required']
    },
    status:{
        type:String,
        required:[true,'status is required']
    }
});

    const recharge=mongoose.model('recharge',cusrecharge);
    module.exports=recharge