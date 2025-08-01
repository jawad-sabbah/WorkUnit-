const projectModel=require('../models/projectModel');



exports.showProjects=async (req,res) => {
  try {
       const projects=await projectModel.getAllProject();
       const search='';

    res.render('projects/list',{
      projects,
      search
    })
  } catch (error) {
    console.log(error);
  }
}

exports.showAddProject=async (req,res) => {
  try {
    res.render('projects/addProject')
  } catch (error) {
    console.log(error);
  }
}

exports.CreateProject=async (req,res) => {
  try {
    
    const currentUserId=req.session.user.id;
    const {title,description,deadline}=req.body;
    await projectModel.CreateProject(title,description,currentUserId,deadline);

    res.redirect('/layout')
     

  } catch (error) {
    console.log(error);
  }
}