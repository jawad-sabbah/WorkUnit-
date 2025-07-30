const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');



exports.showLogin = (req, res) => {
  res.render('auth/login');
};

exports.handleLogin = async(req, res) => {
  const {username,password}=req.body;

  try {
    const findUser=await userModel.findByUserName(username);
   
    
    if (!findUser) {
     return res.render('./auth/login',{
      error:'User not Exist'
     });
    }
    
      const hashedPassword=findUser.password;
      const PasswordIsMatch= await bcrypt.compare(password,hashedPassword);

       if (PasswordIsMatch) {
 
      //Store user ID in session after login   
      req.session.user={
        id:findUser.id,
        username:findUser.username,
        role:findUser.role
      }
 
       return res.redirect('/layout') 
       
       }
       else{
        res.render('./auth/login',{
          error:'Inccorect Password '
        })
       }
     

  } catch (err) {
     console.log(err);
  }
};

exports.showRegister = (req, res) => {
  res.render('auth/register');
};

exports.handleRegister = async(req, res) => {
  
  const {username,email,password}=req.body;

  try {
    
    const UserNameExist=await userModel.findByUserName(username);
     //UserNameExist know is Object
     
       if (UserNameExist) {
         res.render('./auth/register',{
          error:'username already taken'
         })
       }

      const hashPassword=await bcrypt.hash(password,10);
      await userModel.createUser(username,email,hashPassword);
    
    res.render('layout',{
      user:UserNameExist
    })
  } catch (error) {
    console.log(error);
  }
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/auth/login');
  });
};
