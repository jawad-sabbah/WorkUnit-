const express = require('express');
const router = express.Router();
const layoutController=require('../controllers/layoutController')
const { requireAuth } = require('../middlewares/authMiddleware');

router.get('/', requireAuth,layoutController.showLayout );


module.exports = router;