import taskModel from "../models/task.js"
import { asyncWrapper } from "../middleware/async.js";
import { createCustomError } from "../errors/custom-error.js";
const getAllTasks = asyncWrapper(async (req, res) => {

    const tasks = await taskModel.find({});
    res.status(200).json({ tasks })
    //res.status(200).json({ tasks,ammount:tasks.length}) // Better for pagination E.g
    //res.status(200).json({success:true,data:{tasks,nbHits:tasks.length}}) -> Redundant for the front-end

})
const createNewTask = asyncWrapper(async (req, res) => {

    const taskCreated = await taskModel.create(req.body)

    res.status(201).json({ taskCreated })


})
const getSingleTask = asyncWrapper(async (req, res, next) => {

    const taskID = req.params.id
    const task = await taskModel.findOne({ _id: taskID })
    if (!task) {
        // const error = new Error("Route not found")
        // error.status = 404
        // return next(error)
        return next(createCustomError(`No task with id: ${taskID} was found`, 404))
    }
    console.log(task)
    res.status(200).json({ task })

})
const updateTask = asyncWrapper(async (req, res) => {
    const taskID = req.params.id

    const task = await taskModel.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true
    })
    // Sin el objeto de opciones, no pasará por el middleware de validaciones 
    if (!task) {
        return next(createCustomError(`No task with id: ${taskID} was found`, 404))
    }

    res.status(200).json({ task })



})
const deleteTask = asyncWrapper(async (req, res) => {
    const idParam = req.params.id
    const task = await taskModel.findOneAndDelete({ _id: taskID })
    if (!task) {
        return next(createCustomError(`No task with id: ${taskID} was found`, 404))
    }
    res.status(200).json({ task })


})
export { getAllTasks, createNewTask, getSingleTask, updateTask, deleteTask };