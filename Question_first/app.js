const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Company=require("./models/company.js");
const axios = require('axios');
const path=require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));



const MONGO_URL="mongodb://127.0.0.1:27017/addord";
main().then(()=>{
    console.log("Connected to db");
}).catch(err=>{
    console.log(err);
})
async function main(){
await mongoose.connect(MONGO_URL);
}

app.get("/company",async(req,res)=>{
res.render("input.ejs");
});
app.post("/company",async (req,res)=>{
    const company=new Company(req.body);
    await company.save();
    res.send("Data saved");
    console.log(company);
})

app.get('company/categories/productName/:productid', async (req, res) => {
    try {
        const { company,categoryname, productid } = req.params;
        const product = await axios.get(`http://20.244.56.144/abbord/company/${categoryname}/products/${productid}`);
        res.json(product.data);
    } catch (error) {
        console.error('Error fetching product details:', error);
        res.status(500).send('Error fetching product details.');
    }
});
app.listen(8080,()=>{
    console.log("Server is listening");
})