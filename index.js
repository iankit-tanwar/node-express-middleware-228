const express = require('express');
const app = express();
require('dotenv').config()

const PORT = process.env.PORT
//console.log(process.env)

app.get(`/students`,(req,res,next)=>{

    console.log(req.query.name.toUpperCase());
    req.query.name =req.query.name.toUpperCase();
   //req.query.name = "kunal"
    next();
},(req,res)=>{
    

 //console.log(req.query.name)
 let name = req.query.name;

 res.json({
    "msg":name
 })

})

app.listen(PORT,()=>{
    console.log(`this server is working ${PORT}` )
})