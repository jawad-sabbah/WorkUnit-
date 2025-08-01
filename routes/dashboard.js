const express = require('express');
const router = express.Router();
const dashboardController=require('../controllers/dashboardController')
const { requireAdmin } = require('../middlewares/authMiddleware');


router.get('/',requireAdmin,dashboardController.showDashboard)

router.get('/users/:id/edit',requireAdmin,dashboardController.showEditUser)

router.post('/users/:id/edit',requireAdmin,dashboardController.updateUserByAdmin)

router.delete('/users/:id',requireAdmin,dashboardController.DeleteUserByAdmin)


router.get('/projects/:id/edit',requireAdmin,dashboardController.showEditProject)

router.post('/projects/:id/edit',requireAdmin,dashboardController.updateProjectByAdmin)

router.delete('/projects/:id',requireAdmin,dashboardController.DeleteProjectByAdmin)

module.exports=router