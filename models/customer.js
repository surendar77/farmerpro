const mongoose=require("mongoose");

const schema=mongoose.Schema;

const customerSchema=new schema({
    name:{
        type:String,
        required:[true,'Name is required']
    },
    lname:{
        type:String,
        required:[true,'Last Name is required']
    },
    emailid:
    {
        type:String,
        required:[true,'Emailid  is required']
    },password:
    {
        type:String,
        required:[true,'password  is required']
    }, phno:{
        type:String,
        required:[true,'Phno is required']
    },
    balance:{
        type:String,
        required:[true,'balance is required']
    }
});

const customer=mongoose.model('customer',customerSchema);
module.exports=customer