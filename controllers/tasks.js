const Task = require('../models/Task');

// const getAllTasks = (req, res) => {
//     res.send("Get all tasks")
// }

// const createTask = (req, res) => {
//     res.send(req.body);
// }

// const getTask = (req,res)=>{
//     res.send({id:req.params.id});
// }

// const updateTesk = (req, res) =>{
//     res.send({id:req.params.id});
// }

// const deleteTask = (req, res)=>{
//     res.send({id: req.params.id});
// }

// module.exports = {
//     getAllTasks,
//     createTask,
//     getTask,
//     updateTesk,
//     deleteTask
// }

const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).send({task});
}

const getAllTasks = (req,res)=> {
    res.send('Get all data')
}


const getTask = (req, res)=>{
    res.send("Get single task")
}

const updateTesk = (req, res)=>{
    res.send("task is updated")
}

const deleteTask = (req, res) =>{
    res.send('task is deleted');
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTesk,
    deleteTask
}