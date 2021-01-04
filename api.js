const express = require("express");
const router=express.Router();
const farmer=require('./models/farmer');
const customer=require('./models/customer');
const product=require('./models/product');
const trans=require('./models/transactions');
const {BlockChain,Block} =require('./blockchain')
const recharge=require('./models/recharge');
const bcrypt = require("bcryptjs");
const cat=require('./models/categories');
const cattype=require('./models/cattypes');


router.post("/farmers",function(req,res){
  const {
    name,
    lname,emailid,
    password,phno
        } = req.body;
       
far=new farmer({name,
  lname,emailid,
  password:bcrypt.hashSync(req.body.password, 8),phno,balance:"0"});  

 farmer.findOne({emailid:emailid},function(err,existinguser){
   if(existinguser==null)
   {
    farmer.create(far,function(err,doc){
      res.json(doc);
    });
   }else
   {
     res.json(null);
   }
 })
});

router.post("/cateadd",function(req,res){
  const { name  
        } = req.body;

catadd=new cat({name});  
cat.findOne({name:name},function(err,existinguser){
   if(existinguser==null)
   {
    cat.create(catadd,function(err,doc){
      res.json(doc);
    });
   }else
   {
     res.json(null);
   }
 });
});


router.post("/cateup",function(req,res){
   const {userid,name}=req.body;
  cat.findOne({_id:userid},function(err,existinguser){
    
   
        if(existinguser)
        {
          cat.update({_id:userid},{
            name:name
          },function(err,resp){ 
             res.send("updated");
          });
        }else
        {
          return res.json({"message":"failed"});
        }  
  });
  });



  router.post("/catetypeup",function(req,res){
    const {userid,name}=req.body;
    cattype.findOne({_id:userid},function(err,existinguser){
     
    
         if(existinguser)
         {
           cattype.update({_id:userid},{
             name:name
           },function(err,resp){ 
              res.send("updated");
           });
         }else
         {
           return res.json({"message":"failed"});
         }  
   });
   });



   router.post("/catedel",function(req,res){
    const {userid}=req.body;
   cat.findOne({_id:userid},function(err,existinguser){
     
    
         if(existinguser)
         {
           cat.remove({_id:userid},{
            
           },function(err,resp){ 
              res.send("deleted");
           });
         }else
         {
           return res.json({"message":"failed"});
         }  
   });
   });
 
   router.post("/getcatebyid",function(req,res){
    const {
      userid
  } = req.body;
  cat.find({_id:userid},function(err, existinguser){
    
   
        if(existinguser)
        {
          return res.json(existinguser);
        }else
        {
          return res.json({"message":"failed"});
        }
       
  
  });
  });
  
 
   router.post("/catetypedel",function(req,res){
     const {userid}=req.body;
     cattype.findOne({_id:userid},function(err,existinguser){
      
     
          if(existinguser)
          {
            cattype.remove({_id:userid},{
             
            },function(err,resp){ 
               res.send("deleted");
            });
          }else
          {
            return res.json({"message":"failed"});
          }  
    });
    });
 




router.get("/getcateg",function(req,res){

  cat.find({},function(err, existinguser){
    
   
        if(existinguser)
        {
          return res.json(existinguser);
        }else
        {
          return res.json({"message":"failed"});
        }  
  });
  });


  
router.get("/getcatetype",function(req,res){

  cattype.find({},function(err, existinguser){
    
   
        if(existinguser)
        {
          return res.json(existinguser);
        }else
        {
          return res.json({"message":"failed"});
        }  
  });
  });





router.post("/catetype",function(req,res){
  const { catid,name  
        } = req.body;

cattypeadd=new cattype({catid,name});  
cattype.findOne({name:name},function(err,existinguser){
   if(existinguser==null)
   {
    cattype.create(cattypeadd,function(err,doc){
      res.json(doc);
    });
   }else
   {
     res.json(null);
   }
 });
});

router.post("/customer",function(req,res){ 
  const {
    name,
    lname,emailid,
    password,phno
} = req.body;

console.log(req.body);

cur=new customer({name,
  lname,emailid,
  password:bcrypt.hashSync(req.body.password, 8),phno,balance:"0"});   

 
 

 customer.findOne({emailid:emailid},function(err,existinguser){
   if(existinguser==null)
   {
    customer.create(cur,function(err,doc){
      res.json(doc);
    });
   }else
   {
     res.json(null);
   }
 })
});


router.post("/farmerprofile",function(req,res){
 
  console.log(req.body);
  farmer.findOne({_id:req.body.id},function(err,existinguser){
    if(existinguser==null)
    {
      res.json(null);
    }else
    {
      return res.json({"data":{"name":existinguser.name,"lname":existinguser.lname,"emailid":existinguser.emailid,
      "phno":existinguser.phno,"balance":existinguser.balance,"farmerid":existinguser.farmerid}})
    }
  });
});

router.post("/customerprofile",function(req,res){
 
  console.log(req.body);
  customer.findOne({_id:req.body.id},function(err,existinguser){
    if(existinguser==null)
    {
      res.json(null);
    }else
    {
      
      return res.json({"data":{"name":existinguser.name,"lname":existinguser.lname,"emailid":existinguser.emailid,"phno":existinguser.phno,"balance":existinguser.balance}})
    }
  });
});


router.post("/farmerlog",function(req,res){
  const {
   emailid,
    password
} = req.body;
farmer.findOne({emailid:emailid},function(err,existinguser){
  if(existinguser==null)
  {
    res.json(null);
  }else
  {
 
    bcrypt.compare(password, existinguser.password, function(err, result) {
      if(result)
      {
        //console.log(existinguser._id);
        return res.json({"message":"success","id":existinguser._id});
      }else
      {
        return res.json({"message":"failed"});
      }
     
  });

  }

  


  
});
});    


router.post("/customerlog",function(req,res){
  const {
   emailid,
    password
} = req.body;
customer.findOne({emailid:emailid},function(err,existinguser){
  if(existinguser==null)
  {
    res.json(null);
  }else
  {
 
    bcrypt.compare(password, existinguser.password, function(err, result) {
      if(result)
      {
        return res.json({"message":"success","id":existinguser._id});
      }else
      {
        return res.json({"message":"failed"});
      }
     
  });

  }

  


  
});
});



router.post("/recharge",function(req,res){
  const{userid,amount,refno}=req.body;
  
  
  rec=new recharge({userid,amount,refno,status:"pending"});
  recharge.findOne({refno:refno},function(err,existinguser){
  if(existinguser==null){
   recharge.create(rec,function(err,doc){
     res.json(doc);
   });
  }
  else{
    res.json(null);
  }
  });
  
  
  
  });
  

router.post("/rechargeup",function(req,res){
  const {
   userid,amount
   
} = req.body;

customer.findOne({_id:userid},function(err,existinguser){
  if(existinguser)
  {
   var x=Number(existinguser.balance);
   var bal=x+Number(req.body.amount);

     customer.update({_id:userid},{
       balance:bal
     },function(err,resp){ 
     
     });

   
   
  }
});


recharge.findOne({userid:userid},function(err,existinguser1){

if(existinguser1){
  recharge.update({userid:userid},{
    status:"approved"
  },function(err,resp){

  });
}

});

res.json({"message":"success","id":userid})



});


router.post("/product",function(req,res){
  const {
   id,name,price,quantity,imgurl,pestfree,dom,expdate,category,natural,
   organic,orgpermited
        } = req.body;
pro=new product({id,name,
  price,quantity,
  imgurl,pestfree,dom,expdate,category,natural,
  organic,orgpermited});  

 


 product.create(pro,function(err,doc){
      res.json(doc);
    });
   
 
});


router.get("/getproducts",function(req,res){

product.find({},function(err, existinguser){
  
 
      if(existinguser)
      {
        return res.json(existinguser);
      }else
      {
        return res.json({"message":"failed"});
      }  
});
});


router.get("/getrecharges",function(req,res){

  recharge.find({status:"pending"},function(err, existinguser){
    
   
        if(existinguser)
        {
          return res.json(existinguser);
        }else
        {
          return res.json({"message":"failed"});
        }  
  });
  });


  

router.get("/getfarmers",function(req,res){
  const {
   id
} = req.body;
farmer.find({},function(err, existinguser){
  
 
      if(existinguser)
      {
        return res.json(existinguser);
      }else
      {
        return res.json({"message":"failed"});
      }
   });
});


router.get("/getcustomer",function(req,res){
  const {
   id
} = req.body;
customer.find({},function(err, existinguser){
  
 
      if(existinguser)
      {
        return res.json(existinguser);
      }else
      {
        return res.json({"message":"failed"});
      }
   });
});

router.post("/getproductbyid",function(req,res){
  const {
   id
} = req.body;
product.find({id:id},function(err, existinguser){
  
 
      if(existinguser)
      {
        return res.json(existinguser);
      }else
      {
        return res.json({"message":"failed"});
      }
     

});
});


router.post("/getnotificationbyid",function(req,res){
  const {
   id
} = req.body;
recharge.find({userid:id},function(err, existinguser){
  
 
      if(existinguser)
      {
        return res.json(existinguser);
      }else
      {
        return res.json({"message":"failed"});
      }
     

});
});



router.post("/getrechargebyid",function(req,res){
  const {
   id
} = req.body;
recharge.find({userid:id},function(err, existinguser){
  
 
      if(existinguser)
      {
        return res.json(existinguser);
      }else
      {
        return res.json({"message":"failed"});
      }
     

});
});


router.post("/gettranscusbyid",function(req,res){
  const {
   id
} = req.body;
trans.find({userid:id},function(err, existinguser){
  
 
      if(existinguser)
      {
        return res.json(existinguser);
      }else
      {
        return res.json({"message":"failed"});
      }
     

});
});


router.post("/gettransfarbyid",function(req,res){
  const {
   id
} = req.body;
trans.find({farmerid:id},function(err, existinguser){
  
 
      if(existinguser)
      {
        return res.json(existinguser);
      }else
      {
        return res.json({"message":"failed"});
      }
     

});
});


router.post("/buyproduct",function(req,res){
  const{
   userid,
   proid,
   farmerid,
   amount,
   proname
  }=req.body;

  var datetime = new Date();

  trans.find({},function(err, result){
    if (err) throw err;
   
    if(result.length>0)
    {
     

     trans.find({}).sort({_id:-1}).limit(1).exec(function(err,docs) {
   docs.forEach(function(data){
    prehash=data.hash;
   });
   let blocks=new Block(userid,datetime,{amount:amount});
      hash=blocks.calculateHash();
      //res.send(hash);
      tran=new trans({userid,proid,proname,farmerid,amount,datetime:datetime,previousHash:prehash,hash:hash});
      trans.create(tran,function(err,doc){
        res.json(doc);
      });



      
     });

     customer.findOne({_id:userid},function(err,existinguser){
      if(existinguser)
      {
       var x=Number(existinguser.balance);
       var bal=x-Number(req.body.amount);
    
         customer.updateOne({_id:userid},{
           balance:bal
         },function(err,resp){ 
         
         });
    
       
       
      }
    });

    farmer.findOne({_id:farmerid},function(err,existinguser){
      if(existinguser)
      {
       var x=Number(existinguser.balance);
       var bal=x+Number(req.body.amount);
    
         farmer.updateOne({_id:farmerid},{
           balance:bal
         },function(err,resp){ 
         
         });
    
       
       
      }
    });
   
    }
    else{
     
      let blocks=new Block();
      hash=blocks.calculateHash(userid,datetime,{amount:amount},previousHash='');
      tran=new trans({userid,proid,farmerid,amount,datetime:datetime,previousHash:"0",hash:hash});
    
      trans.create(tran,function(err,doc){
             res.json(doc);
           });

    }
 
  });
});


router.get("/gettransactions",function(req,res){
 
  trans.find({},function(err, existinguser){
    
   
        if(existinguser)
        {
          return res.json(existinguser);
        }else
        {
          return res.json({"message":"failed"});
        }
     });
  });


module.exports=router;