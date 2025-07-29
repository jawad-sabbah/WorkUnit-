const projectModel=require('../models/projectModel')
const userModel=require('../models/userModel')


exports.showProfile = async (req, res) => {
  try {
    const userId = req.session.user.id;
    
     
    const user = await userModel.findById(userId); // fetch user data from DB
    const numOfProject =await projectModel.getNumberOfProject(userId)
    console.log(numOfProject);
    
    res.render('profile', { user,numOfProject:numOfProject.count  });
  } catch (err) {
    console.error('Profile error:', err);
    res.status(500).send('Internal Server Error');
  }
};