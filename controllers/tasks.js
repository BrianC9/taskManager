

const getAllTasks = (req, res) => {
    res.send("All task from the controller")
}
const createNewTask = (req, res) => {
    console.log(req.body)
    res.send("Create new task")
}
const getSingleTask = (req, res) => {
    console.log(req.params)
    res.send("Get single quote")
}
const updateTask = (req, res) => {
    console.log(req.params)
    console.log(req.body)
    res.send("Update a task")
}
const deleteTask = (req, res) => {
    console.log(req.params)
    res.send("Delete task")
}
export { getAllTasks, createNewTask, getSingleTask, updateTask, deleteTask };