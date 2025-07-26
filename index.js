import express from "express";



const app=express();
const port=3000;


app.set('view engine', 'ejs'); 


app.get("/",(req,res)=>{
  res.render("home")
})



app.listen(port,()=>{
  console.log(`server start at localhost:${port}`);
})