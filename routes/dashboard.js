const express = require('express');
const router = express.Router();
const dashboardController=require('../controllers/dashboardController')
const { requireAdmin } = require('../middlewares/authMiddleware')

router.get('/',requireAdmin,dashboardController.showDashboard)

module.exports=router