const userModel=require('../models/userModel')
const projectModel=require('../models/projectModel');


exports.showDashboard=async (req,res) => {
  try {

       const users=await userModel.getAllUsers();
       const project=await projectModel.getAllProject();         

     res.render('dashboard/dashboard',{
      users:users,
      projects:project
     })

  } catch (error) {
    console.log(error);
  }
}