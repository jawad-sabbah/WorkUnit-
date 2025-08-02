const express = require('express');
const router = express.Router();
const projectController=require('../controllers/projectController')
const {requireAuth}=require('../middlewares/authMiddleware')

router.get('/',requireAuth,projectController.showProjects)

router.get('/new',requireAuth,projectController.showAddProject)

router.post('/',requireAuth,projectController.CreateProject)

router.get('/:id',requireAuth,projectController.showProjectInfo)

router.get('/:id/tasks/new',requireAuth,projectController.showAddTask)

router.post('/:id/tasks',requireAuth,projectController.CreateTask)

router.get('/:projectId/tasks/:taskId/edit', requireAuth, projectController.ShowEditTask);

module.exports = router;