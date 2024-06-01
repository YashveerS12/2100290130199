const mongoose =require("mongoose");
const Schema=mongoose.Schema;

const companySchema=new Schema({
    companyName:{
        type:String,
    },
    categories:{
        type:String,
    },
    productName:{
        type:String,

    },
    price:{
        type:Number,
       
    },
    rating:{
        type:String,
       
    },
    discount:{
        type:Number,
        
    },
    availability:{
        type:String,
       
    }
})

const Company=mongoose.model("Company",companySchema);
module.exports=Company;