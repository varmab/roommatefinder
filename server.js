var express=require("express");
var app=express();

var users=require('./routes/users')
var requests=require('./routes/requests')

var bodyParser=require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.send("Welcome to Roommate Finder Server");
})

app.use("/api/users",users);
app.use('/api/roommaterequests',requests)

app.listen(8800,()=>{
    console.log("Roommate Finder server is started")
})