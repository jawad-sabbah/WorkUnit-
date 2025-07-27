const express=require('express');
const session = require('express-session');
const userModel = require('./models/userModel');


const app=express();
const port=3000;

app.use(session({
  secret: 'your-secret-key', // change this to something strong in production
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // set to true only if using HTTPS
}));




app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

const authRoutes = require('./routes/auth');
//const dashboardRoutes = require('./routes/dashboard');
//const projectRoutes = require('./routes/projects');
//const adminRoutes = require('./routes/admin');

app.use('/auth', authRoutes);
//app.use('/dashboard', dashboardRoutes);
//app.use('/projects', projectRoutes);
//app.use('/admin', adminRoutes);
 

//For MiddleWare
const { requireAuth } = require('./middlewares/authMiddleware');


// Protected route
app.get('/layout', requireAuth, async (req, res) => {
  const user = await userModel.findById(req.session.userId);
  res.render('layout', { user });
});


app.get("/",(req,res)=>{
  res.render("home")
})



app.listen(port,()=>{
  console.log(`server start at localhost:${port}`);
})