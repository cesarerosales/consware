const express = require('express');
const TaskController = require('.../controllers/TaskController');
const router = express.Router();

router.get('/tasks', TaskController.index);
router.get('/create', TaskController.create);

module.exports = router;

