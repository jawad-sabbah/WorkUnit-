const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const { requireAuth } = require('../middlewares/authMiddleware');

router.get('/', requireAuth, profileController.showProfile);

router.get('/edit',profileController.showEdit);

router.post('/edit',requireAuth,profileController.updateProfile)

module.exports = router;
