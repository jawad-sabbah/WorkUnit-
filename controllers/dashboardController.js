const userModel=require('../models/userModel')
const projectModel=require('../models/projectModel');


exports.showDashboard=async (req,res) => {
  try {
      
       let users;
       let project;   
       
       //search for specific username,project
       const search= req.query.search || '';
       const projectSearch=req.query.projectSearch || '';


       //if there is search Operation so only search result appear
       if (search) {
       users= await userModel.searchByUsername(search)
       }
       else{
        users=await userModel.getAllUsers();
       }
       

      if (projectSearch) {
        project=await projectModel.searchByProjectName(projectSearch);
      }
      else{
         project=await projectModel.getAllProject();  
      }


     res.render('dashboard/dashboard',{
      users:users,
      projects:project,
      search,
      projectSearch
     })

  } catch (error) {
    console.log(error);
  }
}

exports.showEditUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userModel.findById(userId); 

    if (!user) {
      return res.status(404).send('User not found');
    }

    res.render('dashboard/users/editUser', { user });
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
}


exports.updateUserByAdmin=async (req,res) => {
  try {
    const userId = req.params.id;
    const {username,email,role}=req.body
  
     if (!username || !email || !role) {
      return res.status(400).send('All fields are required.');
    }
    
  
    await userModel.updateUserByAdmin(userId,username,email,role);

  

    res.redirect('/dashboard')
    
  } catch (error) {
    console.log(error);
  }
}

exports.DeleteUserByAdmin=async (req,res) => {
  try {
     const userId = req.params.id;
     await userModel.RemoveUserByAdmin(userId)

     res.redirect('/dashboard')

  } catch (error) {
    console.log(error);
  }
}


exports.showEditProject=async (req,res) => {
  try {
    const projectId=req.params.id;
    const project=await projectModel.getProjectById(projectId);
    
    
   //always send object not array
    res.render('dashboard/projects/editProject',{
      project
    })
    
  } catch (error) {
    console.log(error);
  }
}

exports.updateProjectByAdmin=async (req,res) => {
  try {
    const projectId=req.params.id;
    const{name,description}=req.body

    await projectModel.updateProjectByAdmin(projectId,name,description)

    res.redirect('/dashboard')

  } catch (error) {
    console.log(error);
  }
}

exports.DeleteProjectByAdmin=async (req,res) => {
  
  try {
    const projId=req.params.id;
    await projectModel.RemoveProjectById(projId);

    res.redirect('/dashboard')
    
  } catch (error) {
    console.log(error);
  }
}

