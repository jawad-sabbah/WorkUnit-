const express = require('express');
const router = express.Router();
const projectController=require('../controllers/projectController')
const {requireAuth}=require('../middlewares/authMiddleware')

router.get('/',requireAuth,projectController.showProjects)

router.get('/new',requireAuth,projectController.showAddProject)

router.post('/',requireAuth,projectController.CreateProject)

module.exports = router;