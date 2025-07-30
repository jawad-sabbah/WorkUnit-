const userModel = require('../models/userModel');


exports.showLayout=async (req, res) => {
  const userId = req.session.user.id;
  const user = await userModel.findById(userId);
  res.render('layout', { user })
};