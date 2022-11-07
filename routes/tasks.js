// const express = require('express');
// // const app = express();
// const router = express.Router();
// const { getAllTasks, createTask, getTask, updateTesk, deleteTask } = require('../controllers/tasks')

// router.route('/').get(getAllTasks).post(createTask);
// router.route('/:id').get(getTask).patch(updateTesk).delete(deleteTask);

// module.exports = router;

// Making routes again


const express = require('express');
const router = express.Router();
const { getAllTasks,createTask,getTask,updateTesk,deleteTask} = require('../controllers/tasks')


router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTesk).delete(deleteTask);

module.exports = router;
