const express = require("express");
const routes=require("./api.js");
const bodyparser=require("body-parser");
const mongoose=require('mongoose');
const app=express();
const cors = require('cors');

mongoose.connect('mongodb+srv://suren:Suren_77@cluster0.7nihh.mongodb.net/farmers',{ useNewUrlParser: true, useUnifiedTopology: true },function(error){
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log("connected to database");
    }

})

app.use(bodyparser.json());

app.use(cors());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
app.use("/api",routes);

  
  

app.listen(5000,function(){
    console.log("port listening on port 5000");
});
