const projectModel=require('../models/projectModel');
const taskModel=require('../models/taskModel');


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

exports.showProjectInfo=async (req,res) => {
  try {
       const id=req.params.id;
       
       const project=await projectModel.getProjectById(id)
       const tasks=await taskModel.getAllTaskForSpeacificProject(id);

    res.render('projects/show',{
      project,
      tasks
    })
  } catch (error) {
    console.log(error);
  }
}

exports.showAddTask=async (req,res) => {
  try {
    
    const id=req.params.id;
    const project=await projectModel.getProjectById(id)

    res.render('projects/tasks/newTask',{
      project
    })

  } catch (error) {
    console.log(error);
  }
}

exports.CreateTask=async (req,res) => {
  try {
        const currentUserId=req.session.user.id;
        const currentProjectId=req.params.id;
        const{title,status,description}=req.body

        if (!title || !description || !status) {
          req.flash('error', 'All fields are required.');
          return res.redirect(`/projects/${currentProjectId}/tasks/new`);
        }


        await taskModel.CreateTask(title,description,status,currentProjectId,currentUserId)
        
        //redirect to current project
        res.redirect(`/projects/${currentProjectId}`) 

  } catch (error) {
    console.log(error);
  }
}


exports.ShowEditTask=async (req,res) => {
  
  try {
    const Pid=req.params.projectId;
    const project=await projectModel.getProjectById(Pid)

    const taskId=req.params.taskId
    const task=await taskModel.getOneTaskById(taskId)

    
    res.render('projects/tasks/editTask',{
      project,
      task
    })
  } catch (error) {
    console.log(error);
  }
}