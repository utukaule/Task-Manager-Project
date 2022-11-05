

const getAllTasks = (req, res) => {
    res.send("Get all tasks")
}

const createTask = (req, res) => {
    res.send(req.body);
}

const getTask = (req,res)=>{
    res.send({id:req.params.id});
}

const updateTesk = (req, res) =>{
    res.send({id:req.params.id});
}

const deleteTask = (req, res)=>{
    res.send({id: req.params.id});
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTesk,
    deleteTask
}