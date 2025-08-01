const userModel = require('../models/userModel');
const projectModel=require('../models/projectModel')

exports.showLayout=async (req, res) => {
  const userId = req.session.user.id;

  const user = await userModel.findById(userId);
  const body='';
  const projects=await projectModel.getProjectForloggedinUser(userId);

  res.render('layout', { user,body,projects })
};