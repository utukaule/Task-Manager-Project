const express = require('express');
const app = express();
const tasks = require('./routes/tasks')

//middleware
app.use(express.json())

//routes
app.get('/hello', (req, res) => {
    res.send("Task Manager App");
})

app.use('/api/v1/tasks', tasks)


//app.get('/api/v1/tasks') - get all the tasks
//app.post('/api/v1/tasks') - create a new task
//app.get('api/v1/tasks/:id') - Get single task
//app.patch("/app/v1/tasks/:id") - Update task
//app.delete("/api/v1/tasks/:id") - delete task

app.get('/api/v1/')

const port = 5000;

app.listen(port, console.log(`Server is listing ${port}`));


