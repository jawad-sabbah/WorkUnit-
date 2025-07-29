const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');
const { requireAuth } = require('../middlewares/authMiddleware');

router.get('/', requireAuth, async (req, res) => {
  const userId = req.session.user.id;
  const user = await userModel.findById(userId);
  res.render('layout', { user });
});

module.exports = router;