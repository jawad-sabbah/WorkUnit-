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
      res.send('this user not exist please Register');
    }
    
      const hashedPassword=findUser.password;
      const PasswordIsMatch= await bcrypt.compare(password,hashedPassword);

       if (PasswordIsMatch) {
          res.send('login succsefully!')
       }
       else{
        res.send('incorrect Password!')
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
    
    const hashPassword=await bcrypt.hash(password,10)
    const newUser=await userModel.createUser(username,email,hashPassword);
    
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/auth/login');
  });
};
