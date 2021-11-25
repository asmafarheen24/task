var express = require("express");

const bodyparser=require('body-parser');
const app = express();
app.use(express.static(__dirname));

app.get("/", function(req, res){
    console.log("hello");
    
    res.sendFile(__dirname+"/html/index.html");
})  
app.get("/a13", function(req, res){
    
    
    res.sendFile(__dirname+"/html/assignment13.html");
})  
app.get("/a10", function(req, res){
    
    
    res.sendFile(__dirname+"/html/assignment10.html");
})  
app.get("/a12", function(req, res){
    
    
    res.sendFile(__dirname+"/html/assignment12.html");
})  
app.get("/t13", function(req, res){
    
    
    res.sendFile(__dirname+"/html/nov13.html");
})  
app.get("/t11", function(req, res){
    
    
    res.sendFile(__dirname+"/html/nov11.html");
})  
app.get("/t10", function(req, res){
    
    
    res.sendFile(__dirname+"/html/nov10.html");
})  
app.get("/sd", function(req, res){
    
    
    res.sendFile(__dirname+"/html/sassdemo.html");
})  
app.get("/a9", function(req, res){
    
    
    res.sendFile(__dirname+"/html/assignment9.html");
}) 
app.get("/a9", function(req, res){
    
    
    res.sendFile(__dirname+"/html/assignment9.html");
})  
var port=process.env.PORT||3000;
app.listen(port, function()
{
    console.log("Server Starting running on http://localhost:"+port);
});