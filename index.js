const express=require('express');

const app=express();
const port=3000;



app.set('view engine', 'ejs');

const authRoutes = require('./routes/auth');
//const dashboardRoutes = require('./routes/dashboard');
//const projectRoutes = require('./routes/projects');
//const adminRoutes = require('./routes/admin');

app.use('/auth', authRoutes);
//app.use('/dashboard', dashboardRoutes);
//app.use('/projects', projectRoutes);
//app.use('/admin', adminRoutes);
 


app.get("/",(req,res)=>{
  res.render("home")
})



app.listen(port,()=>{
  console.log(`server start at localhost:${port}`);
})