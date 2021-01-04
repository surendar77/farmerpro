const mongoose=require("mongoose");

const schema=mongoose.Schema;

const productSchema=new schema({
    id:{
        type:String,
        required:[true,'id is required']
    },
    name:{
        type:String,
        required:[true,'Name is required']
    },
    price:{
        type:String,
        required:[true,'price is required']
    },
    quantity:
    {
        type:String,

        required:[true,'quantity  is required']
    },
    imgurl:{
        type:String,
        
        required:[true,'image is required']
    },
    
    pestfree:{
        type:String,
        required:[true,'pestfree is required']
    },
    category:{
        type:String,
        required:[true,'category is required']
    },
    dom:{
        type:String,
        required:[true,'dom is required']
    },
    natural:{
        type:String,
        required:[true,'natural is required']
    },
    organic:{
        type:String,
        required:[true,'organic is required']
    },
    expdate:{
        type:String,
        required:[true,'expdate is required']
    },
        orgpermited:{
        type:String,
        required:[true,'orgpermited is required']
    },
});

const product=mongoose.model('product',productSchema);
module.exports=product