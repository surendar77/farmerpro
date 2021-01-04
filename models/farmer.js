const mongoose=require("mongoose");

const schema=mongoose.Schema;

const farmerSchema=new schema({
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
    },
    password:{
        type:String,
        
        required:[true,'password is required']
    },
    phno:{
        type:String,
        required:[true,'Phno is required']
    },
    balance:{
        type:String,
        required:[true,'balance is required']
    },
    farmerid:{
        type:String,
        required:[true,'farmerid is required']
    }
});

const farmer=mongoose.model('farmer',farmerSchema);
module.exports=farmer