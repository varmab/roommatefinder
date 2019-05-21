var express=require("express");
var router=express.Router();


var verifyToken=require('./verifyToken')
var db=require('../db');

router.route("/")
    .get((req,res)=>{
        db.RoommateRequest.find()
        .then((requests)=>{
            res.status(200).send(requests);
        })
        .catch((err)=>{
            res.status(500).send(err)
        })
    })
    .post(verifyToken,(req,res)=>{
        
        req.body.userId=req.userId;
        
        var newRequest=new db.RoommateRequest(req.body);

        newRequest.save()
        .then((request)=>{
            res.status(200).send(request);
        })
        .catch((err)=>{
            res.status(500).send(err)
        })
    })

router.get("/:area/:city", (req,res)=>{
    var area=req.params.area;
    var city=req.params.city;

    db.RoommateRequest.find({$or : {area:area,city:city}})
    .then((requests)=>{
        res.status(200).send(requests);
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
})


router.route("/myrequests")
    .get(verifyToken,(req,res)=>{
        var loggedInUserId=req.userId;
        console.log("Logged In User ID:" + loggedInUserId)
        
        db.RoommateRequest.find({userId:loggedInUserId})
        .then((requests)=>{
            res.status(200).send(requests);
        })
        .catch((err)=>{
            res.status(500).send(err)
        })
    })

// router.post("/sendmail", (req,res)=>{

// })

module.exports=router;