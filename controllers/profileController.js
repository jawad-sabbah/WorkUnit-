const projectModel=require('../models/projectModel')
const userModel=require('../models/userModel')


exports.showProfile = async (req, res) => {
  try {
    const userId = req.session.user.id;
    
     
    const user = await userModel.findById(userId); // fetch user data from DB
    const numOfProject =await projectModel.getNumberOfProject(userId)
   
    
    res.render('profile', { user,numOfProject:numOfProject.count  });
  } catch (err) {
    console.error('Profile error:', err);
    res.status(500).send('Internal Server Error');
  }
};

exports.showEdit=async (req,res) => {
  try {
    const userId = req.session.user.id;
    const user = await userModel.findById(userId);
     
     res.render('profile-crud/editForm',{user})

  } catch (error) {
    console.log(error);
  }
}


exports.updateProfile=async (req,res) => {
  try {
    const {username,email}=req.body
    const userId = req.session.user.id;
    await userModel.updateProfile(userId,username,email);
       
      res.redirect('/layout')

  } catch (error) {
    console.log(error);
  }
}