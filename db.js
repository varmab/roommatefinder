var mongoose=require('mongoose');

// var dotEnv=require('dotenv');
// dotEnv.load();

// console.log(process.env.DB_URL)
mongoose.connect('mongodb://localhost:27017/roommatefinder');

mongoose.Promise=global.Promise;

//Create Schema and Model
var userSchema=mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: String,
    phone: String,
    password: String,
    createdDt:{
        type:Date,
        default:Date.now
    }
});

exports.User=mongoose.model("User",userSchema,'users');

//Create schema and modal for roommaterequest

var roommateRequestSchema=mongoose.Schema({
    area:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    rent:{
        type:Number,
        required:true
    },
    roommates:{
        type:String,
        default:1
    },
    userId:mongoose.Schema.Types.ObjectId,
    createdDt:{
        type:Date,
        default:Date.now
    }
})

exports.RoommateRequest=mongoose.model('RoommateRequest',roommateRequestSchema,'requests')