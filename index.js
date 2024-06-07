const express=require("express");///importing the express library for which we have to run code on terminal inorder to use it from the internet
const app=express();

const port=3000;
//just like fs.readfile("path",ytf-8,callback)
app.get("/",function(req,res){
    res.send("hello world");
    //here res is the callback function which will hit whenever the server is hit 
});
app.listen(port);
