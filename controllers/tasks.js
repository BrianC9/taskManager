import taskModel from "../models/task.js"

const getAllTasks = async (req, res) => {
    try {
        const tasks = await taskModel.find({});
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json({ "error getting all tasks": error })
    }
}
const createNewTask = async (req, res) => {
    try {
        const taskCreated = await taskModel.create(req.body)

        res.status(201).json({ taskCreated })

    } catch (error) {
        res.status(500).json({ "error creating a new task": error })
    }
}
const getSingleTask = async (req, res) => {
    const idParam = req.params.id
    try {
        const taskSearched = await taskModel.findOne({ _id: idParam })
        console.log(taskSearched)
        if (!taskSearched) {
            return res.status(404).json({ msg: `No task with id: ${idParam} was found` })
        }
        res.status(200).json(taskSearched)
    } catch (error) {
        res.status(500).json({ "error looking for a single task": error })
    }
}
const updateTask = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ "error ": error })
    }
    const idParam = req.params.id
    console.log(req.body)
    res.send("Update a task " + idParam)
}
const deleteTask = async (req, res) => {
    try {
        const idParam = req.params.id
        const taskDeleted = await taskModel.findOneAndDelete({ _id: idParam })
        if (!taskDeleted) {
            return res.status(404).json({ msg: `No task with id: ${idParam} was found` })
        }
        res.status(200).json({ taskDeleted })
    } catch (error) {
        res.status(500).json({ "error deleting the task": error })
    }

}
export { getAllTasks, createNewTask, getSingleTask, updateTask, deleteTask };