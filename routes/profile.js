const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const { requireAuth } = require('../middlewares/authMiddleware');

router.get('/', requireAuth, profileController.showProfile);

module.exports = router;
