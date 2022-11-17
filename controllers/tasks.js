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


//GET method getting all tasks which are in DB
const getAllTasks = async (req, res) => {

    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

//POST method sending data in DB 
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).send({ task });
    }
    catch (error) {
        res.status(500).json({ msg: error })
    }
}



//GET method to get a perticular task
const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOne({ _id: taskID })

        if (!task) {
            return res.status(404).json({ msg: `No task with id : ${taskID}` })
        }

        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}



const updateTesk = async (req, res) => {

    try {
        const { id: taskID } = req.params;
        const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
            new: true, 
            runValidators: true
        })

        if (!task) {
            return res.status(404).json({ msg: `No task with id: ${taskID}` })
        }
        res.status(200).json({ task })
    }
    catch (error) {
        res.status(500).json({ msg: error })
    }
    // res.send("task is updated")
}

const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndDelete({ _id: taskID })
        if (!task) {
            return res.status(404).json({ msg: `no task with id: ${taskID}` })
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTesk,
    deleteTask
}