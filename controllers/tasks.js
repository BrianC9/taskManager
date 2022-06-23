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
    try {
        const taskID = req.params.id
        const task = await taskModel.findOne({ _id: taskID })
        if (!task) {
            return res.status(404).json({ msg: `No task with id: ${taskID} was found` })
        }
        console.log(task)
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ "error looking for a single task": error })
    }
}
const updateTask = async (req, res) => {
    try {
        const taskID = req.params.id

        const task = await taskModel.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true
        })
        // Sin el objeto de opciones, no pasará por el middleware de validaciones 
        if (!task) {
            return res.status(404).json({ msg: `No task with id: ${taskID} was found` })
        }

        res.status(200).json({ task })


    } catch (error) {
        res.status(500).json({ "error": error })
    }
}
const deleteTask = async (req, res) => {
    try {
        const idParam = req.params.id
        const task = await taskModel.findOneAndDelete({ _id: taskID })
        if (!task) {
            return res.status(404).json({ msg: `No task with id: ${taskID} was found` })
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ "error deleting the task": error })
    }

}
export { getAllTasks, createNewTask, getSingleTask, updateTask, deleteTask };