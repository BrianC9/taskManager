import taskModel from "../models/task.js"

const getAllTasks = (req, res) => {
    res.send("All task from the controller")
}
const createNewTask = async (req, res) => {
    try {
        const taskCreated = await taskModel.create(req.body)
        res.status(201).json({ taskCreated })

    } catch (error) {
        res.status(500).json({ "error": error })
    }
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