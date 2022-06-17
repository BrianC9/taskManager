

const getAllTasks = (req, res) => {
    res.send("All task from the controller")
}
const createNewTask = (req, res) => {

    console.log(req.body)
    res.send("Create new task")
}
const getSingleTask = (req, res) => {
    const idParam = req.params.id

    console.log(req.params)
    res.send("Get single quote " + idParam)
}
const updateTask = (req, res) => {
    const idParam = req.params.id
    console.log(req.body)
    res.send("Update a task " + idParam)
}
const deleteTask = (req, res) => {
    const idParam = req.params.id

    res.send("Delete task " + idParam)
}
export { getAllTasks, createNewTask, getSingleTask, updateTask, deleteTask };